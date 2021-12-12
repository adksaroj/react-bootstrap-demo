import './App.css';
import 'react-bootstrap'
import React from 'react';
import { Button, Modal } from 'react-bootstrap'

class App extends React.Component {


  constructor(props) {
    super(props);

    // Set initial state 
    this.state = { showModal : false }
  }

  toggleModal = () => {
    this.setState({ showModal : !this.state.showModal })
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">React Bootstrap Demo</h1>
          <Button variant="primary" onClick={this.toggleModal}>
            Launch modal
          </Button>

                  {/* <Alert variant="primary">
            This is a primary alert—check it out!
          </Alert> */}

          <Modal show = {this.state.showModal} centered>
            <Modal.Header><b>Confirm</b></Modal.Header>
            <Modal.Body>This cannot be undone. Are you sure you want to perform this action ?</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.toggleModal}>
                Confirm
              </Button><Button variant="danger" onClick={this.toggleModal}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}
export default App