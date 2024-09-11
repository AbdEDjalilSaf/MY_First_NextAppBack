import { cookies } from "next/headers"
import { createSessionClient } from "./lib/appwrite.config"

const auth = {
    user:null,
    sessionCookies:null,

 
    getUser: async () => {
  auth.sessionCookies = cookies.get("custom_session");

try {
    const { account } = await createSessionClient(auth.sessionCookies.value);
    auth.user = account.get();

}catch(error){
console.log("where error ---------",error);
auth.user = null;
auth.sessionCookies = null;


}

    }







}

export default auth
