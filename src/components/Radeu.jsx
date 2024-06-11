import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
export default function Radeu() {
    const [first, setFirst] = useState ([])
    const gett= async () => {
		const response = await axios.get(
			"https://data-rosy.vercel.app/radio.json");
		setFirst(response.data.radios);

	};
    useEffect(() => {
        gett()
    }, [])
  return (
    <>
    
    <div className='container'>
    <div className='row g-3'>
    {first.map((t,index)=>
    <div className='col-lg-12 g-3' key={index}>
     <div className='card'>
<div  className='d-flex '>
  <img src={t.img} className='w' alt="" />
<p className='mx-5 mt-4'>{t.name}</p>

</div>

        <div >
            <audio src={t.url}controls className='w-100 '></audio>
    
        </div>
        </div>   
       
    
    </div>
    )}
    </div>
        </div>
    
    
    
    </>
  )
}
