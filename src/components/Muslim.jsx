import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Navigation } from 'swiper/modules';

export const Muslim = () => {
    let [Hadith, setHadith] = useState([])
    let [info,setinfo] = useState([])
    async function getAhadith() {
        const data = await axios.get('https://hadis-api-id.vercel.app/hadith/muslim?page=1&limit=500');
        setHadith([...data.data.items]);    
      setinfo(data.data.data)
    }
    useEffect(function () {
        getAhadith();
    }, [setHadith])
    
    return (

       <section>
      
      <div className='po text-center'><h1>أحاديث</h1></div>
      <div className='inf text-center'><h3>صحيح مسلم </h3></div>

                   
<Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 

 


        
{Hadith.map(function(x,index){
                    return(
          <SwiperSlide key={index}>
   
                       <div className="col-lg-12 " >
    
    <div className="card  mx-5  m shadow-lg mt-5   rounded ">
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
      
    )
}