import { createAdmineClient } from "@/lib/appwrite.config";
import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
const {database} = await createAdmineClient();

if(!database){
    console.log(' ----------------------------------------- your database not working');

}

const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ORDER;

if (!databaseId || !collectionId) {
    console.log(' ----------------------------------------- your database not working');
}

const { documents: order, total} = await database.listDocuments(
    databaseId,
    collectionId
);
if (!order || !total) {
    console.log(' ----------------------------------------- your roder and total not working');
}

    return NextResponse.json({order,total});
} catch (error){
console.error(' --------------------------------------------------------  Error fetching data : ', error);
return NextResponse.json({error: 'Faild to fetch data'}, {status: 500});
};
} 