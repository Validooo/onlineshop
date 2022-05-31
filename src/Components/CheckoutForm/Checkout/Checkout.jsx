import React from 'react'
import { Paper , Stepper , Step , StepLabel , Typography , CircularProgress , Divider , Button} from '@material-ui/core'
import { useState, useEffect } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';


const steps = [
  'Shipping address',
  'Payment details',
  'Conformation',
];


const Checkout = () => {

const[activeStep , setActiveStep] = useState(0);
const classes = useStyles();



const Form = () => { activeStep === 0 ?  <AddressForm/> : <PaymentForm/>}


  return (
      <>
    <div/>
    <main  >
<Paper>
    <Typography>
        Checkout
    </Typography>
    <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
</Paper>
    </main>
    </>
  )
}

export default Checkout