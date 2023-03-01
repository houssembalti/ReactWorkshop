import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {getallProducts} from '../service/api'

function Product(props) {
  const [like, setLike] = useState(props.item.like);
  const [quantity, setquantity] = useState(props.item.quantity);
  

  useEffect(()=>{
  })
  const decrementer =()=>{
    props.buy()
    setquantity(quantity-1)
    console.log(quantity)
  }
  const addlikes = () => {
    setLike(like + 1);
  }
  
  return (

    <div>
      
    <Card style={{ width: '18rem',height:'35rem' }} className={like>=5?"bestProduct":"product"} >


      <Card.Img className='fluid' variant="top" src={require('../assets/images/'+props.item.img)} style={{ height:'15rem' }}/>
      <Card.Body >
        <NavLink to={`${props.item.id}`}>
        <Card.Title>{props.item.name} </Card.Title>

        </NavLink>
      
        
        <Card.Text>
          Prix:{props.item.price} DT
        </Card.Text>
        <Card.Text>
          Quantity : {quantity} 
        </Card.Text>
        <Card.Text>
          Likes : {like} 
        </Card.Text>
        

        <Button className='d' onClick={addlikes}>Like</Button>  
        <Button className='d' disabled={props.item.quantity===0} onClick={ decrementer}>Buy</Button>
      </Card.Body>
      
    </Card>
      
    </div>
  );
}

export default Product;