import Context from '@/context/Context';
import React, { useContext } from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const MainPageSlider = () => {
  let {mainPageSliderImages} = useContext(Context)
  return (
    <div>
      {
        // mainPageSliderImages.map(item=>{
        //   return <h4 key ={item.id}>{item.original}</h4>
        // })
   <ReactImageGallery
   key={mainPageSliderImages.id}
   autoPlay={true}
   slideInterval={2000}
   showPlayButton={false}
   showFullscreenButton={false}
   isRTL={true}
   lazyLoad={true}
   items={mainPageSliderImages}
   onClick={(e)=>{console.log(e.target)}}
   />



      }
    </div>
  )
}

export default MainPageSlider