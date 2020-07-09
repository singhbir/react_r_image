# react_r_image

> this package will help to rotate array of images in circular frame

[![NPM](https://img.shields.io/npm/v/react_r_image.svg)](https://www.npmjs.com/package/react_r_image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react_r_image
```

## Usage

```jsx
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
```

## License

MIT © [](https://github.com/)
