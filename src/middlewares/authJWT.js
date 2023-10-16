import jwt from 'jsonwebtoken';
import config from '../config'
import User from '../models/User'
import Roles from '../models/Roles'

export const verifyToken = async (req, res, next) => {
    
    try{
        const Token = req.headers["x-acces-token"];    
        if(!Token ) return res.status(403).json({message:'La petición necesita Token'})
        const decoded = await jwt.verify(Token, config.SECRET)
        req.userid = decoded.id; // recupero id del token
        const user = await User.findById(req.userid);
        if(!user) return res.status(404).json({message:'Usuario no existe'})
        next();
    }catch(error){
        console.log(error)
        return res.status(401).json({message:error})
    }
    
}

export const isUser = async (req, res, next) =>{
     const admin = await User.findById(req.userid).populate('roles');//puedo usar req.id por que lo declare en la funcion anterior, no podria usarlo si lo hago en una funcion posterior
     
    if(!admin.roles[0].name ==="user") {return res.status(403).json({message:'Requiere Rol user'})};
    next();  
   
}
export const isAdmin = async (req, res, next) =>{
    const admin = await User.findById(req.userid).populate('roles');//puedo usar req.id por que lo declare en la funcion anterior, no podria usarlo si lo hago en una funcion posterior
    if(!(admin.roles[0].name =="admin"))
     {
       return res.status(403).json({message:'Requiere Rol Admnin'})
    };
    next();  

}
export const isAdminOrClient = async (req, res, next) =>{
    const admin = await User.findById(req.userid).populate('roles');//puedo usar req.id por que lo declare en la funcion anterior, no podria usarlo si lo hago en una funcion posterior
    const isAdmin = admin.roles[0].name ==="admin";
    const isClient = admin.roles[0].name ==="client";
    if(!(isAdmin || isClient))
     {
       return res.status(403).json({message:'No tiene rol para esta operación'})
    };
    next();  

}

export const isClient = async (req, res, next) =>{
    const admin = await User.findById(req.userid).populate('roles');//puedo usar req.id por que lo declare en la funcion anterior, no podria usarlo si lo hago en una funcion posterior
     
    if(!admin.roles[0].name ==="client") {return res.status(403).json({message:'Requiere Rol client'})};
    next();  

}