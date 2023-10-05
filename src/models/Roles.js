import { Schema, model } from "mongoose";

export const RolesSistem = ['user','admin','client'];
const RoleSchema = new Schema({
    name: String

},{
    versionKey:false
});

export default model('Roles',RoleSchema);