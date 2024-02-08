import { useContext } from 'react'
import { GlobalState } from '../store'




const Gallery = () => {

    const context = useContext(GlobalState)
    if (!context) return
    const { screenWidth, currentImage, setCurrentImage, dataImgArr, smallImages, showOverLay, miniGaleryIndex, setMiniGaleryIndex } = context;

    const showNextImg = () => {
        if (currentImage === dataImgArr.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    const showPrevOmg = () => {
        if (currentImage === 0) {
            setCurrentImage(dataImgArr.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }


    return (
        <>
            {screenWidth < 375 ? (
                <section className="gallery w-full relative pt-10  ">
                    <button
                        onClick={showNextImg}
                        className='next w-10 h-10 rounded-full absolute top-[47%] hover:opacity-100 transition-[0.3s] right-0 opacity-50 bg-white flex items-center justify-center border-none outline-none overflow-hidden mr-[4.26%]'>
                        <img className='img-next ml-[2.5px]' src="/assets/icon-next.svg" alt="" />
                    </button>
                    <img
                        style={{ width: screenWidth > 375 ? '445px' : '374px', height: screenWidth > 375 ? '445px' : '300px' }}
                        className='nav-ing w-full h-[300px] md:rounded-3xl' src={dataImgArr[currentImage]} alt="" />
                    <button
                        onClick={showPrevOmg}
                        className='img-prev w-10 h-10 rounded-full absolute top-[48.5%] opacity-50 hover:opacity-100 transition-[0.3s] left-0 bg-white flex items-center justify-center border-none outline-none overflow-hidden ml-[4.26%]'>
                        <img className='mr-[2.5px] hover:fill-[#FF7E1B]' src="assets/icon-previous.svg" alt="" />
                    </button>
                </section>
            ) : (
                <div>
                    <img
                        onClick={showOverLay}
                        style={{ width: screenWidth > 375 ? '445px' : '374px', height: screenWidth > 375 ? '445px' : '300px' }}
                        className='nav-ing w-full h-[300px] md:rounded-3xl' src={dataImgArr[miniGaleryIndex]} alt="" />
                    <div className="section-slider flex flex-row gap-7 mt-6 justify-center ">
                        {smallImages.map((img, i) => (
                            <img onClick={() => setMiniGaleryIndex(i)} key={i} className='w-[88px] h-[88px] rounded-[10px]' src={img} alt="" />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery