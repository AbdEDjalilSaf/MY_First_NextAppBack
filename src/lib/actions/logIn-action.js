"use server";
import { custom_session, createAdminClient } from "@/lib/appwrite.config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ID } from "node-appwrite"


const SignInWithEmail = async ({email,password}) => {

if (email === null) {
    throw new Error("Email is required");
} 

if (password === null) {
    throw new Error("Password is required");
}

console.log("email",email);
console.log("password",password);



console.log("-========================= wait");

// console.log(" ------------ is Account ---------------", account);

const {account} = await createAdminClient();
    const user = account.createEmailPasswordSession(email,password);
 

try {
    

    console.log("--------------- user ----------------", user);
    
        // cookies().set("custom_session", user.secret, {
        //     path: "/",
        //     value:(email),
        //     httpOnly: true,
        //     sameSite: 'strict',
        //     expires: new Date(user.expire),
        //     secure: true
        //     });  
    
// console.log(" ---------------------------- return --------",cookies().get("custom_session"));
// redirect("/");
    return user;

} catch (error) {
    console.log("+++++++++++ +++++ look here");
    console.log(error);
}


}

export default SignInWithEmail
