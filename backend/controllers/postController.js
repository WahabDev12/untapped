import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Post from '../models/postsModel.js';
import Group from '../models/groupModel.js';

/* Creating a post and saving it to the database. */
const createPost = asyncHandler(async (req,res) =>{
    const {title, description, group} = req.body;
    
    const user = await User.findById(req.user._id);
  
    if(!user){
        res.status(400)
        throw new Error("You br3 !!");

    }
    const community = await Group.findOne({name: group}).select('group_privacy');
    const communityToAdd =  await Group.findById(community._id);

    let post = {
        author_name: `${user.firstName} ${user.lastName}`,
        title,
        group,
        group_Id: community._id,
        description,
        author_id: user._id,
        author_profile: user.profilePicture
    }
    if(req.files){

        const { data, mimetype } = req.files.file;
        post = {
            ...post,
            image: { data, contentType: mimetype },
            hasImage: true,
        };
       
    }

    post = new Post(post);
    await post.save();
    post = await Post.findById({ _id: post._id })
    .populate("author_id", "_id firstName lastName");
    
    communityToAdd.posts.push({
        _id: post._id
    })

    await communityToAdd.save();

    res.send({
        ...post._doc,
        likes: post.likes.length,
        comments: post.comments.length,
    });

})



export {createPost};