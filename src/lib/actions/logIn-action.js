"use server";
import { custom_session, createAdminClient } from "@/lib/appwrite.config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ID } from "node-appwrite"


const SignInWithEmail = async (formData) => {
    

const email = formData.get("email"); 
const password = formData.get("password"); 

if (email === null) {
    throw new Error("Email is required");
} 

if (password === null) {
    throw new Error("Password is required");
}





try {
    const {account} = await createAdminClient();
    const user = await account.createEmailPasswordSession(email,password);
    
    console.log("-=========================yes");
    cookies().set('custom_session', user.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(user.expire),
    secure: true
});  

console.log(" ----------------------------yes");
redirect("/");
    // return user;
} catch (error) {
    console.log(error);
}




console.log("You not soooo earlyyyyyyyyyyyyyyyyyyy");

// const session = await account.createEmailPasswordSession(
//     email,
//     password
// );

console.log("will log innnnnnnnnnnnnnnnnnnnnnn");

// cookies().set(custom_session, session.secret, {
//     path: "/",
//     httpOnly: true,
//     sameSite: "strict",
//     secure: true
// });

console.log("log Innnnnnnnnnnnnnnnnnnnnnnnnnnnnn");

// redirect("/");

}

export default SignInWithEmail
