import React, { useEffect , useState} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Azkair() {

  





//     const [azk, setAzka] = useState([]);

//     const getting = async () => {
// 		const res = await axios.get("https://hadis-api-id.vercel.app/hadith/abu-dawud?page=2&limit=300");
// 		  setAzka(res.data.items)
// // console.log(res.data.items)
// }
//     useEffect(() => {
//         getting()
//     }, [])
    
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 2000,
    //       autoplaySpeed: 2000,
    //       cssEase: "linear",
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
  return (
    <>
 



<section>
  <div className='container my-2'>
<div className='row'>
<div className='col-lg-3'>
<Link to={"/Bukhari"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/bukhary-CnwjcUPI.png" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">البخارى </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Muslim"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/muslem-Bmplxp8V.jpeg" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">  مسلم  </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Tirmidzi"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/Tirmidzi-_vTvssnL.png" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">الترمذي </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/malk"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/%D8%A3%D9%86%D8%B3_%D8%A8%D9%86_%D9%85%D8%A7%D9%84%D9%83-D5EcF07F.png" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">مالك بن أنس  </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Daood"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/%D8%A3%D8%A8%D9%88_%D8%AF%D8%A7%D9%88%D8%AF_%D8%A7%D9%84%D8%B3%D8%AC%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-BTPYGmjr.png" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3"> ابو داوود   </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>
<div className='col-lg-3'>
<Link to={"/Magah"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/%D8%A7%D8%A8%D9%86_%D9%85%D8%A7%D8%AC%D8%A9-C7wfCz2M.png" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-3">ابن ماجه </h4>
         <p  className="card-text">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>

<div className='col-lg-3'>
<Link to={"/Hanbal"}>
<div className="card  m shadow-lg mt-5   rounded ">
<img src="assets/bnhanbl-8CXsJ1SM.jpg" className="card-img-top p-3" alt="..." />

        <div className="card-body">
         <h4 className="card-text fs-4 py-4"> أحمد بن حنبل  </h4>
         <p  className="card-text py-1">  1 : 500 </p>

        </div>
      </div> 
      </Link>

</div>

</div>
  </div>
</section>



 


    
    
    </>
  )
}
