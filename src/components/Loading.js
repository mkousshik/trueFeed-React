import React, { Component } from 'react'
import LoadingGif from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center" style={{height: '10vh'}}>
        <img src={LoadingGif} alt="Loading"  />
      </div>
    )
  }
}
