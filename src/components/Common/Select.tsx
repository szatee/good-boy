import { memo } from 'react';
import { styled } from '@mui/material/styles';
import { Select as MSelect, MenuItem, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { FormField } from 'components/Common/FormField';

const StyledSelect = styled(MSelect)`
  border: none;
  box-shadow: 'none';
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  .MuiSelect-outlined {
    padding: 0;
  }
  & > svg {
    margin-top: -10px;
    margin-right: -10px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const Placeholder = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Select = memo(
  (props: {
    label: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
  }) => {
    return (
      <FormField {...props}>
        <StyledSelect
          displayEmpty
          renderValue={(selected: any) => {
            if (!selected) {
              return <Placeholder>{props.placeholder}</Placeholder>;
            }
            return selected;
          }}
          IconComponent={KeyboardArrowDown}
          fullWidth
        >
          <MenuItem disabled value="">
            <Typography>{props.placeholder}</Typography>
          </MenuItem>
        </StyledSelect>
      </FormField>
    );
  },
);
