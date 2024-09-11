import { cookies } from "next/headers"


const auth = {
    user:null,
    sessionCookies:null,


    getUser: async () => {
  auth.sessionCookies = cookies.get("custom_session")

try {



}catch(error){


    
}

    }







}

export default auth
