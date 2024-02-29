import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false 
    })

  cached.conn = await cached.promise;

  return cached.conn;
}






// if(!cached) { cached = (global as any).mongoose = { conn: null, promise: null } }:

// Checks if the cached variable is falsy (i.e., null or undefined).
// If cached is falsy, it means there's no existing cached connection.
// It then assigns a new object to cached, and simultaneously sets global.mongoose to this new object:
// { conn: null, promise: null } is an object with conn and promise properties initialized to null.
// (global as any).mongoose is used to access the mongoose property on the global object, and it's set to the new object.


// In summary, this code is attempting to cache a MongoDB connection. It first checks if there's already a cached connection. 
//If not, it initializes a new cached object with null values for the connection and promise,
// and it assigns this object to both the cached variable and the mongoose property on the global object. 
//This ensures that subsequent calls to establish a MongoDB connection can check and use this cached connection if it exists.




