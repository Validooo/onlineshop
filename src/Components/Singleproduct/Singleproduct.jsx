import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import  { useState } from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Button, collapseClasses, TextField } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './singleproduct.css'
import Box from '@mui/material/Box';




const walid = [ 2,231,4124,234,234]


function Singleproduct( { handleAddToCart , showSingleProduct} ) {


    const [productt, setProductt] = useState({id:"",name:"",price:{formatted:""},image:{url:""},description:""});
    const [price, setPrice] = useState([]);
    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);
    const [description,setDescription]= useState([]);
    const [id,setId]= useState([]);
const[arrayOfImages,SetArrayofImages]=useState([]);
    const classes = useStyles();




    useEffect( ()=>{


        if(showSingleProduct !== []){
          setProductt(showSingleProduct)
          setPrice(productt.price.formatted)
          setName(productt.name)
          setImage(productt.image.url)
          setDescription(productt.description)
          setId(productt.id)
          SetArrayofImages(productt.assets)
        }
         
        })





/*
        {showSingleProduct.assets.map(element => {
            return  (<img src={element.url} alt="Logo" />)
          })}
*/
//console.log(showSingleProduct.assets)

//image={showSingleProduct.image.url}
//   <img src={showSingleProduct.image.url} alt="Logo" />
    return (
  
<div>


 





<div className="slide-container">
<center>
        <Slide className ="slides">
         {showSingleProduct.assets.map(slideImage=> (
            <div className="each-slide" key={slideImage.id}>
              <div style={{}}>
          
              <img  className="each-image" src={slideImage.url} />
           
              </div>
            </div>
          ))} 
        </Slide>
        <Box

        className='box'
      sx={{
        width: 400,
        height: 350,
        backgroundColor: 'GhostWhite',
        '&:hover': {
          backgroundColor: 'GhostWhite',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    
    >

<h3> <text className='price-text' >{showSingleProduct.price.formatted} $</text></h3>
<div>
<text className='available-text' >available</text>
</div>
<div>
<text className='delivery-text' >delivery: 2 - 3 days</text>
</div>
<div>
<text className='color-text' >color: red - blue</text>
</div>
<div>
<Button className="addtoCartbutton"  variant="outlined" onClick={()=>handleAddToCart(showSingleProduct.id,1)} >
<AddShoppingCart />
Add to Cart
</Button >
</div>
    </Box>
        </center>
      </div>


{/*
        <Card className={classes.root}>
        <CardMedia className={classes.media}  title={name}  />
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
         */}
      </div>
      )
}

export default Singleproduct;