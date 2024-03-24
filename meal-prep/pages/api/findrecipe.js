import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { health } = req.query;
  const edamamAppID = process.env.edamamAppID;
  const edamamAppKey = process.env.edamamAppKey;

  try {
    let queryObj = {
      type: 'public',
      app_id: edamamAppID,
      app_key: edamamAppKey,
      random: true,
      health // Add health parameter from request query
    };

    const requestUrl = new URL("https://api.edamam.com/api/recipes/v2");
    requestUrl.search = new URLSearchParams(queryObj).toString();

    const recipeResp = await fetch(requestUrl.toString());
    const recipeData = await recipeResp.json();

    res.status(200).json(recipeData);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
