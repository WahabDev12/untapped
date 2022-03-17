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
    console.log(group);
    res.sendStatus(201);

})

export {createGroup};
