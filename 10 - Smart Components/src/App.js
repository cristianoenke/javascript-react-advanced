import React, {useState} from 'react'
import Button from './Components/Button'
import PhotosGallery from './Components/Gallery'


function App () {
  const photos = [
    "http://placeimg.com/300/200/any",
    "http://placeimg.com/300/200/any",
    "http://placeimg.com/300/200/any"
  ]
  return (
    <>
     <h1>Galeria de fotos</h1>
     <PhotosGallery
        photos={photos}
     />
    </>
  )
}

export default App


