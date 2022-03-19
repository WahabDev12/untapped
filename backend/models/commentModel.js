import mongoose from "mongoose";


const commentSchema = mongoose.Schema(

    {
          author_id: {
              type: mongoose.Types.ObjectId,
              ref: "User",
              required: true,
          },
          author_name:{
            type:String,
            required:true
          },
          comment: {
            type: String,
            required: true,
        },
          post_id: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Post",
        },
          date: {
            type: Date,
            default: Date.now(),
        },
    }


)

const Comment = mongoose.model("Comment",commentSchema);

export default Comment;