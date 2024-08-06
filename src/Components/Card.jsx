import React from 'react';
import data from './data';
import "./card.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


 const Card = () => {
  return (
    <div className='mainContainer'>
        <div className='Contenedor'> 
      {
        data.map(({codigo, foto, producto, propiedades, precio})=>{
          return(
              <div key={codigo} className='box'>
                <div className='card'>
                    <div className='imagen'>
                        <img src={foto} alt="" />
                    </div>
                    <div>
                        <h3>{producto}</h3>
                        <p>{propiedades}</p>
                        <span>Q{precio}</span>
                    </div>
                    <div className='star'>
                    <AiFillStar className='star-icon'/>
                    <AiFillStar className='star-icon'/>
                    <AiFillStar className='star-icon'/>
                    <AiOutlineStar className='star-icon'/>
                    <AiOutlineStar className='star-icon'/>
                    </div>
                </div>
                <button className='btn'>Agregar al carrito</button>
              </div>
          )
        })
      }
    </div>
    </div>
  )
}
export default Card