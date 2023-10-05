import	User from '../models/User';
import	Roles from '../models/Roles';
import jwt from 'jsonwebtoken';
import config from '../config';

export const singnup = async (req, res )=>{
    const { username, password, nombre, apellido, roles, email} = req.body;
    const enable = true;
    const roleDB = await Roles.find({name : roles});
    console.log(roleDB);
     // creating a new User
     const user = new User({
        username,
        nombre,
        password,
        apellido,
        email, 
        enable,      
        roles: roleDB.map((role) => role._id),
      });
  
    user.password = await User.encrypPassword(user.password);
    user.enable = true;
    console.log(user);
    const saveUser =  await user.save();
                    
   const token =  jwt.sign({id:saveUser._id},config.SECRET,{expiresIn:86400});
   saveUser.password = null;   
   saveUser.token = token;
   res.json(saveUser);
}
export const singnin = async (req, res )=>{
    const userFound = await User.findOne({username : req.body.username})
                                .populate('roles');
                                                             
   
    if (!userFound) return res.status(400).json({message: 'username incorrecto'});
    const passMach = await User.comparePassword(req.body.password ,userFound.password )
    if (!passMach) return res.status(400).json({message: 'password incorrecto'});
    userFound.password = null;
    const token =  jwt.sign({id:userFound._id},config.SECRET,{expiresIn:86400});
    if (userFound.enable) userFound.token = token;
    res.json(userFound);     
  
    
}