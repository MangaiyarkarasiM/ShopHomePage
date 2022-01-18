//import React, {useEffect} from 'react'
import './Card.css'
import Button from './Button'

function Card(props){
  //console.log(props);
    return(
     <div className='col-lg-3 col-sm-12 my-4'>
        <div className='card h-100'>
            <div className="position-relative">
                <img className="card-img-top" src={props.data.image} alt="..."></img>
                {props.data.price.specialPrice?<div style={{right: 0.5 +'rem'}} className='px-2 mt-1 position-absolute badge badge-dark'>Sale</div>:null}
            </div>
            <div className="card-body text-center">
                <h5 className='mb-3'>{props.data.title}</h5>
                {props.data.rating !==''?<p>{
                    [...Array(parseInt(props.data.rating))].map((e,i)=><i key={i} className="fa yellow fa-star"></i>)
                    }</p>:null}
                <p>{props.data.price.specialPrice?<s>{props.data.price.oldPrice}</s>:null} {props.data.price.currentPrice}</p>
            </div>
            <div className="card-footer border-top-0 mt-0 text-center">
              <Button disable={props.cartItemsIds.includes(props.data.id)?"true":""} className="btn-outline-dark" onClick={() => { props.onAdd({ id:props.data.id, title: props.data.title, image: props.data.image }) }}>Add to Cart</Button>
            </div>
        </div>
     </div>
    );
}

export default Card;