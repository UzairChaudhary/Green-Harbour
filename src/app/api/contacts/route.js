const axios = require('axios');
import {NextResponse} from 'next/server';

export async function GET() {
    try {
      // Extract API key from request headers (optional, if needed)
        const apiKey = process.env.HUBSPOT_ACCESS_TOKEN ;
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


  export async function POST(req) {
    try {
      // Extract API key from request headers (optional, if needed)
        const apiKey = process.env.HUBSPOT_ACCESS_KEY ;
        
        const apiUrl = `https://api.hubapi.com/crm/v3/objects/contacts`;
        
        const data = await req.json();
        console.log("data : ",data)

        const response = await axios.post(apiUrl, data, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            }
          });
  
        // Handle successful response
        console.log("response : ",response.data)
        
        return NextResponse.json({ success: 'Data sent successfully' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Incorrect Information' });
    }
  }