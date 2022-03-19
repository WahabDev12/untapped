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


/* This code is adding a comment to a post. */
const createComment = asyncHandler(async(req,res)=> {
    const user = await User.findById(req.user._id).select('_id firstName lastName');
    const postId = req.params.id;

    const { comment }  = req.body;

    const post = await Post.findById(postId)
  

    if(post){
        let newComment = {
            author_id: user._id,
            author_name: `${user.firstName} ${user.lastName}`,
            comment,
            post_id: postId
        }

        newComment = new Comment(newComment)
        await newComment.save();
        post.comments.push(newComment._id);
        Post.updateOne({ _id: postId }, { $push: { comments: { _id: newComment._id } } }).exec()        
        return res.status(200).send("Post added successfully");
    }

    return res.status(400).send("There was an error adding comment");

})

/* This is a function that is used to like a post.*/
const likePost = asyncHandler( async(req,res)=>{
    const user = await User.findById(req.user._id).select('_id');
    const postId = req.params.id;

    if (!user) return res.status(404).send("Invalid Request");

    let post = await Post.findOne({
        _id: postId,
        likes: { _id: user._id },
    }).select("_id");

    if (post) return res.status(400).send("Already Liked");
    
    post = await Post.findByIdAndUpdate(
        { _id: postId },
        { $push: { likes: { _id: user._id } } },
        { new: true }
    )

    res.status(200).send({ likes: post.likes.length });

})

const dislikePost = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id).select('_id');
    const postId = req.params.id;
    const post = await Post.findById(postId);

    const alreadyLiked = post.likes.find((item) => {
            return item._id.toString() === user._id.toString();
    });

    if (alreadyLiked) {
        const post = await Post.findByIdAndUpdate(
          { _id: postId },
          { $pull: { likes: { _id: user._id } } },
          { new: true }
        )

        res.status(200).send({ likes: post.likes.length });
        
    }
})

export {createPost, createComment,likePost, dislikePost};