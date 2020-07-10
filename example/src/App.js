import React from 'react'
import Imagerotator from 'react_r_image'
import 'react_r_image/dist/index.css'

const App = () => {
  let images_array = [
    'https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647__340.jpg',

    'https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573__340.jpg',

    'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg',

    'https://cdn.pixabay.com/photo/2015/12/01/19/35/portrait-1072696__340.jpg',

    'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg',

    'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
  ]
  return <Imagerotator images={images_array} />
}

export default App
