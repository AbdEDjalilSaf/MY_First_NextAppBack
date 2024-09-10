import { NextResponse } from "next/server";
import { createSessionClient } from "@/lib/appwrite.config"
import { redirect } from "next/dist/server/api-utils";



export async function middleware(requist) {

const user = requist.cookies.get("custom_session");

if(!user){
   return NextResponse.redirect(new URL('/Login', requist.url));
    
}

return NextResponse.next();

}











export const config = {
    matcher: ['/'],
};