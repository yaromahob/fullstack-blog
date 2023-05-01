import PostModel from "../models/Post.js";

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to create a post",
    });
  }
};

export const getAll = async (req, res) => {
  try {
  } catch (err) {}
};
