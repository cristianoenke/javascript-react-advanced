import React, {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('error Info', errorInfo)
    }
    render () {
        return this.props.children
    }
}

export default ErrorBoundary