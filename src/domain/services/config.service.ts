import dotenv from 'dotenv'

dotenv.config();
export const Port = process.env.PORT;
export const ApiKey = process.env.API_KEY;
export const ConnectionString = process.env.CONNECTION_STRING;

export function CheckConfig(){
    // console.log(process.env)

    if(Port === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify PORT in your environment variables.");
        process.exit();
    }
    if(ApiKey === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify API_KEY in your environment variables.");
        process.exit();
    }
    if(ConnectionString === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify CONNECTION_STRING in your environment variables.");
        process.exit();
    }
}
