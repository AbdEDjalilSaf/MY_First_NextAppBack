import { createAdmineClient } from "@/lib/appwrite.config"

export async function GET(requist) {
const {database} = await createAdmineClient();
const { documents: order, total} = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ORDER
)
    return Response.json({order,total});
} 