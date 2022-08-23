import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



export default function CountryHeader() {

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
let day = days[date.getDay()];
let month = months[date.getMonth()];

  return (
        <div className='CountryHeader d-xl-flex align-items-center justify-content-between d-block'>
            <ul className='mt-4'>
              <h2>Look up around the world</h2>
              <p className='country_date'>{day} , {date.getDate()} {month} {date.getFullYear()}</p>
            </ul>
        </div>
  );
}
