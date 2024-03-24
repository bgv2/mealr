import { getClientToken, getLocations } from 'kroger-api-wrapper/lib';
import { configDotenv } from 'dotenv';
import { NextResponse } from 'next/server';

const clientBase64 = btoa(process.env.krogerClientID + ':' + process.env.krogerClientSecret);
const scope = 'product.compact';

const response = await getClientToken({
    clientBase64,
    scope,
});

const token = response.data.access_token;

// export async function GET(req, res) {
export default async function handler(req, res) {
    if (!req.query.zip?.match(/\d{5}/)) {
        return res.status(400).json({ error: 'Invalid zip code' });
    }

    const filters = {
        limit: 20, "zipCode.near": req.query.zip
    };

    const zipResponse = await getLocations({
        token,
        filters,
    });

    console.log(zipResponse);

    const locations = zipResponse.data;

    res.status(200).json({ zip: locations });
}