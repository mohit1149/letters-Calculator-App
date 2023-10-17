// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputRequest = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const value = searchInput.length
    return (
      <div className="container">
        <div className="background-container">
          <div className="internal-container">
            <h1 className="heading">
              Calculate the <br /> Letters you enter
            </h1>
            <label htmlFor="myCard" className="paragraph">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              className="input-value"
              onChange={this.onChangeInputRequest}
              placeholder="Enter the phrase"
              id="myCard"
              value={value}
            />
            <p className="number-of-letters">No.of letters: {value} </p>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
