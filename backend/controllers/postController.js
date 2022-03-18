import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Post from '../models/postsModel.js';
import Group from '../models/groupModel.js';
import Comment from '../models/commentModel.js';

/* Creating a post and saving it to the database. */
const createPost = asyncHandler(async (req,res) =>{
    const {title, description, group} = req.body;
    
    const user = await User.findById(req.user._id);
  
    if(!user){
        res.status(400)
        throw new Error("User not found");

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


const createComment = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user._id).select('_id firstName lastName');
    const postId = req.params.id;

    const { userComment }  = req.body;

    const post = await Post.findById(postId).select('_id')

    if(post){
        let comment = {
            author: `${user.firstName} ${user.lastName}`,
            comment: userComment,
            post_id: postId
        }

        comment = new Comment(comment);
        await comment.save();

        post.comments.push({
            post_id: comment._id
        })

        res.status(200).send("Comment created successfully");
    }

    res.status(400).send("There was an error adding comment");

})

const likePost = asyncHandler( async(req,res)=>{
    const user = await User.findById(req.user._id).select('_id');
    const postId = req.params.id;

    const post = await Post.findById(postId); 
    const { likes } = await Post.findOne({ _id: postId }).select("likes");
   
    if(post){
        const alreadyLiked = likes.find((item) => {
            return item._id === user._id;
        });

        if(alreadyLiked){
            Post.updateOne({ _id: postId }, { $pull: { likes: user._id } }).exec();
            return res.status(200).send(true);
        }
        Post.updateOne({ _id: postId }, { $push: { likes: user._id } }).exec();
        res.status(200).send(false);
    }

})

export {createPost, createComment,likePost};