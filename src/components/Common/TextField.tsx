import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { TextField as MTextField } from '@mui/material';
import { FormField } from 'components/Common/FormField';

const StyledTextField = styled(MTextField)`
  .MuiInputBase-input {
    padding: 0;
  }
  .MuiOutlinedInput-root {
    padding: 0;
    & > fieldset {
      border: none;
    }
  }
`;

export const TextField = memo(
  (props: {
    label: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
    InputProps?: object;
  }) => {
    return (
      <FormField {...props}>
        <StyledTextField
          variant="outlined"
          placeholder={props.placeholder}
          InputProps={props.InputProps}
          fullWidth
        />
      </FormField>
    );
  },
);
