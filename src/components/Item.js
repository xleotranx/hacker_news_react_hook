import React from "react";
import pluralize from "../utils";
import { Link } from "react-navi";
export default function Item({ item }) {
  const {
    id,
    title,
    user,
    time_ago,
    points,
    comments_count,
    url,
    domain
  } = item;
  return (
    <article>
      <a className="post-title" href={url} target="_blank">
        {title} {domain ? <i className="post-subtitle">{domain}</i> : null}
      </a>
      <p className="post-content">
        <i>{pluralize(points, "point")}</i> by
        <b className="post-user">{user}</b> {time_ago} |
        <Link as="a" className="post-comment" href={`/${id}`} title={title}>
          {pluralize(comments_count, "comment")}
        </Link>
      </p>
    </article>
  );
}
