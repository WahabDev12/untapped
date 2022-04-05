import mongoose from "mongoose";

const groupSchema = mongoose.Schema(
  
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 255,
        },
        description: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 255,
        },
        group_admin_id: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
        group_privacy: {
            type: String,
            enum: ["public", "private"],
            default: "public",
        },
        theme_color: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 255,
          default:'#AF2C2A'
      },
        members: {
            type: [
              {
                _id: {
                  type: mongoose.Types.ObjectId,
                  required: true,
                  ref: "User",
                },
                name: {
                  type: String,
                  required: true,
                },
                isAdmin: {
                  type: Boolean,
                  default: false,
                },
              },
            ],
            default: [],
          },
        posts: {
            type: [
              {
                _id: {
                  type: mongoose.Types.ObjectId,
                  required: true,
                  ref:"User"
                },
              },
            ],
            default: [],
        }
        
    }

)

const Group = mongoose.model("Group",groupSchema);

export default Group;