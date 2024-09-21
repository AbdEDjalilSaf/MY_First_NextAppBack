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

console.log("email",email);
console.log("password",password);



console.log("-========================= wait");

const {account} = await createAdminClient();
// console.log(" ------------ is Account ---------------", account);


    const user =  account.createEmailPasswordSession(email,password);

console.log("--------------- user ----------------", user);

    cookies().set("custom_session", user.secret, {
        path: "/",
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(user.expire),
        secure: true
        });  

console.log(" ---------------------------- return --------",cookies().get("custom_session"));

try {
    // const user =  account.createEmailPasswordSession(email,password);
    // cookies().set("custom_session", user.secret, {
    //     path: "/",
    //     httpOnly: true,
    //     sameSite: 'strict',
    //     expires: new Date(user.expire),
    //     secure: true
    //     });  

// console.log(" ---------------------------- return --------",cookies().get("custom_session"));
redirect("/");
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
