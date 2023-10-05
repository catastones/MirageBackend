import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'
import {createRoles, createCategoria} from './libs/initialSetup'


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


export default app;
