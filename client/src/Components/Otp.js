import React from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'

class Otp extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.openBox}>Open ReactDialogBox </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='60%'
              headerBackgroundColor='red'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Title'
            >
              <div>
                <h1>Dialog Content</h1>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    )
  }
}

export default Otp