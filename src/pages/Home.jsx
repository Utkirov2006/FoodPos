import React,{useState,useEffect} from 'react';
import "../style/Home.css";
import HomeLeft from '../components/HomeComponents/HomeLeft';
import axios from 'axios';
import OrderCard from '../components/HomeComponents/OrderCard'
export default function Home() {
  const [data, setData] = useState([])

  function getIdValue(props){
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props}`)
    .then(res => setData(res.data.meals[0]))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53013")
      .then(res => setData(res.data.meals[0]))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className= 'home d-flex'>
      <HomeLeft getIdValue={getIdValue}/>
      <div className="homeRightBlock d-xl-block d-none p-4 text-light">
      <div className='d-flex w-100 orderHeader align-items-center justify-content-around'>
<h4 className='w-50'>{data.strMeal}</h4>
<img src={data.strMealThumb} alt="img" className='OrderImg'/>
      </div>
      <div className='pt-2'>
        <h5 className='mb-2'>Orders #{data.idMeal}</h5>
        <button type="button" class="btn btn-outline-danger me-2 homeOrderBtn">{data.strCategory}</button>
        <button type="button" class="btn btn-outline-danger m-2 homeOrderBtn">{data.strArea}</button>
        <button type="button" class="btn btn-outline-danger m-2 homeOrderBtn">{data.strTags}</button>
      </div>
      <div className='d-flex justify-content-between mt-3'>
        <h5> Ingredients</h5>
      </div>
      <div className='orderList mt-3'>
        <table className='int_Table'>
          <tbody>
            <OrderCard name={data.strIngredient1} id="1" />
            <OrderCard name={data.strIngredient2} id="2" />
            <OrderCard name={data.strIngredient3} id="3" />
            <OrderCard name={data.strIngredient4} id="4" />
            <OrderCard name={data.strIngredient5} id="5" />
            <OrderCard name={data.strIngredient6} id="6" />
            <OrderCard name={data.strIngredient7} id="7" />
            <OrderCard name={data.strIngredient8} id="8" />
            <OrderCard name={data.strIngredient9} id="9" />
          </tbody>
        </table>

      </div>
      <a href={data.strYoutube} target="_blank"><button type="button" class="btn btn-danger w-100 mt-2 PaymentBtn" >Watch Video Tutorial</button></a>
    </div>
    </div>
  )}
