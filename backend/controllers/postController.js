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
        Post.updateOne(
            { _id: postId },
            { $push: { comments: { _id: newComment._id } } }).exec()        
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

/* This is a function that is used to dislike a post. */
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


/* This is a function that is used to edit a post. */
const editPost = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const post = await Post.findById(postId);
    const user = await User.findById(req.user._id);
    const {title, description} = req.body;

    if(post){
        const isAllowed = () => {
            return post.author_id === user._id
        }

        if(isAllowed){
            await Post.findOneAndUpdate(
                { _id: postId },
                { title: title },
                { description: description }
            )
            res.status(200).send(post);
        }
        res.status(400).send("Not authorized to edit")
    }
    res.status(404).send('Post not found')
})

/* This is a function that is used to delete a post. */
const deletePost = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if(post){
        await Post.deleteOne(postId);
        await Comment.deleteMany({post_id: postId});
        return res.status(200).send('Post deleted successfully')
    }
    return res.status(400).send("Invalid Operation");

})

/* This is a function that is used to edit a comment. */
const editComment = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const commentId  = req.params.comment_id;
    const user = await User.findById(req.user._id);
    const post = await Post.findById(postId);
    const comment = await Comment.findById(commentId);

    if(post && comment){
        const isAllowed = () => {
            return comment.author_id === user._id
        }
        if(isAllowed){
            await Comment.findOneAndUpdate(
                { post_id: commentId},
                {comment: req.body.comment}
            )
            res.status(200).send(comment);
        }
        res.status(400).send("Not authorized to edit")
    }
    res.status(404).send('Comment or post not found')

})

/* This is a function that is used to delete a comment. */
const deleteComment = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const commentId  = req.params.comment_id;
    const user = await User.findById(req.user._id);

    let comment = await Comment.findOneAndDelete({
        _id: commentId,
        post_id: postId,
        author_id: user._id
    })

    await Post.findByIdAndUpdate(
        { _id: postId },
        {
           $pull: { comments: comment_id },
        },
        { new: true }
    );
    res.status(200).send({
        _id: comment._id,
    });
})

const queryAllPosts = asyncHandler(async(req,res)=>{
    
})

const querySinglePost = asyncHandler(async(req,res)=>{
    const postId = req.params.id;
    const post = await Post.findById(postId).select({
        _id: 1,
        title: 1,
        description: 1,
        image: 1,
        groupId: 1,
        author_id: 1
    })
    if (!post) return res.sendStatus(404);
    res.status(200).send(post);
})



export {
    createPost,
    createComment,
    likePost, 
    dislikePost,
    deletePost,
    deleteComment,
    editPost,
    querySinglePost,
    editComment
};