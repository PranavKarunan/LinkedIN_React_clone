import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import SendIcon from "@material-ui/icons/Telegram";
import React from "react";
import Moment from "react-moment";

function Post({ post }) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div className="posts">
      <div className="post__header">
        <div className="post__headerLeft">
          <Avatar />
          <div className="post_profile_details">
            <h3>{user.name}</h3>
            <Moment className="moment" fromNow interval={30}>
            {post.createdAt}
            </Moment>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      <div className="post__body">
        <p>{post.message} </p>
      </div>
      <div className="post__footer">
        <div className="post__footer__option">
          <ThumbUpAltIcon />
          <span>Like</span>
        </div>
        <div className="post__footer__option">
          <CommentIcon />
          <span>Comment</span>
        </div>
        <div className="post__footer__option">
          <ScreenRotationAltIcon />
          <span>Repost</span>
        </div>
        <div className="post__footer__option">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
