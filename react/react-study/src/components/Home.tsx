
import React from 'react';
import style from "../Shop.module.css"


function Home (){
  return ( 
    <div className={style.centered}>
      <h1>Image Shop에 오신것을 환영합니다.</h1>
      <p>{new Date().toString()}</p>
    </div> 
  ) 
};

export default Home;