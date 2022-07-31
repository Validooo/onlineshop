import React from 'react';


import Product from './Product/Product';
import useStyles from './styles';
import './products.css';
import { Slide } from 'react-slideshow-image';
import {Divider , Button ,Paper , Box , Grid } from '@mui/material';
import {CgGift} from "react-icons/cg";
import watergun from '../../Pictures/watergun.jpg';
import { Link, useLocation } from 'react-router-dom';
import sommersale from '../../Pictures/sommersale.png';
import lego from '../../Pictures/lego.jpg';
import rutsch from '../../Pictures/rutsch.jpg'
import logoo from '../../Pictures/logosss.png'
import ppp from '../../Pictures/ppp.png'
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import { InputBase } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { BsX } from "react-icons/bs";
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const images =[watergun, lego,rutsch ]

const Products = ({ products, handleAddToCart, searchedProduct, search , getTheWantedProduct}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  if (!products.length) return <p>Loading...</p>;

 

  const emptysearch = () => {
    setSearchText('')
  }


  const GoToSearch = () => {
    if (searchText !== '') {
      navigate('/search')
    }
  }









  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className="underTopbarMobileversion">






      <Paper
              component="form"
              className="searchmobileversion"
              sx={{ display: 'flex', alignItems: 'center', width: 300, color: 'success.dark' }}
      
            >

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <IconButton onClick={emptysearch} sx={{ p: '10px' }} aria-label="search">
                <BsX />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={GoToSearch} >
                <SearchIcon />
              </IconButton>
            </Paper>




            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
               className='shoppingIconMobileversion'
                style={{

                }}
                component={Link} to="/cart"
              >
                <Badge badgeContent={2} color="error"  >
                  <AddShoppingCartIcon    style={{
                    color: 'red'
                   
                  }} />
                </Badge>
              </IconButton>





        

              </div>
<div className='firstdiv' >
<div className='divlogo'>
  <Button component={Link} to="/"
      className='logobutton'        >
<img src={logoo} alt=""  className='logopic'/>
</Button>
 


</div>  

<div className='everythingyouneeddiv'>
<img src={ppp} alt=""  className='everythingpic' />
</div>
</div>

<div className='seconddiv'>

  <div className='divnewcustomer'>
   
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
  {/*
<div className="topdiv">

{
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
         }
        </div> 
        */}
        <div>
          
<h2><text className='newword'>NEW</text></h2>
</div>
<div>
      <Grid container justify="center" spacing={4}>
        {
        products.map((product) => (
          <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
            <Product product ={product} handleAddToCart={handleAddToCart}  getTheWantedProduct={getTheWantedProduct} />
          </Grid>
        ))
}
      </Grid>
      </div>
{

                }


    </main>
  );
};

export default Products;