import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Song,
  Sequencer,
  Synth,
} from '../node_modules/react-music/lib/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Song
          playing={this.state.playing}
          tempo={120}>
          <Sequencer
                        resolution={16}
                        bars={2}
                      >
                        <Synth
                          type="sine"
                          steps={[
                            [0, 8, 'c2'],
                            [8, 4, 'c2'],
                            [12, 4, 'd#2'],
                            [16, 8, 'f2'],
                            [24, 8, 'f1'],
                          ]}
                        />
                      </Sequencer>
        </Song>
      </div>
    );
  }
}

export default App;
