import mongoose from 'mongoose';
import Likes from './likesModel';


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
        groupId:{
            type: mongoose.Types.ObjectId,
            ref: "Group",
        },
        author:{
            type: mongoose.Types.ObjectId,
            ref:"User"
        },
        hasImage: {
            type: Boolean,
            default: false,
        },
        likes: {
            type: [Likes],
            default: [],
        },
        comments: {
            type: [
              {
                type: mongoose.Types.ObjectId,
                ref: "Comment",
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

