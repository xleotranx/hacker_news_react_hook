import React, { Fragment, useState } from "react";
import ListComment from "./ListComment";
import pluralize from "../utils";

export default function Comment({ comment }) {
  const { user, time_ago, comments, comments_count, content } = comment;

  function createMarkup() {
    return { __html: content };
  }

  return (
    <Fragment>
      {comments_count ? <CommentToggle commentCount={comments_count} /> : null}
      <div className="comment__content">
        <span className="meta">
          by <b>{user}</b> {time_ago}{" "}
        </span>
        <p dangerouslySetInnerHTML={createMarkup()} />
        {comments_count ? <ListComment comments={comments} /> : null}
      </div>
    </Fragment>
  );
}

export function CommentToggle({ commentCount }) {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div
      className={isCollapse ? "toggle closed" : "toggle"}
      onClick={() => setIsCollapse(!isCollapse)}
    >
      {pluralize(commentCount, "comment")} {isCollapse ? "(...)" : null}
    </div>
  );
}
