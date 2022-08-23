import React,{useEffect,useState} from 'react';
import CountryHeader from '../components/CountryComponents/CountryHeader';
import "../style/Country.css";
import Chip from '@mui/material/Chip';
import axios from "axios";

export default function Country() {
  const [country,setCountry]=useState([]);
  const [listCountry,setListCountry]=useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(res=>setCountry(res.data.meals))
    .catch(err=>console.log(err))

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    .then(response=>setListCountry(response.data.meals))
    .catch(err=>console.log(err))
  },[])
  function getCountry(link){
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${link}`)
    .then(response=>setListCountry(response.data.meals))
    .catch(err=>console.log(err)) 
  }
  return (

    <div className='text-light CountryBlock' >
      <CountryHeader />
      <div className="CountryMainBlock">
      <div className="countryChips">
      {country.map(item=>
        <Chip onClick={(e)=>(getCountry(item.strArea))}   label={item.strArea} style={{cursor:"pointer",backgroundColor:"#1F1D2B",fontSize:"17px"}} className='chip m-1 text-light'/>
        )}
      </div>
      <div className="CountryCards">
      {listCountry.map(item=>
        <div className="CountryCard" key={item.idMeal}>
        <img src={item.strMealThumb} alt="img" className='CountryImg' />
        <li>{item.strMeal}</li>
        <p>$ {Math.round(Math.random()*20)}</p>
        <p>{Math.round(Math.random()*20)} Bowls available</p>
      </div>
        )}
      </div>
      </div>
    </div>
  )
}
