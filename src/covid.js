import React, { useEffect, useState } from "react";
import "./covid.css";


const Covid =() =>{
const [data,setData] = useState([]);

    const getCovidData=async ()=>{
    try{
       const res= await fetch("https://data.covid19india.org/data.json");
       const actualData =await res.json();
       console.log(actualData.statewise[0]);
       setData(actualData.statewise[0]);
    } catch(Error){
        console.log(Error);
    }}

    useEffect(()=>{
        getCovidData();

    },[]);




  return(
    <>
    <section >
    <h1 className="heading">- Live Covid Tracker -</h1>
    <div className="centre"> 
    <ul>
        <li className="card1">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">{data.confirmed}</p>       
                    <p className="card_total1">Confirmed</p>
                </div>
            </div>
        </li>
        <li className="card2">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">{data.recovered}</p>       
                    <p className="card_total2">Recovered</p>
                </div>
            </div>
        </li>
        <li className="card3">
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name">{data.deaths}</p>       
                    <p className="card_total3">Deaths</p>
                </div>
            </div>
        </li>
    </ul>
    </div>
    </section>
    </>
  );
};

export default Covid;