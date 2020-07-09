import React, { useEffect } from 'react'
import './styles.module.css'

const Imagerotator = ({ images }) => {
  useEffect(() => {
    if (images === undefined) {
      throw new Error('please provide images as an argument')
    }
  }, [images])

  return (
    <div className='body'>
      <div className='Box'>
        {images ? (
          images.map((ele, index) => (
            <span key={index} style={{ '--i': index }}>
              <img src={ele} alt='image1' />
            </span>
          ))
        ) : (
          <h1>please Add images tag</h1>
        )}
      </div>
    </div>
  )
}

export default Imagerotator
