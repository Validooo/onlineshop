import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
   <Controller
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={label}    name={name}  error={isError}/>
        )}
            control={control}
            label={label}
            name={name}
            fullWidth
            error={isError}
          />
    </Grid>
  );
}

export default FormInput;