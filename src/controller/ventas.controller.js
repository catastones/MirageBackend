import Venta from '../models/Venta'
import	User from '../models/User';
import Producto from '../models/Producto'
import Categoria from '../models/Categoria';
const conn = require("../database");
export const newVenta = async (req, res )=>{
    const {cliente,items, monto_total, pyment} = req.body;
    const session = await Venta.startSession();
    

    await session.withTransaction(async () => {
        const clienteDB = await  User.findById(`${cliente}`);   
        let v = new Venta({    
          cliente : clienteDB,
          items,
          monto_total, 
          pyment
        });
    
        await v.save({ session: session })
    });
    try {
      await items.map(async (product)=>{
            let P = await Producto.findById(product.idProduct)
                    .populate('categoria')
            P.stock = P.stock - product.unidades
            const categoriasDB = await Categoria.find({name : P.categoria});                 
            await Producto.findByIdAndUpdate(P._id, 
                            {$set:  
                              {modelo:P.modelo,
                              marca:P.marca,
                              descripcion:P.descripcion,
                              stock:P.stock,
                              precio:P.precio,
                              categoria: categoriasDB.map((cat) => cat._id),
                              url_image:P.url_image
                            
                            } })
        })

        session.endSession();
        res.json({"success": "success"}) ;
    } catch (error) {
        session.endSession();
    res.json({"error": error}) ;
}

}

export const listVenta = async (req, res )=>{
    await Venta.find()
                .populate({ path: 'cliente', select: ['username','nombre','apellido','email'] })
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaById = async (req, res )=>{
    const {ventaId} = req.params; 
    await Venta.findById(ventaId)
                .populate({path: 'cliente', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaByBuyer = async (req, res )=>{
    const {buyerId} = req.params; 
     await Venta.find({"cliente" : buyerId})
                .populate({path: 'cliente', select:['username','nombre','apellido','email']})
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}
export const getVentaByEntreFechas = async (req, res )=>{
    const {from,to} = req.params;
    const _busqueda = {
        createdAt : {
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
    const {ventaId} = req.params;
       
    await  Venta.findByIdAndDelete(ventaId)
                .then(()=> res.status(201).json({message : `Venta ${ventaId} eliminada`}))
                .catch((error)=> res.json({message : error})) ; 
}
export const updateVenta = async (req, res )=>{
    const {cliente,items, monto_total, pyment,_id} = req.body;
    const clienteDB = await  User.findOne({"username" : cliente});

    await Venta.findByIdAndUpdate(_id, 
                                {$set:  
                                  {cliente:clienteDB,
                                  items:items,
                                  monto_total:monto_total,
                                  pyment:pyment
                                                              
                                } },{new:true})
                .then(()=> res.status(201).json({message : `Venta ${_id} actualizada`}))
                .catch((error)=> res.json({message : error})) ; 

}