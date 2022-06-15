import { config } from 'dotenv';
import * as Mongoose from 'mongoose';


class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
  
    static async connect (): Promise<Mongoose.Connection> {
        config();        
        const connectionString = process.env.DATABASE_URL || '';
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        
       this.mongooseInstance = await Mongoose.connect(connectionString);       
       return this.mongooseInstance;
    }
    
}
console.log("About to connect to db")
DataAccess.connect();
export = DataAccess;