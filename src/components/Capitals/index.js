import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capital extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onchangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              value={activeCapitalId}
              onChange={this.onchangeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capital
