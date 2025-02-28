// // amplify/functions/scrapeUrl/resource.ts
// import { defineFunction } from '@aws-amplify/backend';
// import { Schema } from '../../data/resource';

// export const scrapeUrl = defineFunction({
//   name: 'scrapeUrl',
//   environment: {
//     CRAWL4AI_API_KEY: process.env.CRAWL4AI_API_KEY || '',
//   }
// });

// // Add this to your schema to expose the function
// export const handler = async (event: { arguments: { url: string } }) => {
//   // Your function implementation here
// };
