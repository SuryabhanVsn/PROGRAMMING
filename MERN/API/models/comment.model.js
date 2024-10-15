//mongose
const {model, Schema} = require('mongoose')

const comment = model('user', new Schema({
    name : {
    type : String,
    required : true,
    }, 
    email: {
        type : String,
        required : true,
        unique : true,
    },
    articleId:{
        type : Schema.Types.ObjectId,
        ref : 'article',
        required : true,
    },
},{
        timestamps : true,
        autoCreate : true,
        autoIndex : true,
}))
module.exports = comment;