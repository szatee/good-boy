import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, TextField as MTextField, Typography } from '@mui/material';
import { FormField as MFormField } from './FormField';

const FormField = styled(MFormField)<{ active: boolean }>`
  padding: 16px;
  background-image: ${({ theme, active }) =>
    active ? theme.palette.primary.light : theme.palette.background.default};
  color: ${({ theme, active }) =>
    active ? theme.palette.background.default : theme.palette.text.primary};
`;
const TextField = styled(MTextField)`
  width: 33px;
  margin-right: 6px;
  .MuiInputBase-input {
    padding: 0;
    height: 19px;
  }
`;

export const AmountField = memo(() => {
  return (
    <FormField active={false}>
      <Grid container>
        <TextField variant="standard" size="small" />
        <Typography variant="h2"> €</Typography>
      </Grid>
    </FormField>
  );
});
