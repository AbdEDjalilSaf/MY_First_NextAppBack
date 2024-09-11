import  { createAdminClient, createSessionClient }  from "@/lib/appwrite.config";
import { NextResponse } from 'next/server';
import { cookies } from "next/headers";

export async function GET() {

const sessionCookies = cookies.get("custom_session");

    try {
const {databases} = await createSessionClient(sessionCookies.value);

const { documents: order, total} = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDER
);

    return NextResponse.json({order,total});
} catch (error){
console.error(' ----------------------------------------------  Error fetching data : ', error);
return NextResponse.json({error: 'Faild to fetch data'});
};
} 