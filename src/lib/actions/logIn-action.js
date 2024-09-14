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



console.log("-========================= wait");

const {account} = await createAdminClient();
console.log(" ------------ is Account ---------------", account);

try {
    const user = await account.createEmailPasswordSession(email,password);
        cookies().set("custom_session", user.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(user.expire),
    secure: true
});  

console.log(" ---------------------------- return --------",cookies().get("custom_session"));
redirect("/Team");
    // return user;
} catch (error) {
    console.log(error);
    console.log("+++++++++++ +++++ look here");
}





// const session = await account.createEmailPasswordSession(
//     email,
//     password
// );


// cookies().set(custom_session, session.secret, {
//     path: "/",
//     httpOnly: true,
//     sameSite: "strict",
//     secure: true
// });


// redirect("/");

}

export default SignInWithEmail
