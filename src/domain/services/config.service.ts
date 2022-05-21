import dotenv from 'dotenv'

export function LoadConfig(){
    dotenv.config();

    const port = process.env.PORT;
    const apiKey = process.env.API_KEY;
    const connectionString = process.env.CONNECTION_STRING;

    console.log(process.env)

    if(port === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify PORT in your environment variables.");
        process.exit();
    }
    if(apiKey === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify API_KEY in your environment variables.");
        process.exit();
    }
    if(connectionString === undefined){
        console.log("Invalid configuration.");
        console.log("Make sure to specify CONNECTION_STRING in your environment variables.");
        process.exit();
    }
    else{
        const config: Config = {
            port: +port,
            apiKey: apiKey,
            connectionString: connectionString
        }

        return config;
    }
}

export type Config = {
    port: number,
    apiKey: string,
    connectionString: string
}