import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import  { useState } from 'react';

import useStyles from './styles';
import { useNavigate } from 'react-router-dom';





const Product = ({ product, handleAddToCart , getTheWantedProduct }) => {
  
  const navigate = useNavigate();
  const [productt, setProductt] = useState({id:"",name:"",price:{formatted:""},image:{url:""},description:""});
  const [price, setPrice] = useState([]);
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [description,setDescription]= useState([]);
  const [id,setId]= useState([]);

useEffect( ()=>{


if(product.length !=0){
  setProductt(product)
  setPrice(productt.price.formatted)
  setName(productt.name)
  setImage(productt.image.url)
  setDescription(productt.description)
  setId(productt.id)
}
 
})


const GoToSingleProduct = () => {
  getTheWantedProduct(productt)
    navigate('/product')

}


  const classes = useStyles();
  

  return (

    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name}  onClick={GoToSingleProduct}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
             $ {price}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={()=>handleAddToCart(id,1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;