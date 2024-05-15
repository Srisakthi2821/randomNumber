import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomnum = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div>
        <div className="background_main">
          <div className="Card">
            <h1 className="heading_main">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              className="button"
              onClick={this.generateRandomnum}
              type="button"
            >
              Generate
            </button>
            <p className="number">{randomNumber}</p>
          </div>
        </div>
        <h1 className="finalHeading">
          Made with React : <span>C Sri Sakthi</span>
        </h1>
      </div>
    )
  }
}

export default RandomNumberGenerator
