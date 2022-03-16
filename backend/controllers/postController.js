import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Post from '../models/postsModel.js';

const createPost = asyncHandler(async (req,res) =>{
    const {title, description} = req.body;
    
    const user = await User.findById(req.user._id);
  
    if(!user){
        res.status(400)
        throw new Error("You br3 !!");

    }
    let post = {
        author_name: `${user.firstName} ${user.lastName}`,
        title,
        description,
        author_profile: user.profilePicture
    }
    if(req.files){
        // const { data, mimetype } = req.files.file;
        // post = {
        //     ...post,
        //     image: { data, contentType: mimetype },
        //     hasImage: true,
        // };
        const {file} = req.files;
        post = {    
            ...post,
            image:{data:file.data, contentType: file.mimetype},
            hasImage: true
        }
    }
    post = new Post(post);
    await post.save();
    console.log(post);
    post = await Post.findById({ _id: post._id })
      .populate("author_id", "_id firstName lastName");

    
    res.send({
        ...post._doc,
        likes: post.likes.length,
        comments: post.comments.length,
    });

})

export {createPost};