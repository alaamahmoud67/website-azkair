import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
export default function Evening() {
    const [Hadith, setHadith] = useState([])
   


    async function getAhadith() {
        const data = await axios.get('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json');
        setHadith(data.data['أذكار المساء']);    
        console.log(data.data['أذكار المساء'])
    }
    useEffect(function () {
        getAhadith();
    }, [])  
   
  return (
    <>
     <section className='my-5'>
      
      <div className='text-white text-center nn'>
        <h2>اذكار  المساء<span><img src="assets/3b-removebg-preview.png" className='q' alt="" /></span>  </h2>
      </div>
     

      {Hadith.map(function(x,index ){
                    return(
          <div key={index}>

<div className="col-lg-12 " >
    
    <div className="card   mx-5  m shadow-lg mt-5  rounded ">
       <div className="card-body ">
         <p className="card-text fs-4 " > {x.content}  </p>
        <p className="card-text text-black-50 ">{x.description}</p>
       </div>
       <div className='nn positi py-3 '>
          <p className='text-white'> التكرار:{x.count}</p>
     </div> 
     </div> 

     </div> 
   
    </div>
      )
      
                 })}  

 </section>   
    
    </>
  )
}
