interface DataProps {
   navigationLinks: string[];
   smallImages: string[];
   largeImages: string[];
   priceDetails: {
     price: number;
     discount: number ;
   };
 }
 
 export const data: DataProps = {
   navigationLinks: ['Collections', 'Men', 'Women', 'About', 'Contact'],
   smallImages: [
     '/assets/sm-1.jpg',
     '/assets/sm-2.jpg',
     '/assets/sm-3.jpg',
     '/assets/sm-4.jpg',
   ],
   largeImages: [
     '/assets/image-1.jpg',
     '/assets/image-2.jpg',
     '/assets/image-3.jpg',
     '/assets/image-4.jpg',
   ],
   priceDetails: {
     price: 250,
     discount: 50,
   },
 };
 

export const data1 = {
   titles : ['Collections', 'Men', 'Women', 'About', 'Contact'],
   images : ["/assets/sm-1.jpg", "/assets/sm-2.jpg", "/assets/sm-3.jpg", "/assets/sm-4.jpg"],
   productImages : ["/assets/image-1.jpg", "/assets/image-2.jpg", "/assets/image-3.jpg", "/assets/image-4.jpg"], 
   price : {price: 250, discount: 50},
   
}