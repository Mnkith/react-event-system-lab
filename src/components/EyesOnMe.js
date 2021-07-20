import React, { Component } from 'react'


export default class EyesOnMe extends Component {


  render() {
    return <button
    style={{width: '100px', height: '20px'}}
    onFocus={() => console.log('Good!')}
    onBlur={() => console.log('Hey! Eyes on me!')}
    >
      Eyes On Me
    </button>
  }
}

