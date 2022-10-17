import User from "../models/User.js";
import Post from "../models/Post.js";

const newPost = async (req, res) => {
  const { message, user } = req.body;

  if (!req.body.message) {
    console.log("mess");
    return res.status(500).json("Please type something..!");
  }
  const userData = await User.findOne({ userName: user.userName });

  try {
    if (userData) {
      let newPost = new Post({
        user_id: userData._id,
        message: message,
      }).save();
      console.log("first");
      res.status(201).json(newPost);
    }
  } catch (error) {
    console.log("---------------------------------------------------");
    console.log(error.message);
    console.log("---------------------------------------------------");

    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  const post = await Post.find().sort({ date: -1 });
  res.status(200).json(post);
};

export { newPost, getAllPosts };
