import Venta from '../models/Venta'
import	User from '../models/User';

export const newVenta = async (req, res )=>{
    const {cliente,items, monto_total, pyment} = req.body;
    const clienteDB = await  User.findOne(`username : ${cliente}`);
   
    let v = new Venta({    
        cliente : clienteDB,
        items,
        monto_total, 
        pyment
      });

     await v.save()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 

}
export const listVenta = async (req, res )=>{
    await Venta.find()
                .populate({path: 'User', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaById = async (req, res )=>{}
export const getVentaByBuyer = async (req, res )=>{}
export const getVentaByEntreFechas = async (req, res )=>{}
export const deleteVenta = async (req, res )=>{}
export const updateVenta = async (req, res )=>{}