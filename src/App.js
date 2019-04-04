import React, { Component } from 'react'
import rocketPng from './rocket.png'
import Background from './Background'
import ListItem from './ListItem'

const API_URL = 'http://rocketlaunchapi-env-2.wb2x8quswp.us-east-1.elasticbeanstalk.com'

class App extends Component {
  componentDidMount() {
    window.fetch(`${API_URL}/data`).then(
      response => response.json().then(
        json => this.setState({ data: json })
      )
    )
  }

  render() {
    if (!this.state) {
      return null
    }

    const data = this.state.data
    return (
      <React.Fragment>
        <Background />
        <div style={{
          position: 'absolute',
          width: 850,
          paddingLeft: 20,
        }}>
          {data.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                backgroundColor: 'white',
                marginTop: 20,
                marginBottom: 20,
                padding: 20,
                borderRadius: 5,
              }}
            >
              <div>
                <img
                  style={{
                    width: 400,
                    borderRadius: 5,
                  }}
                  src={item.rocketImage ? item.rocketImage : rocketPng}
                  alt=""
                />
              </div>
              <div style={{
                paddingLeft: 20,
                fontSize: 20,
              }}>
                <ListItem
                  label="Date"
                  name={item.launchTime &&
                    new Date(item.launchTime).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })
                  }
                />
                <ListItem
                  label="Mission"
                  name={item.missionName}
                  url={item.missionWiki}
                  paddingTop={10}
                />
                <ListItem
                  label="Rocket"
                  name={item.rocketName}
                  url={item.rocketWiki}
                  paddingTop={10}
                />
                <ListItem
                  label="Agency"
                  name={item.agencyName}
                  url={item.agencyWiki}
                  paddingTop={10}
                />
                <ListItem
                  label="Location"
                  name={item.locationName}
                  url={item.locationUrl}
                  paddingTop={10}
                />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default App
