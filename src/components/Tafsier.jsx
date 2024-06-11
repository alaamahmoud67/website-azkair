import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Tafsier() {
    const {number} = useParams()
    let [Tafsir,setTafsir] = useState([])
    async function getAzkar(){
      const data = await axios.get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${number}`)
      setTafsir(data.data.result)
    }
    useEffect(function(){
        getAzkar();
    },[])
  return (
    <>
    
    <div className='container text-center'>
            <h1 className='po'>التفسير</h1>
        <div className='tafsir my-5 bo'>
                {Tafsir.map(function(item ,index){
                    return(
                       <div key={index}>
 <h3 className='xx my-2 '>{item.arabic_text}</h3>
                        <p >{item.translation}</p>
                       </div>
                       
                       
                    )
                })}
        </div>
                </div>
    
    </>
  )
}
