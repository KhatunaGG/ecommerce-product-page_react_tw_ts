import { SideBar } from './components/SideBar'
import Header from './components/Header'
import Gallery from './components/Gallery'
import './App.css'
import { GlobalState } from './store'
import { useState, useEffect } from 'react'
import { data } from './data'
import Mainform from './components/Mainform'
import Overlay from './components/Overlay'
import Card from './components/Card'


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [openSidebar, setOpenSidebar] = useState(false);
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [discount] = useState<number>(data?.priceDetails.discount)
  const [currenPrice] = useState<number>(data?.priceDetails.price)
  const [actualDiscountedPrise, setActualDiscountedPrise] = useState(0)
  const [showCartUnits, setShowCartUnits] = useState(false)
  // const [miniGallery, setMiniGallery] = useState<string[]>(data?.smallImages)
  const [miniGaleryIndex, setMiniGaleryIndex] = useState(0)
  const [closeOverlay, setCloseOverLay] = useState(false)
  const [mainImageClick, setMainImageClick] = useState(false);
  const[dataImgArr, setDataImgArr] = useState<any>([])
  const { smallImages } = data


  useEffect(() => {
    setDataImgArr(data?.largeImages)
  },[])

  

  const showOverLay = () => {
    setMainImageClick(!mainImageClick)
  }
  const hideOverlay = () => {
    setCloseOverLay(!closeOverlay)
  }


  const deleteCartItem = () => {
    setCount(count - 1)
  }


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const handleSubmit = () => {
    setShowCartUnits(true)
    if (discount) {
      setActualDiscountedPrise((currenPrice / 100) * discount)
    } else {
      setActualDiscountedPrise(currenPrice * count)
    }
  }

  return (
    <GlobalState.Provider value={{
      screenWidth: screenWidth,
      setScreenWidth: setScreenWidth,
      openSidebar: openSidebar,
      setOpenSidebar: setOpenSidebar,
      count: count,
      setCount: setCount,
      modal: modal,
      setModal: setModal,
      title: 'Fall Limited Edition Sneakers',
      setCurrentImage: setCurrentImage,
      currentImage: currentImage,
      dataImgArr: dataImgArr,
      handleSubmit: handleSubmit,
      actualDiscountedPrise: actualDiscountedPrise,
      showCartUnits: showCartUnits,
      discount: discount,
      currenPrice: currenPrice,
      deleteCartItem: deleteCartItem,
      showOverLay: showOverLay,
      mainImageClick: mainImageClick,
      setMiniGaleryIndex: setMiniGaleryIndex,
      miniGaleryIndex: miniGaleryIndex,
      hideOverlay: hideOverlay,
      closeOverlay: closeOverlay,
      smallImages: smallImages

    }}>
      <div className="App relative">
        {screenWidth < 375 &&
          <SideBar />
        }
        {screenWidth > 375 && modal ? <Card /> : ''}
        <Header />
        {mainImageClick &&
          <Overlay />
        }
        <section className="section lg:w-[1015px] lg:flex lg:flex-row items-start justify-center">
          <div className='md:flex md:flex-col md:w-[43.84%]'>
            <div className="gallery-wrapper  relative ">
              <Gallery />
              {modal && screenWidth < 375 ?
                <Card /> : ''
              }
            </div>
          </div>
          <Mainform />
        </section>
      </div>
    </GlobalState.Provider>
  )
}
export default App
