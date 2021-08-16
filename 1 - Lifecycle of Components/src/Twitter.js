import React, {Component} from 'react'


class Twitter extends Component{
    state = {
        tweet: 'title'
    }
    componentDidMount(){
        const {posts} = this.props
        console.log('Component Did Mount', posts)
    }

    componentDidUpdate(){
        const {loading} = this.props
        console.log('Component Did Update', loading)
    }
    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
    }
  render(){
      const{posts} = this.props
      console.log('render', posts)
      return(
        <div>
           tests
        </div>
      )
  }
}

export default Twitter