import { cookies } from "next/headers";
import { login } from "@/lib/actions/logIn-action"

 // value:(email),

export async function POST(requist){
try{
const data = await requist.json();
const user = await login(data);
 cookies().set("custom_session", user.secret, {
            path: "/",
            httpOnly: true,
            sameSite: 'strict',
            expires: new Date(user.expire),
            secure: true
            }); 
        return Response.json(user);
}catch(error){
console.log(" ----  here  Error  -------",error);
return Response.json('');

}



}