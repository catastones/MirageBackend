import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    nombre:{
        type: String,
        require: true,       
        
    },
    apellido:{
        type: String,
        require: true
        
    },
    username:{
        type: String,
        require: true,
        index: { unique: true }         
    },
    password:{
        type: String,
        require: true
        
    },
    roles: [{ type: Schema.Types.ObjectId, ref: "Roles" }],        
    
     email:{
        type: String,
        require: true
    },    
    
    enable:{
        type: Boolean,
        require: true
    },
    token:{
        type: String,
        require: true
        
    }    

},{timestamps:true ,
    versionKey:false});

userSchema.statics.encrypPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);   
    return await bcrypt.hash(password,salt);
}


userSchema.statics.comparePassword = async (password, receivePassword) =>{
    return await bcrypt.compare(password, receivePassword);

}
export default model("User", userSchema);