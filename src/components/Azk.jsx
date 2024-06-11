import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
import './slid.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Azkair from './Azkair';


export default function Azk() {
const [first, setFirst] = useState ([])
    const gett= async () => {
		const response = await axios.get(
			"https://hadis-api-id.vercel.app/hadith/malik?page=1&limit=500");
		setFirst([...response.data.items]);

	};
    useEffect(() => {
        gett()
    }, [])
  return (
    <>
        <section>
      
      <div className='po text-center mm'><h1>أحاديث</h1></div>
      <div className='inf text-center'><h3>مالك بن أنس</h3></div>

                   
<Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 

 


        
{first.map(function(x,index){
                    return(
          <SwiperSlide key={index}>
   
                       <div className="col-lg-12 " >
    
    <div className="card  mx-5  m shadow-lg    rounded ">
       <div className="card-body">
         <p className="card-text fs-4" > {x.arab}  </p>
         <p className='f'>500/{x.number}</p>
       </div>
     </div> 
     </div> 

     </SwiperSlide>
                    )
                 })}
      
           
                 

     </Swiper>  

       </section>
    
    </>
  )
}
