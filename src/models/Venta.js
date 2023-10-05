import { Schema, model } from "mongoose";
const ventaSchema = new Schema({
    cliente:[{ type: Schema.Types.ObjectId, ref: "User" }], 
    items:{
        type: Array,
        require: true
        /**
         * [
         * detalles producto
         * cantidad de unidades
         * precio unitario
         * ]
         */
        
    },
    monto_total:{
        type: Number,
        require: true,
                     
    },
    pyment:{
        type: Object,
        require: true
        //tipo de pago: credito/debito/efectivo/mercadopago/trensferencia
        //pagado: true/false
        //producto entregado: true/false
        //fecha_pago: date

        
    }
     

},{timestamps:true ,
    versionKey:false});
export default model("Venta", ventaSchema);