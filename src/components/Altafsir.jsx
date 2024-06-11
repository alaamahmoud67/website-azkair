import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


import Aldetails from './Aldetails'

export default function Altafsir() {
    const [first, setFirst] = useState ([])
    const gett= async () => {
		const response = await axios.get(
			"http://api.alquran.cloud/v1/meta");
		setFirst(response.data.data.surahs.references);
    // console.log(response.data.data.surahs.references);
    
   
	};




    useEffect(() => {
        gett()
    }, [])
  return (
    <>
     <div className='container my-5'>
    <div className='row g-3 '>
    {first.map((t ,index  )=> 
      <div className='col-lg-3 ' key={index} >
    
    <Link to={`/quran/${t.number}`}>
<div className='card r p-5'   >
   <p >{t.name}</p>
   
   <p >{t.englishName}</p>

      
       </div>
</Link>
   
   </div>

 

   
    )}
    </div>
        </div>
    
    
    </>
  )
}
