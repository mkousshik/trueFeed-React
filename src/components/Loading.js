import React, { Component } from 'react'
import LoadingGif from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-4" style={{height: '30px'}}>
        <img src={LoadingGif} alt="Loading"  />
      </div>
    )
  }
}
