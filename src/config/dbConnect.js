import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tbsilveira:123@cursonode.hxziqdl.mongodb.net/curso-node");

let db = mongoose.connection;

export default db;
