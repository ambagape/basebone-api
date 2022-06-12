import { config } from 'dotenv';
import * as Mongoose from 'mongoose';


class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    
    constructor () {        
        DataAccess.connect();
    }
    
    static connect (): Mongoose.Connection {
        config();        
        const connectionString = process.env.DATABASE_URL || '';
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        
       this.mongooseInstance = Mongoose.connect(connectionString);
       return this.mongooseInstance;
    }
    
}

DataAccess.connect();
export = DataAccess;