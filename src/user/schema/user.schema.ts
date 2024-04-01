import { Schema, Document} from 'mongoose';

export const UserSchema = new Schema({
   username:String,
   password:String,
});

export interface User extends Document{
    username:string;
    password:string;
}