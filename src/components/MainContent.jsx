import React, { useEffect , useState} from 'react'
import '../App.css'
import axios from 'axios'
import moment from 'moment';
import "moment/dist/locale/ar";
import { Link } from 'react-router-dom';
import Azkair from './Azkair';
import Azk from './Azk';
import Uran from './Uran';
import Altafsir from './Altafsir';
import Aldetails from './Aldetails';
import Radeu from './Radeu';
import Az from './Az';
moment.locale("ar")
export default function MainContent() {
  const [today, setToday] = useState("");
	const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
  const [remainingTime, setRemainingTime] = useState("");
	const [timings, setTimings] = useState({
		Fajr: "04:09",
		Dhuhr: "12:53",
		Asr: "16:29",
		Sunset: "19:53",
		Isha: "21:23",
	})
  const prayersArray = [
		{ key: "Fajr", displayName: "الفجر" },
		{ key: "Dhuhr", displayName: "الظهر" },
		{ key: "Asr", displayName: "العصر" },
		{ key: "Sunset", displayName: "المغرب" },
		{ key: "Isha", displayName: "العشاء" },
	];
  const getTimings = async () => {
		const response = await axios.get(
			"https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8");
		setTimings(response.data.data.timings);
    // console.log(response.data.data.timings);

	};


  const setupCountdownTimer=()=>{
    const momentNow = moment();

		let prayerIndex = 2;
    if (
			momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
		) {
			prayerIndex = 1;
		} else if (
			momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
		) {
			prayerIndex = 2;
		} else if (
			momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
		) {
			prayerIndex = 3;
		} else if (
			momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
			momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
		) {
			prayerIndex = 4;
		} else {
			prayerIndex = 0;
		}
    setNextPrayerIndex(prayerIndex);

// now after knowing what the next prayer is, we can setup the countdown timer by getting the prayer's time
		const nextPrayerObject = prayersArray[prayerIndex];
		const nextPrayerTime = timings[nextPrayerObject.key];
		const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");
    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);
    if (remainingTime < 0) {
			const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
			const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
				moment("00:00:00", "hh:mm:ss")
			);

			const totalDiffernce = midnightDiff + fajrToMidnightDiff;

			remainingTime = totalDiffernce;
		}

		const durationRemainingTime = moment.duration(remainingTime);

		setRemainingTime(
			`${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
		);
    
  }
  useEffect(() => {
    const t = moment();
		setToday(t.format("MMM Do YYYY : h:mm"));  
    console.log(t.format("MMM Do YYYY -- h:mm"))
   

      getTimings();

      let interval = setInterval(() => {

        setupCountdownTimer();
      }, 1000);
  
  
      return () => {
        clearInterval(interval);
      };

  }, [])
 
  

  return (
    <>

    <section className='home'>
      <div className='bosi '>
      <div className='text-home mx-5 '>
        <h1><span>قرآنك</span></h1>
        <h2>مرحبا بك في موقع  <span>قرآنك  </span></h2>
        <Link to="/">
        <button className="button2">مواقيت الصلاه</button>

        </Link>
</div>
      </div>

    </section>
    <section>
      <div className='container my-5'>
<div className='row g-2'>
<div className='col-lg-4'>
  <Link to={"/Morning"}>
  <div className='position-relative '>
  <img src="assets/evening.svg" className='w-100' alt="" />
  <div className='position-absolute  kl'>
    <h3>أذكار الصباح</h3>
  </div>
</div> 
  </Link>

</div>
<div className='col-lg-4 '>
  <Link to={"/Evening"}>
  <div className='position-relative'>
  <img src="assets/morning.svg" className='  w-100' alt="" />
  <div className='position-absolute  kl'>
  <h3>اذكار المساء</h3>
  </div>
</div> 
  </Link>

</div>
<div className='col-lg-4  '>
  <Link to={"/Azkair"}>
  <div className='w-100   '>
    <div className='bn poo'>
    <div className='text-center'>
    <h3 className='py-4'>تسابيح</h3>
  </div>
    </div>
  
</div> 
  </Link>

</div>
</div>
      </div>
    </section>

    <section className='my-5'>
<div className='container'>
<div className='text-center '>
            <div className='mb-5 '>
              <h3 className='f mb-3'>مواقيت الصلاة</h3>
              <h3> متبقي حتي صلاه <span className='f'>{prayersArray[nextPrayerIndex].displayName}</span></h3>
<h3>{remainingTime}</h3>
                </div>
                <div className='mx-5 '>
                <h3> <span className='f'>اليوم:</span> {today}</h3>
                </div>
               
            </div>
            <div className='row justify-content-center mt-4 g-3'>
   
   <div className='col-md-3  col-sm-6  '>
   <div className="card overflow-hidden" >
     <img src="assets/fajr.png" className="card-img-top p-3 " alt="..." />
     <div className="card-body">
     <h4 className="card-title">{timings.Fajr}</h4>
     <h4 className="card-text">الفجر</h4>
   
     </div>
   </div>
   
   
   </div>
   <div className='col-md-3  col-sm-6'>
   <div className="card" >
     <img src="assets/zuhr.png" className="card-img-top p-3" alt="..." />
     <div className="card-body">
     <h4 className="card-title">{timings.Dhuhr}</h4>
     <h4 className="card-text">الظهر</h4>
   
     </div>
   </div>
   
   </div>
   <div className='col-md-3 col-sm-6'>
   <div className="card" >
     <img src="assets/asr.png" className="card-img-top p-3" alt="..." />
     <div className="card-body">
     <h4 className="card-title">{timings.Asr}</h4>
     <h4 className="card-text">العصر</h4>
   
     </div>
   </div>
   
   </div>
   <div className='col-md-3  col-sm-6 '>
   <div className="card" >
     <img src="assets/magrib.png" className="card-img-top p-3" alt="..." />
     <div className="card-body">
     <h4 className="card-title">{timings.Sunset}</h4>
     <h4 className="card-text">المغرب</h4>
   
     </div>
   </div>
   
   
   </div>
   <div className='col-md-3  col-sm-6 '>
   <div className="card shadow-lg  rounded " >
     <img src="assets/isha.png" className="card-img-top p-3" alt="..." />
     <div className="card-body text-center">
     <h4 className="card-title text-center">{timings.Isha}</h4>
     <h4 className="card-text text-center">العشاء</h4>
   
     </div>
   </div>
   
   
   </div>
   </div>     

</div>
    </section>
   
    </>
  )
}
