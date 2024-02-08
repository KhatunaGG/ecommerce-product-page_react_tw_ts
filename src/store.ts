import { createContext } from "react";


type GlobalContextType = {

    screenWidth: number;
    setScreenWidth:  React.Dispatch<React.SetStateAction<number>>;
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string,
    setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
    currentImage: number;
    handleSubmit: () => void;
    actualDiscountedPrise: number;
    showCartUnits:  boolean;
    miniGallery: string[];
    discount: number;
    currenPrice: number;
    deleteCartItem:  () => void;
    showOverLay: () => void;
    mainImageClick: boolean;
    setMiniGaleryIndex: React.Dispatch<React.SetStateAction<number>>;
    miniGaleryIndex: number;
    hideOverlay: () => void;
    closeOverlay: boolean;
    dataImgArr : string[] | []
}

export const GlobalState = createContext<GlobalContextType | null>(null)