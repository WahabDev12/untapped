import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    requried: true,
  },
});

// export default likeSchema;

const Like = mongoose.model("Like",likeSchema);

export default Like;
