// // amplify/functions/scrapeUrl/handler.ts
// import { type Schema } from '../../data/resource';
// import axios from 'axios';

// export const handler = async (event: { arguments: { url: string } }) => {
//   ry {
//     const { url } = event.arguments;
//     const apiKey = process.env.CRAWL4AI_API_KEY;

//     if (!apiKey) {
//       throw new Error('CRAWL4AI_API_KEY is not configured');
//     }

//     // Call crawl4ai API
//     const response = await axios({
//       method: 'post',
//       url: 'https://api.crawl4ai.com/v1/scrape',
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//       },
//       data: {
//         url: url,
//         extract: {
//           clickstream: {
//             type: 'clickstream',
//             config: {
//               depth: 2,
//               max_pages: 10
//             }
//           }
//         }
//       }
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: 'Scraping completed successfully',
//         data: response.data
//       })
//     };

//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({
//         message: 'Error processing request',
//         error: error instanceof Error ? error.message : 'Unknown error'
//       })
//     };
//   }
// };
