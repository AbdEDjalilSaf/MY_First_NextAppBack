import { createAdmineClient } from "@/lib/appwrite.config";

export async function GET(request) {
    try {
const {database} = await createAdmineClient();

if(!database){
    console.log(' ----------------------------------------- your database not working');

}

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ORDER;

if (!databaseId || !collectionId) {
  throw new Error('Environment variables for database ID or collection ID are missing.');
}

const { documents: order, total} = await database.listDocuments(
    databaseId,
    collectionId
)
    return Response.json({order,total});
} catch (error){
console.error(' --------------------------------------------------------  Error fetching data : ', error);
return Response.json({error: 'Faild to fetch data'}, {status: 500});
};
} 