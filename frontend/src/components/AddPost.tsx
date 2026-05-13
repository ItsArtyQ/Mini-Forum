import { Component } from "react";

type Props = {
  onOpen: () => void;
};

export default class AddPost extends Component<Props> {
  render() {
    return (
      <div>
        <button className="add-post" onClick={() => this.props.onOpen()}>
          + Add Post
        </button>
      </div>
    );
  }
}
