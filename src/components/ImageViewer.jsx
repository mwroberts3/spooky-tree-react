import React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ImageViewer = ({setReleaseSelected, images}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex(() => {
      if (activeImageIndex + 1 === images.length) return 0;
      return activeImageIndex + 1;
    });
  };

  const prevImage = () => {
    setActiveImageIndex(() => {
      if (activeImageIndex - 1 === -1) return images.length - 1;
      return activeImageIndex - 1;
    });
  };

  return (
    <section className='image-viewer'>
      <div className="image-container">
        {images.map((img, index) => {
          return <img key={index} src={img} alt='' className={index !== activeImageIndex && 'hidden'} onClick={() => setReleaseSelected({selected: false, images: null})} />
        })}
        <nav className='image-select'> 
          {images.length > 1 && <>
          <FaArrowLeft className='is-icon' onClick={prevImage}/> 
          <FaArrowRight className='is-icon' onClick={nextImage}/>
          </>}
        </nav>
      </div>
    </section>
  )
}

export default ImageViewer