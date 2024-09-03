import  {createAdminClient}  from "@/lib/appwrite.config";
import { NextResponse } from 'next/server';


export async function GET() {
    try {
const {databases} = await createAdminClient()

const { documents: order, total} = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDER
);

    return NextResponse.json({order,total});
} catch (error){
console.error(' ----------------------------------------------  Error fetching data : ', error);
return NextResponse.json({error: 'Faild to fetch data'}, {status: 500});
};
} 