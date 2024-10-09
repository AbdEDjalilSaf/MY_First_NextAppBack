import { cookies } from "next/headers"
import { createSessionClient } from "./lib/appwrite.config"

const auth = {
    user:null,
    sessionCookies:null,

    getUser: async () => {
  auth.sessionCookies = cookies().get("custom_session");

console.log("----------------     ---------------------",auth.sessionCookies);
const { account } = await createSessionClient(auth.sessionCookies); // back value

try {
    console.log("----------------   createSessionClient  ---------------------",account);
    console.log("your reel --------- : ");

    auth.user = account.get();

    console.log("your end --------- : ",auth.user);

}catch(error){

console.log("where error --------- : ",error);

auth.user = null;
auth.sessionCookies = null;


}

    }







}

export default auth
