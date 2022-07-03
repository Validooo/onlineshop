import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import './products.css'
import Box from '@mui/material/Box';
import { Slide } from 'react-slideshow-image';

import Divider from '@mui/material/Divider';
import  {Button}   from '@mui/material';
import Paper from '@mui/material/Paper';
import {CgGift} from "react-icons/cg";
import sale from '../../Pictures/sale.png';
import watergun from '../../Pictures/watergun.jpg';

import everythingforyourchild from '../../Pictures/everythingforyourchild.png';
import sommersale from '../../Pictures/sommersale.png';
import besttoys from '../../Pictures/besttoys.png'
import need from '../../Pictures/need.png';
import lego from '../../Pictures/lego.jpg';
import rutsch from '../../Pictures/rutsch.jpg'



const images =[watergun, lego,rutsch ]

const Products = ({ products, handleAddToCart, searchedProduct, search , getTheWantedProduct}) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
   { /*
<h1><text className='besttoystext'><center>Best toys for best prices</center></text></h1>
  */}

<div>

  <div className='divnewcustomer'>
 
  {/*
 <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1600 }}
                className="searchbutton"
              >
        */}    
        <CgGift size="3em" style={{color: 'red'}} className="gifticon" />   
  <label className='labels'>10$ for new customers</label>
{/*  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />  */}

</div>
{
<div className='sommersalediv'>
    {}
    <img className='sommersale' src={sommersale} alt=""/>
   { /*<img  className="sale-image" src={everythingforyourchild} alt="" /> */}
   {/*<img className='best-toys' src={besttoys} alt=""/>*/}

   { /*<label  className='labelcategory'>Categories:</label>  */}
    </div> }

</div>  
<div className="topdiv">
<div className="divbesideslides"> {<img  className="imagelefttotheslides" src={need} />}</div>

<div className='sildesdiv'>
<Slide className ="slidess">
         {images.map(slideImage=> (
            <div className="each-slidee" key={slideImage.id}>
              <div style={{}}>
              <img  className="each-imagee" src={slideImage} />
             
           
              </div>
            </div>
          ))} 
        </Slide>

        </div>
        </div> 
        <div>
          
<h2><text className='newword'>NEW</text></h2>
</div>
      <Grid container justify="center" spacing={4}>
        {
        products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product ={product} handleAddToCart={handleAddToCart}  getTheWantedProduct={getTheWantedProduct} />
          </Grid>
        ))
}
      </Grid>

{

                }


    </main>
  );
};

export default Products;