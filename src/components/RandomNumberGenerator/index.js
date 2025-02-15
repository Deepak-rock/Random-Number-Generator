// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    console.log(randomNum)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.changeNum}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
