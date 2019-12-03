import React, { Component, ComponentType } from 'react'
import Hello from './Hello'

interface Loading {
  loading: boolean
}

function HelloHoC<T>(WrappedComponent: ComponentType<T>) {
  return class extends Component<T & Loading> {
    render() {
      const { loading, ...props } = this.props
      return loading ? <div>laoding</div> : <WrappedComponent {...props as T} />
    }
  }
}

export default HelloHoC(Hello)
