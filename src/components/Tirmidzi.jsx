import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import './slide.css'
import './slid.css'


// Import Swiper styles
import 'swiper/css';
import './slide.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export default function Tirmidzi() {
    let [Hadith, setHadith] = useState([])
    let [info,setinfo] = useState([])
    async function getAhadith() {
        const data = await axios.get('https://hadis-api-id.vercel.app/hadith/tirmidzi?page=1&limit=500');
        setHadith([...data.data.items]);     
      setinfo(data.data.data)
    }
    useEffect(function () {
        getAhadith();
    }, [setHadith])  
  return (
    <>
    
    <section>
      
      <div className='po text-center mm'><h1>أحاديث</h1></div>
      <div className='inf text-center'><h3>الترمذى </h3></div>

                   
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
    
    </>
  )
}
