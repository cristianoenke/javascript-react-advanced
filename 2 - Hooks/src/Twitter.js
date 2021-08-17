import { useEffect,useState, memo } from "react"
import React from 'react'

const areEqual = (prevProps, nextProps) =>{
    return true
}

function Twitter(props){
    const {loading} = props
    const [tweet, setTweet] = useState('Title')
    // componentDidMount
    useEffect(()=> {
        const {posts, loading} = props
        console.log('Component Did Mount', posts)
        console.log('Component Did Mount loading', loading)
    },[]) 

    // componentDidUpdate
    useEffect(()=> {
        console.log('Component Did Update',loading)
    },[loading]) 

    //componentWillUnmount
    useEffect(()=>{
        return () =>{
            console.log('Component Will Unmount') 
        }
    },[])


    const handletweet = () =>{
        setTweet('Tweet Atualizado')
    }

    console.log('Tweet atualizado')
    return(
        <div>
            <button onClick={handletweet}> Re render</button>
           tests
        </div>
      )
}

export default memo(Twitter,areEqual)