import { memo, useState, useEffect, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getForm, setForm } from 'store/formSlice';
import { selectShelters } from 'store/sheltersSlice';
import { Grid, Typography } from '@mui/material';
import { Card, CARD_SIDE } from 'components/common/Card';
import { Select } from 'components/common/Select';
import { AmountCard } from 'components/common/AmountCard';
import { AmountField } from 'components/common/forms/AmountField';
import { Button } from 'components/common/Button';
import { Wrapper } from 'components/common/Wrapper';
import { useStepOneSchema } from 'utils/hooks/validations';
import { Form } from 'models/form';

const amounts = [5, 10, 20, 30, 50, 100];

const HelperText = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
  text-align: right;
  margin-top: -16px;
`;

export const StepOne = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<Partial<Form>>({
    type: CARD_SIDE.RIGHT,
    shelterID: '',
    value: 5,
    customValue: '',
  });

  const stepOneSchema = useStepOneSchema();
  const shelters = useSelector(selectShelters());
  const form = useSelector(getForm);

  useEffect(() => {
    if (form) {
      const { value } = form as Form;
      const hasCustomValue = value && !amounts.includes(value);
      setInitialValues({
        ...form,
        value: !hasCustomValue ? value : null,
        customValue: hasCustomValue ? value : '',
      });
    }
  }, [form]);

  const stepOneForm = useFormik({
    initialValues,
    validationSchema: stepOneSchema,
    enableReinitialize: true,
    onSubmit: async ({ type, shelterID, value, customValue }) => {
      dispatch(
        setForm({ type, shelterID, value: customValue ? customValue : value }),
      );
      navigate('/info');
    },
  });

  const handleChangeAmountCard = useCallback(
    (value: number) => () => {
      stepOneForm.setFieldValue('value', value);
      if (Boolean(stepOneForm.values.customValue)) {
        stepOneForm.setFieldValue('customValue', '');
      }
    },
    [stepOneForm],
  );

  return (
    <form onSubmit={stepOneForm.handleSubmit}>
      <Wrapper>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Card
              name="type"
              text={t('step_one.card.specific_shelter')}
              side={CARD_SIDE.LEFT}
              icon="wallet"
              onClick={stepOneForm.handleChange}
              value={stepOneForm.values.type}
            />
          </Grid>
          <Grid item xs={6}>
            <Card
              name="type"
              text={t('step_one.card.foundation')}
              side={CARD_SIDE.RIGHT}
              icon="paw"
              onClick={stepOneForm.handleChange}
              value={stepOneForm.values.type}
            />
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid container item justifyContent="space-between">
            <Typography variant="h2">{t('step_one.select.about')}</Typography>
            <Typography variant="h4">
              {t(
                stepOneForm.values.type === CARD_SIDE.RIGHT
                  ? 'step_one.select.optional'
                  : 'step_one.select.required',
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Select
              name="shelterID"
              label={t('step_one.select.label')}
              placeholder={t('step_one.select.placeholder')}
              items={shelters}
              onChange={stepOneForm.handleChange}
              onBlur={stepOneForm.handleBlur}
              error={
                stepOneForm.touched.shelterID &&
                Boolean(stepOneForm.errors.shelterID)
              }
              helperText={
                (stepOneForm.touched.shelterID &&
                  stepOneForm.errors.shelterID) ||
                ' '
              }
              value={stepOneForm.values.shelterID}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_one.amount.text')}</Typography>
          </Grid>
          <Grid container item spacing={1}>
            {amounts.map((item, index) => (
              <Grid item key={index}>
                <AmountCard
                  name="value"
                  amount={item}
                  active={
                    stepOneForm.values.value === item &&
                    Boolean(!stepOneForm.values.customValue)
                  }
                  onClick={handleChangeAmountCard(item)}
                />
              </Grid>
            ))}
            <Grid item>
              <AmountField
                name="customValue"
                type="number"
                active={Boolean(stepOneForm.values.customValue)}
                onChange={stepOneForm.handleChange}
                value={stepOneForm.values.customValue}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <HelperText>
              {stepOneForm.touched.customValue &&
              Boolean(stepOneForm.errors.customValue)
                ? stepOneForm.errors.customValue
                : ''}
            </HelperText>
          </Grid>
        </Grid>
        <Grid container item justifyContent="flex-end">
          <Button color="primary" type="submit">
            {t('step_one.submit')}
          </Button>
        </Grid>
      </Wrapper>
    </form>
  );
});
