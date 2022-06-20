import React from 'react';
import Grid from '@material-ui/core/Grid';

import ProductSearch from './Product/ProductSearch';
import useStyles from './styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './ProductsSearch.css'
import { useState, useEffect } from 'react';


const types = [
  {
    value: 'Favourite',
    label: 'Favourite',
  },
  {
    value: 'New',
    label: 'New',
  },
  {
    value: 'Cheapest',
    label: 'Cheapest',
  },
  {
    value: 'Expensive',
    label: 'Expensive',
  },
  {
    value: 'Sale',
    label: 'Sale',
  },
  
];


const sex = [
  {
    value: 'All',
    label: 'All',
  },

  {
    value: 'Boy',
    label: 'Boy',
  },
  {
    value: 'Girl',
    label: 'Girl',
  }
  
];

const age = [

  
  {
    value: 'All',
    label: 'All',
  },
  {
    value: '0-6 months',
    label: '0-6 months',
  },
  {
    value: '7-12 months',
    label: '7-12 months',
  },
  {
    value: '13-24 months',
    label: '13-24 months',
  },
  {
    value: '2-3 years',
    label: '2-3 years',
  },
  {
    value: '4-5 years',
    label: '4-5 years',
  },
  {
    value: '6-7 years',
    label: '6-7 years',
  },
  {
    value: '8-9 years',
    label: '8-9 years',
  },
  {
    value: '10-12 years',
    label: '10-12 years',
  },
  {
    value: 'above 12',
    label: 'above 12',
  },
];





const ProductsSearch = ({ products, handleAddToCart, searchedProduct, search}) => {

  const [type, setType] = useState("");
  const [Sexx, SetSexx] = useState("All");
  const [Agee, SetAgee] = useState("");
  const [searchedProductFiltered, SetSearchProductsFiltered] = useState("");
  const [productscopy,setProductsCopy]= useState("")
 

  useEffect(() => {
    SetSearchProductsFiltered(searchedProduct)
    setProductsCopy(searchedProduct)
  },[searchedProduct])


 // console.log(searchedProductFiltered)

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSex = (event) => {
    SetSexx(event.target.value);
  };
  
  const handleAge = (event) => {
    SetAgee(event.target.value);
  };





  const sortTheProducts = () => {
  


if( Sexx !== 'All'){
  for( var i = 0; i < searchedProductFiltered.length; i++){
var x = false;
    searchedProductFiltered[i].categories.forEach(element => {
console.log(element.name)

if(element.name == Sexx){   
 x = true;
}
    })

if(x== false){
  searchedProductFiltered.splice(i,1)
}

  }
}

if(Sexx == 'All'){
console.log("Sss")
  SetSearchProductsFiltered(productscopy)
}







if(type == 'Cheapest'){
 
 
   for(let i = 0; i<searchedProductFiltered.length ; i++){

    //console.log("ssssssssssssdacfa324234rw")
  let minIdx = i;
    //Inner pass
    for(let j = i+1; j < searchedProductFiltered.length; j++) {
      if(parseInt(searchedProductFiltered[j].price.formatted) < parseInt(searchedProductFiltered[i].price.formatted)){
      minIdx = j;
      
   }
}
//console.log(searchedProductFiltered[minIdx].price.formatted + " minimu")
let temp = searchedProductFiltered[i];
searchedProductFiltered[i] = searchedProductFiltered[minIdx];
searchedProductFiltered[minIdx] = temp;
        //Value comparison using ascending order

      
    }
}

if(type == 'Expensive'){
 
  for(let i = 0; i<searchedProductFiltered.length ; i++){

    //console.log("ssssssssssssdacfa324234rw")
  let maxIdx = i;
    //Inner pass
    for(let j = i+1; j < searchedProductFiltered.length; j++) {
      if(parseInt(searchedProductFiltered[j].price.formatted) > parseInt(searchedProductFiltered[i].price.formatted)){
        maxIdx = j;
      
   }
}
//console.log(searchedProductFiltered[minIdx].price.formatted + " minimu")
let temp = searchedProductFiltered[i];
searchedProductFiltered[i] = searchedProductFiltered[maxIdx];
searchedProductFiltered[maxIdx] = temp;
        //Value comparison using ascending order

      
    }



 
}

  
}






//console.log(searchedProductFiltered[0].categories)




  

  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
     <div className='h1div'> <h2>Search result for "{search}":  <text className='numberofproducts'> ({searchedProductFiltered.length} article)</text>   </h2> </div>
<div className='divfilter'>
  <label className='sortbylabel'>Sort by:</label>


  <TextField
          id="outlined-select-currency"
          select
          label="Choose"
          value={type}
          onChange={handleChange}
          helperText=""
          sx={{ m: 1, width: '30ch' }}
          className="price"
        >
          
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          value={Sexx}
          onChange={handleSex}
          helperText=""
          sx={{ m: 1, width: '20ch' }}
          className="price"
        >
          
          
          {sex.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     
        <TextField
          id="outlined-select-currency"
          select
          label="Age"
          value={Agee}
          onChange={handleAge}
          helperText=""
          sx={{ m: 1, width: '20ch' }}
          className="price"
        >
          
          {age.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <Button variant="contained"  className='Searchbutton'  onClick={sortTheProducts}>Sort</Button>




</div>

      
     



      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        { (searchedProductFiltered.length !== 0) ? searchedProductFiltered.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductSearch product ={product} handleAddToCart={handleAddToCart} />
          </Grid>
        )) : <h1>Sorry, no Product with the entered name</h1> 
}
      </Grid>
    </main>
  );
};

export default ProductsSearch;


