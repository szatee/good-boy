import { memo, useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  CircularProgress,
  Grid,
  Select as MSelect,
  MenuItem,
  Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { FormFieldWrapper } from 'components/common/FormFieldWrapper';

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
    name: string;
    items?: any[];
    label: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
    onChange?: (e: string | SelectChangeEvent<any>) => void;
    value?: number | string;
  }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleToggleOpen = useCallback(
      () => setOpen((prevState) => !prevState),
      [],
    );

    const { placeholder, items, name, onChange, value } = props;

    return (
      <FormFieldWrapper {...props} onClick={handleToggleOpen}>
        <StyledSelect
          name={name}
          open={open}
          displayEmpty
          defaultValue={''}
          value={value}
          renderValue={(selected: any) => {
            if (!selected) {
              return <Placeholder>{placeholder}</Placeholder>;
            }
            const { name } = items?.find(({ id }) => id === selected) ?? {};
            return name;
          }}
          IconComponent={KeyboardArrowDown}
          onChange={onChange}
          fullWidth
        >
          {items ? (
            <>
              <MenuItem disabled value="">
                <Typography>{placeholder}</Typography>
              </MenuItem>
              {items.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  <Typography>{name}</Typography>
                </MenuItem>
              ))}
            </>
          ) : (
            <MenuItem disabled value="">
              <Grid container justifyContent="center">
                <CircularProgress />
              </Grid>
            </MenuItem>
          )}
        </StyledSelect>
      </FormFieldWrapper>
    );
  },
);
