import  React from "react";
import {NavLink} from "react-router-dom";
import "./Card.css" ;
const Card=(props:any)=> {
  return (
    <>
     <div className='col-md-4 col-10 mx-auto'>
       <div className="card-container">
        <div className="cards">
        <div className="card card-front">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
        <div className="card card-back">
            <div className="card-body">
              <h6 className="card-text" >{props.content}</h6>
              <NavLink to={props.links} className="btn btn-light">{props.button}</NavLink>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
   );
};

export default Card;