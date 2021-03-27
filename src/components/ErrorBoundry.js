import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  // = try, catch block
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops, That is not good!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
