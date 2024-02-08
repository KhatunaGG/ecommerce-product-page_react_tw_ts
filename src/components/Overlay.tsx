
import { useContext } from 'react'
import { GlobalState } from '../store'

const Overlay = () => {


  const context = useContext(GlobalState)
  if (!context) return
  const { screenWidth, dataImgArr, smallImages, miniGaleryIndex, setMiniGaleryIndex, hideOverlay, closeOverlay } = context;


  return (
    <>
      <div
        style={{ display: closeOverlay ? 'none' : 'block' }}

        className='absolute w-full top-0 left-0 right-0 bottom-0  bg-slate-950 opacity-85 z-50
        flex flex-col items-center justify-center 
      '>
        <div className='relative'>
          <img
            style={{ width: screenWidth > 375 ? '445px' : '374px', height: screenWidth > 375 ? '445px' : '300px' }}
            className='nav-ing w-full h-[300px] md:rounded-3xl' src={dataImgArr[miniGaleryIndex]} alt="" />
          <div className="section-slider flex flex-row gap-7 mt-6 justify-center z-50">
            <img
              onClick={hideOverlay}
              className='absolute -top-2 right-0 w-6 h-6 ' src="/assets/icon-close.svg" alt="" />
            {smallImages.map((img, i) => (
              <img onClick={() => setMiniGaleryIndex(i)} key={i} className='w-[88px] h-[88px] rounded-[10px]' src={img} alt="" />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Overlay