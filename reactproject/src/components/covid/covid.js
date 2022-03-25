/* eslint-disable no-unused-vars */
import React, { useEffect , useState } from 'react'
import './covid.css'



const Covid = () => {

    const [data , setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
           setData(actualData.statewise[0]);
            
        }
        catch (error){
        console.log(error);
        }
       
    }

    useEffect(() => {
        getCovidData();
    },[]);
  return (
   <>
   <section>
       
        <h1 className='heading1'>&#128308; LIVE</h1>
        <h2 className='heading2'> COVID-19 Tracker</h2>
        <h1 className='heading3'>INDIA</h1>
        <br/>
        <div className="grid-container">
        <div className='card1'>
        <div className="container1">
            <p><b>Active Cases</b></p> 
            <p>{data.active}</p> 
        </div>
        </div>

        <div className='card2'>
        <div className="container2">
            <p><b>Confirmed Cases</b></p> 
            <p>{data.confirmed}</p> 
        </div>
        </div>

        <div className='card3'>
        <div className="container3">
            <p><b>Total Deaths</b></p> 
            <p>{data.deaths}</p> 
        </div>
        </div> 

        <div className='card4'>
        <div className="container4">
            <p><b>Total Recovered</b></p> 
            <p>{data.recovered}</p> 
        </div>
        </div> 
        <div className='card5'>
        <div className="container5">
            <p><b>Total Migrated</b></p> 
            <p>{data.migratedother}</p> 
        </div>
        </div> 

        <div className='card6'>
        <div className="container5">
            <p><b>Last Updated</b></p> 
            <p>{data.lastupdatedtime}</p> 
        </div>
        </div> 

        </div> 
   </section>
   </>
    
  )
}

export default Covid
