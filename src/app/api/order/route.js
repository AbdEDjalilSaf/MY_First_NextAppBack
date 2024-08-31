import { createAdmineClient } from "@/lib/appwrite.config";

export async function GET(request) {
    try {
const {database} = await createAdmineClient();
const { documents: order, total} = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDER
)
    return Response.json({order,total});
} catch (error){
console.error('Error fetching data : ', error);
return Response.json({error: 'Faild to fetch data'}, {status: 500});
};
} 