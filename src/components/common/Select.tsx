import { memo, useCallback, useState } from 'react';
import type { FocusEventHandler } from 'react';
import { styled } from '@mui/material/styles';
import {
  IconButton as MIconButton,
  Select as MSelect,
  MenuItem,
  Typography,
  CircularProgress,
  Grid,
} from '@mui/material';
import { Clear, KeyboardArrowDown } from '@mui/icons-material';
import { FormFieldWrapper } from 'components/common/FormFieldWrapper';
import { useEvent } from 'utils/formik';

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
    display: ${({ value }) => (value ? 'none' : '')};
  }
`;

const IconButton = styled(MIconButton)`
  margin-top: -20px;
  margin-right: -20px;
  display: ${({ value }) => (value ? '' : 'none')};
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
    onChange: (event: any) => void;
    onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: number | string;
  }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleToggleOpen = useCallback(
      () => setOpen((prevState) => !prevState),
      [],
    );

    const {
      placeholder,
      items,
      name,
      onChange: _onChange,
      onBlur,
      value,
    } = props;

    const onChange = useEvent(_onChange, name);

    const handleClearClick = useCallback(
      (e: any) => {
        e.stopPropagation();
        onChange('');
      },
      [onChange],
    );

    return (
      <FormFieldWrapper {...props} onClick={handleToggleOpen}>
        {items ? (
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
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            endAdornment={
              <IconButton value={value} onClick={handleClearClick}>
                <Clear />
              </IconButton>
            }
            fullWidth
          >
            <MenuItem disabled value="">
              <Typography>{placeholder}</Typography>
            </MenuItem>
            {items?.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                <Typography>{name}</Typography>
              </MenuItem>
            ))}
          </StyledSelect>
        ) : (
          <Grid container justifyContent="center">
            <CircularProgress size={24} />
          </Grid>
        )}
      </FormFieldWrapper>
    );
  },
);
