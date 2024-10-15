//mongose
const {model, Schema} = require('mongoose')

const User = model('user', new Schema({
    name : {
    type : String,
    required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    phone: {
        type : String,
        required : true,
        maxlenght: 20,
    },
    address: {
        type : String,
        required : true,
    },
    role: {
        type : String,
        enum : ['Admin' , 'Author'],
        default : 'Author',
    },
    status: {
        type : Boolean,
        default : true,
    }
},{
        timestamps : true,
        autoCreate : true,
        autoIndex : true,
}))
module.exports = User;