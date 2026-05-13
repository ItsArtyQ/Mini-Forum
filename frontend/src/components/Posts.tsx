import { Component } from "react";
import Post from "./Post";
import type { PostType } from "../types/post";
import "../styles/posts.css";

type Props = {
  posts: PostType[];
};

export default class Posts extends Component<Props> {
  render() {
    if (this.props.posts.length > 0) {
      return (
        <div className="posts">
          {this.props.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
    } else {
      return <h3>Posts not found</h3>;
    }
  }
}
