import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'
import {createRoles, createCategoria} from './libs/initialSetup'
//import archivo rutas

import userRoutes from './routes/user.routes'
import categoriaRoutes from './routes/categorias.router'
import productosRoutes from './routes/producto.router'
import ventasRoutes from './routes/ventas.router'

//
const app = express();
app.use(cors({
    origin:"*"
}));
createRoles();//inicializa roles
createCategoria();//inicializa categorias
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req,res)=>{
    res.json({
        "name": pkj.name,
        "version": pkj.version,
        "description": pkj.description,
        "author":pkj.author

    });
})
app.use('/user',userRoutes);
app.use('/categorias',categoriaRoutes)
app.use('/productos',productosRoutes);
app.use('/ventas',ventasRoutes);

export default app;
