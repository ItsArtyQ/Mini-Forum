import { Component } from "react";
import type { PostType } from "../types/post";

type Props = {
  post: PostType;
};

export default class Post extends Component<Props> {
  post = this.props.post;
  render() {
    return (
      <div className="post">
        <h3>{this.post.author}</h3>
        <p>{this.post.description}</p>
        <b>{new Date(this.post.createdAt).toLocaleTimeString("en-US")}</b>
      </div>
    );
  }
}
