import React from 'react'
import { useState } from 'react'
import { releases } from '../data'
import { FaCompactDisc, FaWallet, FaBandcamp } from 'react-icons/fa'
import ImageViewer from './ImageViewer'

const Releases = () => {
  const [releaseSelected, setReleaseSelected] = useState({selected: false, images: null});

  const imageViewerPopup = (catNo) => {
    const selectedRelease = releases.find((release) => release.catNo === catNo).allImages;

    setReleaseSelected({selected: true, images: selectedRelease});
  };

  const createExtrasHTML = (extras) => {
  return {__html: extras};
  };

  return <>
    <section id='official-releases'>
    {
      releases.map((release) => {
        const {catNo, title, artist, image, format, year, discogsLink, bandcampLink, buyLink, desc, extrasHTML} = release;
          
        return <div className='str-release-outer-container'>
            <span className='catNo-mobile'>{catNo}&nbsp;&nbsp;{year}&nbsp;&nbsp;{format}</span>
            <div className='str-release' key={catNo}>
              <span className='catNo'>{catNo}&nbsp;&nbsp;{year}&nbsp;&nbsp;{format}</span>
              <img src={image} alt={`${title} by ${artist}`} onClick={() => imageViewerPopup(catNo)}/> 
              <h3>
                <span className="title">{title}</span> <span className="artist">by {artist}</span>
              </h3>        
              <div className="purchase">
                <a href={discogsLink}target="none"><FaCompactDisc className='icon'/>Discogs</a> 
                {bandcampLink && 
                <a href={bandcampLink} target="none"><FaBandcamp className='icon'/>Bandcamp</a>}
                {buyLink && 
                <a href={buyLink} target="none"><FaWallet className='icon'/>Buy</a>}
              </div>
              {desc && <p>{desc}</p>}
              {extrasHTML && <p dangerouslySetInnerHTML={createExtrasHTML(extrasHTML)}></p>}
          </div>
          </div>
      })
    }
  </section>
  {releaseSelected.selected && <ImageViewer setReleaseSelected={setReleaseSelected} images={releaseSelected.images}/>}
  </>
}

export default Releases