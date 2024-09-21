import { NextResponse } from "next/server";
import { createSessionClient } from "@/lib/appwrite.config"
import { redirect } from "next/dist/server/api-utils";
import  auth  from "@/auth"


export async function middleware(requist) {

// const user = requist.cookies.get("custom_session");
const user = await auth.getUser();

console.log("---------- middleware ----------",user);

if(!user){
    requist.cookies.delete("custom_session");
   return NextResponse.redirect(new URL('/Login', requist.url));
    
}

return NextResponse.next();

}



export const config = {
    matcher: ['/'],
};