import User from "../models/User.js";
import Post from "../models/Post.js";

const newPost = async (req, res) => {
  const { message, user } = req.body;

  if (!req.body.message) {
    console.log("mess");
    return res.status(500).json("Please type something..!");
  }
  const userData = await User.findOne({ userName: user.userName });
  console.log(userData._id)

  try {
    if (userData) {
      let newPost =await new Post({
        user_id: userData._id,
        message: message,
      }).save();
      console.log("first");
      console.log(newPost)
      res.json(newPost);
    }
  } catch (error) {
    
    console.log(error.message);
  

    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  const post = await Post.find().sort({ date: -1 });
  // const post = await Post.aggregate([
  // {
  //   $project:{
  //     "user_id":1,
  //     "message":1,
  //     "createdAt":1
  //   },
    
  //     $lookup:{
  //       from: 'users',
  //       localField: 'user_id',
  //       foreignField: '_id',
  //       as: "result"
  //     },
      
  //     $unwind:{
  //       path:"$result"
  //     },
  //     $project:{
  //       "_id":1,
  //       "message":1,
  //       "createdAt":1,
  //       "result.name":1
  //     }
    
  // }
  // ])
  // console.log(post)
  
  res.status(200).json(post);
};

export { newPost, getAllPosts };
