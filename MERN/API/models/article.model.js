//mongose
const {model, Schema} = require('mongoose')

const article = model('article', new Schema({
    name : {
    type : String,
    required : true,
    },
    status: {
        type : Boolean,
        default : true,
    },
    content : {
        type : String,
        required : true,
    },
    categoryId:{
        type : Schema.Types.ObjectId,
        ref : 'category',
        required : true,
    },
    image:{
        type : String,
        required : true,
    }
},{
        timestamps : true,
        autoCreate : true,
        autoIndex : true,
}))
module.exports = article;