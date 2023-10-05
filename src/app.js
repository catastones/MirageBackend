import express from "express";
import morgan from 'morgan';
const cors = require('cors');
import pkj from '../package.json';
import './database'


const app = express();
app.use(cors({
    origin:"*"
}));

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
