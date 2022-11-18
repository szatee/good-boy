import { memo } from 'react';
import { FormField } from 'components/Common/FormField';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { PHONE_REGION } from 'models/phone';

const inputStyle = {
  width: '100%',
  border: 'none',
  height: '25px',
};

const flagButtonStyle = {
  backgroundColor: '#FFFFFF',
  border: 'none',
};

const dropdownStyle = {
  overflow: 'hidden',
};

export const PhoneField = memo(
  (props: {
    label: string;
    placeholder: string;
    error?: boolean;
    helperText?: string;
    onBlur?: (e: any) => void;
    value?: string;
    setValue?: (e: any) => void;
  }) => {
    const { placeholder, value, setValue, onBlur } = props;
    return (
      <FormField {...props}>
        <PhoneInput
          inputStyle={inputStyle}
          buttonStyle={flagButtonStyle}
          dropdownStyle={dropdownStyle}
          country={PHONE_REGION.SK}
          onlyCountries={[PHONE_REGION.SK, PHONE_REGION.CZ]}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={setValue}
        />
      </FormField>
    );
  },
);
