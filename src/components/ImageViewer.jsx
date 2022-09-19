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

  const closeImageViewer = (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'SECTION' || e.target.tagName === 'DIV') {
      console.log(e.target.tagName);
      setReleaseSelected({selected: false, images: null});
    }
  };

  return (
    <section className='image-viewer' onClick={closeImageViewer}>
      <div className="image-container">
        {images.map((img, index) => {
          return <img key={index} src={img} alt='' className={index !== activeImageIndex && 'hidden'} />
        })}
        <nav className='image-select'> 
          {images.length > 1 && <>
          <FaArrowLeft className='image-viewer-icon' onClick={prevImage}/> 
          <FaArrowRight className='image-viewer-icon' onClick={nextImage}/>
          </>}
        </nav>
      </div>
    </section>
  )
}

export default ImageViewer