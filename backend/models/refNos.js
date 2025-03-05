const mongoose = require('mongoose');

const refNosSchema = new mongoose.Schema({
    refno:{
        type: String,
        required: [true, 'Please provide reference number'] ,
        trim: true,
        unique:true,
        maxLength:[100, 'reference number can not exceed 100 characters']
    },
   
    route: {
        type: String,
        required: [true, 'Please provide route name'] ,
        trim: true,
        maxLength:[100, 'route name can not exceed 100 characters']
    }, 
      
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Reference', refNosSchema);