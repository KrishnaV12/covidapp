import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Covidtable =() =>{

        const [data, setData] = useState([]);

    const getCovidData = async()=>{
        const res= await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
        }
    
    useEffect(()=>{
        getCovidData();
    },[]);
    

    return(
        <>
        <div className="container-fluid mt-5">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th align="left">State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {
                            data.map((curElem, ind)=>{
                                return(
                                    <tr key={ind}>
                                        <td>{curElem.state}</td>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        
                                    </tr>
    
                                )
                                
                            })
                        }
                    </tbody>             
                </table>
            </div>
        </div>
       
        
        </>
      );
    };

export default Covidtable;