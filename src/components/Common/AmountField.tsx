import { memo } from 'react';
import type { ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, TextField as MTextField, Typography } from '@mui/material';
import { FormField as MFormField } from './FormField';

const FormField = styled(MFormField)`
  padding: 16px;
`;
const TextField = styled(MTextField)`
  width: 33px;
  margin-right: 6px;
  .MuiInputBase-input {
    padding: 0;
    height: 19px;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const AmountField = memo(
  ({
    name,
    value,
    type,
    onChange,
  }: {
    name: string;
    type: 'number';
    value: number | string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }) => {
    return (
      <FormField>
        <Grid container>
          <TextField
            name={name}
            type={type}
            onChange={onChange}
            variant="standard"
            size="small"
            value={value}
          />
          <Typography variant="h2"> €</Typography>
        </Grid>
      </FormField>
    );
  },
);
