import { Component } from "react";
import AddPost from "./AddPost";

type HeaderProps = {
  title: string;
  onOpen: () => void;
};

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <header
          style={{
            padding: "30px 4vw",
            backgroundColor: "#007bff",
            color: "white",
          }}
        >
          <span>{this.props.title}</span>
          <AddPost onOpen={this.props.onOpen} />
        </header>
      </div>
    );
  }
}
