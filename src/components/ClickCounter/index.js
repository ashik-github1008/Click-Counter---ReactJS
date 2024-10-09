// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div class="container">
        <h1>
          The button has been clicked
          <span className="number-style">{count} </span>times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button className="click-btn" onClick={this.onClick}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
