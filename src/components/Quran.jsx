import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom'


import axios from 'axios'
export default function Quran() {
    const {number} =  useParams()
    let [sheet , setSheet] = useState([])
    let [num , setnum] = useState([])
    let [basmala , setbasmala] = useState([])
    let [audio,setaudio]= useState([])
    let[names,setnames] = useState([])
    async function getQuran(){
        const data = await axios.get(`https://api.dikiotang.com/quran/ayah/surah/${number}`)
        const data2 = await axios.get(`https://api.dikiotang.com/quran/surah/${number}`)
        const data3 = await axios.get(`https://api.dikiotang.com/quran/surah/${number}`)
        setSheet(data.data.data)
        setaudio(data2.data.data.audio_url);     
        setnum(data.data.data[0])
        setbasmala(data.data.data[0])
        setnames(data3.data.data)
    }
    useEffect(function(){
            getQuran();
    },[])
  return (
    <>
     <div className='container'>
     <h3 className='text-center po'>{names.name_long}</h3>

        <div className='top nn d-flex justify-content-between  text-white my-5'>
        <h3> الرقم  : {num.surah}</h3>
        <h3>{names.revelation}</h3>
        <Link className='tf' to={`/quran/tafsir/${number}`}>
        
        <button className='butt'>
  <span> 
    التفسير
  </span>
</button>
        
        </Link>

        </div>
        <div className='top  d-lg-flex justify-content-between  nn my-2'>
            <audio src={audio} controls className='w-100'></audio>
        </div>
        <div className='text-center '>
        <img src="https://surahquran.com/img/basmalah.png" className="w-50" alt="" />

        </div>
        <div className=' my-5 bo  ' >
           {sheet.map(function(item ,index){
               return(
                   
                   <div className='text-center border' key={index}>  
<h4 className='py-2 ll'>{item.arab} <span>{item.ayah} </span></h4>
                   </div>
                   
                )
            })}
        </div>
                </div>
    </>
  )
}
