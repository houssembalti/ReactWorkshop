import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Product(props) {
  const [like, setLike] = useState(props.item.like);
  const addlikes = () => {
    setLike(like + 1);
  }
  return (

    <div >
    <Card style={{ width: '18rem',height:'35rem' }} >


      <Card.Img className='fluid' variant="top" src={require('../assets/images/'+props.item.img)} style={{ height:'15rem' }}/>
      <Card.Body >
      <Card.Title>{props.item.name}</Card.Title>
      
        
        <Card.Text>
          Prix:{props.item.price} DT
        </Card.Text>
        <Card.Text>
          Quantity : {props.item.quantity} 
        </Card.Text>
        <Card.Text>
          Likes : {like} 
        </Card.Text>
        

        <Button className='d' onClick={addlikes}>Like</Button>
        <Button className='d' disabled={props.item.quantity===0} onClick={props.buy}>Buy</Button>
      </Card.Body>
      
    </Card>
      
    </div>
  );
}

export default Product;