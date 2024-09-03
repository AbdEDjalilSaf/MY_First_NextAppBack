import { cookies } from 'next/headers';
import {Account, Client, Databases} from 'node-appwrite'

const createAdminClient = async ()=>{

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    .setKey(process.env.NEXT_PUBLIC_API_ID);

return {
    get account() {
        return new Account(client);
    },
    get database() {
        return new Databases(client);
    }
}

};

// create session
const createSessionClient = async ()=>{

    const client = new Client();

    client
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

const session = cookies.get("custom_session");
if(session){

    client.setSession(session.value);

}

return {
    get account(){
        return new Account(client);
    }
}
}

export  {createAdminClient,createSessionClient}








// export const account = new sdk.Account(client);
