import {Account, Client, Databases} from 'node-appwrite'

const createAdminClient = async ()=>{

const client = new Client();

client
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

}

export  { createAdminClient }








// export const account = new sdk.Account(client);
