import mongoose from "mongoose";

const likeSchema = mongoose.Schema(

    {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: "User"
          }
    }

)

const Likes = mongoose.model("Likes",likeSchema);

export default Likes;