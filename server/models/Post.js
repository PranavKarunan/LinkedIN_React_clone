import mongoose from 'mongoose'
const schema = mongoose.Schema;

const PostSchema = schema (
    {
        user_id :{
            type:String,
            required:true,
            ref:'User'
            
        },
        descriptions:{
            type:String,
            
        },
        message:{
            type:String,
            required:true
        },
        image:{
            type:String
        },
        commentedBy:{
            type:Array,
        },
        reactedBy:{
            type:Array
        },
        date:{
            type: Date,
            default:new Date()
        },
      
    },
    {
        timestamps:true
    }
)
export default mongoose.model("Post", PostSchema);