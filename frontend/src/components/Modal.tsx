import { Component } from "react";

type Props = {
  onClose: () => void;
  onAdd: (name: string, description: string) => void;
  onInvalidPost: boolean;
};

type State = {
  description: string;
  name: string;
};

export default class Modal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      description: "",
      name: "",
    };
  }

  render() {
    return (
      <div className="modal-container" onClick={() => this.props.onClose()}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Enter Text</h3>
            <button onClick={() => this.props.onClose()}>&times;</button>
          </div>
          <div className="modal-content">
            <input
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              placeholder="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            {this.props.onInvalidPost && <h4>All fields are required!</h4>}
          </div>
          <div className="modal-footer">
            <button
              onClick={() =>
                this.props.onAdd(this.state.name, this.state.description)
              }
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}
