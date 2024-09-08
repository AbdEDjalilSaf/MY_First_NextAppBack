import { NextResponse } from "next/server";
import { createSessionClient } from "@/lib/appwrite.config"



export async function middleware(requist) {

console.log("Middleware running")

return NextResponse.next();

}