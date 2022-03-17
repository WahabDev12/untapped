import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Group from '../models/groupModel.js';

/* Creating a new group and adding the admin to the members array. */
const createGroup = asyncHandler(async (req,res)=> {

    const { name, description, group_privacy } = req.body;
    const user = await User.findById(req.user._id);

    if(!user){
        res.status(400)
        throw new Error("You br3 !!");
    }
    
    let group = new Group({
        name,
        description,
        group_admin_id: user._id,
        group_privacy
    })

    group.members.push({
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        isAdmin: true,
    });
    await group.save();
    res.sendStatus(201);

})

const createPostByGroupId = asyncHandler(async(req,res)=>{

    const user = await User.findById(req.user._id).select('_id firstName lastName profilePicture');
    const groupId = req.params.id;
    const group = await Group.findById(groupId);

    if(!group || !user){
        res.status(400);
        throw new Error("You br3 !!");
    }

    const {title, description} = req.body;
    let post = {
        group_Id: groupId,
        author_name: `${user.firstName} ${user.lastName}`,
        title,
        description,
        author_id: user._id,
        author_profile: user.profilePicture
    }

    if (req.files) {
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

    group.posts.push({
        _id: post._id
    })

    await group.save();

    res.send({
        ...post._doc,
        likes: post.likes.length,
        comments: post.comments.length,
    });
    

})

export {createGroup, createPostByGroupId};
