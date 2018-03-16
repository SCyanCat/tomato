import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  componentDidMount() {
    console.log(111)
  }
  render() {
    return (
      <div>this is react</div>
    )
  }
}

render(<App />, document.getElementById('root'))
