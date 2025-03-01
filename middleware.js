import { NextResponse } from "next/server";
import { createSessionClient } from "@/lib/appwrite.config"
import { redirect } from "next/dist/server/api-utils";



export async function middleware(requist) {

const user = auth.get();

if(!user){
   const response = NextResponse.redirect(new URL('/login', requist.url));
    return response;
}

return NextResponse.next();

}

export const config = {
    matcher: ['/'],
};
