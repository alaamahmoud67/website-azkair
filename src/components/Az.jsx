import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'

export default function Az() {
    const [Hadith, setHadith] = useState([])
    const [count, setCount] = useState(0);

    // const [message, setMessage] = useState(" ");
    // const [isVisible, setIsVisible] = useState(false);

// const changeValue = (index) => {
//  Hadith.map((e,idx)=>{
//     if(idx===index){

//         setCount(count + 1);
//         setMessage(" ");
//         setIsVisible(false);
//        }
// })
              
//     }

//     const resetValue = () => {
//         setCount(0)
//         if (count === 0) {
//             setMessage("Already in default state, i.e. 0.\nCan't reset a default value. ");
//             setIsVisible(true);
//         }
//     }


    async function getAhadith() {
        const data = await axios.get('https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json');
        setHadith(data.data.تسابيح);    
        console.log(data.data.تسابيح)
    }
    useEffect(function () {
        getAhadith();
    }, [])  
    useEffect(() => {
      if (Hadith.length > 0) {
        Hadith.map((e, index) => {
          setCount((prev) => ({ ...prev, [index]: 0 }));
        });
      }
    }, [Hadith]);
  
    const handlerCounter = (index) => {
      setCount((prev) => ({ ...prev, [index]: prev[index] + 1 }));
    };
return (
    <>
      <section className='my-5'>
      
      <div className='text-white text-center nn'>
        <h2>تسابيح  <span><img src="assets/3b-removebg-preview.png" className='q' alt="" /></span>  </h2>
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
         {/* <button onClick={() =>changeValue (index)}>{count}</button> */}
       <button onClick={() => handlerCounter(index)} className='btn btn-outline-secondary w-100'>
                    {count[index]}
            </button>    
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
