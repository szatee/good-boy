import { memo } from 'react';
import type { ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { TextField as MTextField } from '@mui/material';
import { FormFieldWrapper } from 'components/common/FormFieldWrapper';

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
    name: string;
    label: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
    InputProps?: object;
    onChange?: (e: ChangeEvent<any>) => void;
    onBlur?: (e: any) => void;
    value?: string;
  }) => {
    const { name, placeholder, value, onChange, onBlur, InputProps } = props;
    return (
      <FormFieldWrapper {...props}>
        <StyledTextField
          name={name}
          variant="outlined"
          placeholder={placeholder}
          InputProps={InputProps}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          fullWidth
        />
      </FormFieldWrapper>
    );
  },
);
