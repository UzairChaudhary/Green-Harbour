const axios = require('axios');
import {NextResponse} from 'next/server';

export async function GET() {
    try {
      // Extract API key from request headers (optional, if needed)
      //const apiKey = 'pat-na1-91c699a0-e9ad-4185-83a1-7d6c6a70027f';
        const apiKey = process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN ;
        //console.log(apiKey)
        // Construct the API request URL
      const apiUrl = `https://api.hubapi.com/crm/v3/objects/contacts`;
  
      // Make the request using axios
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Fallback to your stored API key if not provided in headers
        },
      });
  
      // Handle successful response
      return NextResponse.json(response.data);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to fetch data' });
    }
  }