import mongoose from 'mongoose';

const PostSchema = mongoose.Schema(

   {
        title: {
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image: {
            data: Buffer,
            contentType: String,
        },
        group:{
            type: String,
            ref: "Group",
        },
        group_Id:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:"Group"
        },
        author_name:{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 255,
        },
        author_id:{
            type: mongoose.SchemaTypes.ObjectId,
            ref:"User"
        },
        author_profile:{
            type: String,
            ref:"User" 
        },
        hasImage: {
            type: Boolean,
            default: false,
        },
        likes: {
            type: [
                {
                _id:{
                    type: mongoose.Types.ObjectId,       
                    ref: "User"
                }
              }
            ],
            default: [],
        },
        comments: {
            type: [
              {
               _id:{
                type: mongoose.Types.ObjectId,
                ref: "Comment"
               }
              },
            ],
            default: [],
          },
          date: {
            type: Date,
            default: Date.now(),
        },

   }

)

const Post = mongoose.model('Post', PostSchema)

export default Post;

