import	Categoria from '../models/Categoria.js';

export const newCategoria = async (req, res )=>{
    const {name} = req.body;
     const newCategoria = {
        "name":`${name}`
      };
    let nameExist = await Categoria.find(newCategoria)
    console.log(nameExist)
    if(!nameExist.length == 0) return res.json({message: 'La Categoria ya existe'})
    const  categoria = new Categoria(newCategoria);
    await categoria.save()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}

export const getCategorias = async (req, res )=>{
   await Categoria.find()
                .then((data)=> res.json(data))
                .catch((error)=> res.json({message : error})) 
}

export const deleteCategorias = async (req, res )=>{
    const {categoriaId} = req.params;
    await  Categoria.findByIdAndDelete(categoriaId)
                .then(()=> res.status(201).json({message : `Categoria ${name} eliminada`}))
                .catch((error)=> res.json({message : error})) ; 

}
export const updateCategorias = async (req, res )=>{
    const {_id, name} = req.body;        
    await Categoria.findByIdAndUpdate(_id, { name: name })
                .then(()=> res.status(201).json({message : `Categoria ${name} actualizada`}))
                .catch((error)=> res.json({message : error})) ; 
}