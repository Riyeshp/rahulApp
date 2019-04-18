import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class ModalUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let divstyle = {
      color: "blue",
      fontStyle: "italic",
      fontWeight: "semi-bold",
      width: "50%"
    };
    return (
      <div>
        <a style={divstyle} onClick={this.openModal}>
          {this.props.entries.alertID}
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            {this.props.entries.alertID} Ticket
          </h2>

          <form className="form-modal">
            <div className="modal-item">
              <label htmlFor="exampleInput">Alert ID: </label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.entries.alertID}
                onChange={event =>
                  this.setState({ alertID: event.target.value })
                }
              />
              <span className="modal-span" />
            </div>
            <div className="modal-item">
              <label htmlFor="exampleInput">Alert Entity: </label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertEntity}
                onChange={event =>
                  this.setState({ alertEntity: event.target.value })
                }
              />
              <span className="modal-span" />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Alert Entity Key: </label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertEntityKey}
                onChange={event =>
                  this.setState({ alertEntity: event.target.value })
                }
              />
            </div>
            <div className="modal-item">
              <label htmlFor="exampleInput">Alert Bussiness Date</label>

              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertBussinessDate}
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Alert created Date</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertcreatedDate}
                onChange={event =>
                  this.setState({ alertcreatedDate: event.target.value })
                }
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Alert Score</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertScore}
                onChange={event =>
                  this.setState({ alertScore: event.target.value })
                }
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Alert Score Normalised</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.alertScoreNormalised}
                onChange={event =>
                  this.setState({ alertScoreNormalised: event.target.value })
                }
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Bussiness Unit Identifier</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.bussinessUnitIdentifier}
                onChange={event =>
                  this.setState({
                    bussinessUnitIdentifier: event.target.value
                  })
                }
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Owner Identifier</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.ownerIdentifier}
                onChange={event =>
                  this.setState({ ownerIdentifier: event.target.value })
                }
              />
            </div>

            <div className="modal-item">
              <label htmlFor="exampleInput">Current State</label>
              <input
                type="text"
                id="exampleInput"
                className="form-control"
                defaultValue={this.props.entries.currentState}
                onChange={event =>
                  this.setState({ currentState: event.target.value })
                }
              />
            </div>
            <div className="modal-item">
              <button className="modal-btn" onClick={this.closeModal}>
                Close
              </button>
              <button className="modal-btn" onClick="">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalUI;
