import { configDotenv } from 'dotenv';
import { NextResponse } from 'next/server';
import url from 'url';

const { edamamAppID, edamamAppKey } = process.env;

export default async function handler(req, res) {
    let queryObj = {
        ...req.query,
        type: 'public',
        app_id: edamamAppID,
        app_key: edamamAppKey,
        random: true,
    }

    const requestUrl = new URL("https://api.edamam.com/api/recipes/v2")
    requestUrl.search = new URLSearchParams(queryObj).toString();

    const recipeResp = await fetch(requestUrl.toString());
    const recipeData = await recipeResp.json();

    res.status(200).json(recipeData);
}