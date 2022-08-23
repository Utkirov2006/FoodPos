import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));
export default function HomeLeft(props) {
  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([]);

  function getData() {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then(response => setData(response.data.meals))
      .catch(err => console.log(err))
  }

  function getValue(set) {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${set}`)
      .then(response => setData(response.data.meals))
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
      .then(response => setData(response.data.meals))
      .catch(err => console.log(err))
  },[])

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];


  return (
    <div className='homeLeftBlock'>
      <div className='HomeHeader d-xl-flex align-items-center justify-content-between d-block'>
        <ul className='mt-4'>
          <h2>Jaegar Resto</h2>
          <p className='header_date'>{day} , {date.getDate()} {month} {date.getFullYear()}</p>
        </ul>
        <Search className='header_search'>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
          <button className='btn btn-secondary' onClick={getData}>    
            <SearchIcon />
          </button>
        </Search>
      </div>
      <div className="homeCards">
      <div className='hotDishes'>
      <ul className='hotDishesHeader mt-xl-0 mt-3'>
        <h4>CHOOSE DISHES</h4>
        <select class="form-select text-white me-4 w-25" onChange={(e) => getValue(e.target.value)} style={{ backgroundColor: "#1F1D2B" }} aria-label="Default select example">
          <option value="" selected>Select category</option>
          <option value="Beef" selected>Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Dessert">Dessert</option>
          <option value="Lamb">Lamb</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Pasta">Pasta</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starter</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Goat">Goat</option>
        </select>
      </ul>
      <div className='hotDishesCardArea'>
          {data.map(item =>
            <div className="hotDishesCard" key={item.idMeal} onClick={()=>props.getIdValue(item.idMeal)}>
              <img src={item.strMealThumb} alt="img" className='FoodImg' />
              <li>{item.strMeal}</li>
              <p>$ {Math.round(Math.random() * 20)}</p>
              <p>{Math.round(Math.random() * 20)} Bowls available</p>
            </div>
          )}
      </div>
    </div>
      </div>
    </div>
  );
}
