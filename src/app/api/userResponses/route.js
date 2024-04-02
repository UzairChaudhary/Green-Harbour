const axios = require('axios');
import {NextResponse} from 'next/server';



// export async function sendContactInformation(contactInfo, questions, answers) {
//     try {
//         // Create or update contact in HubSpot CRM
//         const { data } = await hubspotClient.createOrUpdate(contactInfo);
        
//         // You can associate the questions and answers with the contact in HubSpot CRM
//         // For example, you can use custom properties to store this information
//         await hubspotClient.update(data.vid, {
//             properties: {
//                 'questions': questions,
//                 'answers': answers
//             }
//         });

//         console.log('Contact information sent to HubSpot CRM');
//     } catch (error) {
//         console.error('Error sending contact information to HubSpot CRM:', error);
//     }
// }

export async function POST(req) {
    try {
      // Extract API key from request headers (optional, if needed)
        //const apiKey = process.env.HUBSPOT_ACCESS_KEY ;
        const apiKey = 'pat-na1-28a5323f-307f-4fed-b187-40d82f016b48' ;
        const apiUrl = `https://api.hubapi.com/crm/v3/objects/contacts`;
        
        const data = await req.json();
        //console.log("data : ",data)
        
        // const { contactInfo, filteredQuestions, filteredAnswers } = reqBody;
        // console.log(contactInfo)
        // const data = {
        //     properties: [
        //       {
        //         property: 'firstname',
        //         value: contactInfo.firstname,
        //       },
        //       {
        //         property: 'lastname',
        //         value: contactInfo.lastname,
        //       },
        //       {
        //         property: 'email',
        //         value: contactInfo.email,
        //       },
              
        //       {
        //         property: 'phone',
        //         value: contactInfo.phone,
        //       },
        //       // Add custom properties for questions and answers
        //       ...filteredQuestions.map((question, index) => ({
        //         property: question[index], // Customize property names
        //         value: filteredAnswers[index],
        //       })),
        //     ],
        //   };
        // console.log(data)
        

        const response = await axios.post(apiUrl, data, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            }
          });
  
        // Handle successful response
        //console.log("response : ",response.data)
        return NextResponse.json({ success: 'Data sent successfully' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Incorrect Information' });
    }
  }
