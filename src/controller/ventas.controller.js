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
export const getVentaById = async (req, res )=>{
    const {ventaId} = req.params; 
    await Venta.findById(ventaId)
                .populate({path: 'User', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaByBuyer = async (req, res )=>{
    const {buyerId} = req.params; 
     await Venta.find(`cliente:${buyerId}`)
                .populate({path: 'User', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaByEntreFechas = async (req, res )=>{
    const {from,to} = req.params;
    const _busqueda = {
        timestamps : {
            '$gte': `${from}T00:00:00.000Z`,
            '$lt': `${to}T23:59:59.999Z`
                } 

        }
    await Venta.find(_busqueda)
                .populate({path: 'User', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const deleteVenta = async (req, res )=>{
    
}
export const updateVenta = async (req, res )=>{}