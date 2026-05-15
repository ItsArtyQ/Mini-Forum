import { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import type { PostType } from "./types/post";
import "./styles/main.css";
import Modal from "./components/Modal";
import axios, { AxiosError } from "axios";

const baseURL: string = `/api`;

type State = {
  posts: PostType[];
  modalOpen: boolean;
  invalidPost: boolean;
};

type Props = unknown;

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      posts: [],
      modalOpen: false,
      invalidPost: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount(): void {
    axios.get(`${baseURL}/get-posts`).then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.modalOpen && (
          <Modal
            onClose={this.closeModal}
            onAdd={this.addPost}
            onInvalidPost={this.state.invalidPost}
          />
        )}
        <Header title={"Mini Forum"} onOpen={this.openModal} />
        <main>
          <Posts posts={this.state.posts} />
        </main>
      </div>
    );
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  async addPost(name: string, description: string) {
    try {
      const res = await axios.post(`${baseURL}/create-post`, {
        author: name,
        description: description,
      });
      this.setState({
        posts: [
          ...this.state.posts,
          {
            id: res.data.post.id,
            description: res.data.post.description,
            author: res.data.post.author,
            createdAt: res.data.post.createdAt,
          },
        ],
        modalOpen: false,
        invalidPost: false,
      });
    } catch (error) {
      const err = error as AxiosError;

      const status = err?.response?.status;

      if (status === 400) {
        this.setState({ invalidPost: true });
      }
    }
  }
}
