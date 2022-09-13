import React from 'react'
import { FaArrowLeft, FaArrowRight, FaWindowClose } from 'react-icons/fa'

const ImageViewer = ({setReleaseSelected, images}) => {
  return (
    <section className='image-viewer'>
      <div className="image-container">
        {images.map((img, index) => {
          return <img key={index} src={img} alt='' className={index > 0 && 'hidden'}/>
        })}
        <nav className='image-select'> 
          {images.length > 1 && <FaArrowLeft className='is-icon'/>}
          <FaWindowClose className='is-icon' onClick={() => setReleaseSelected({selected: false, images: null})}/>
          {images.length > 1 && <FaArrowRight className='is-icon'/>}
        </nav>
      </div>
    </section>
  )
}

export default ImageViewer