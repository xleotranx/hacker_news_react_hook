import React, { Fragment } from "react";
import Comment, { CommentToggle } from "./Comment";

export default function ListComment({ comments, commentCount }) {
  return (
    <Fragment>
      {commentCount ? <CommentToggle commentCount={commentCount} /> : null}
      <ul className="comments">
        {comments.map((cm, index) => (
          <li key={index} className="comment">
            <Comment comment={cm} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
