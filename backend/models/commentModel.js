import mongoose from "mongoose";


const commentSchema = mongoose.Schema(

    {
        author: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            requried: true,
        },
          comment: {
            type: String,
            required: true,
            minlength: 5,
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