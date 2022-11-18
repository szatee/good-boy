import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setTab } from 'store/tabSlice';
import { setForm } from 'store/formSlice';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Button } from 'components/Common/Button';
import { TextField } from 'components/Common/TextField';
import { useStepTwoSchema } from 'utils/hooks/validations';
import { PhoneField } from 'components/Common/PhoneField';
import { formatPhone } from 'utils/phone';

const Wrapper = styled('div')`
  width: 100%;
`;

export const StepTwo = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleBack = useCallback(() => dispatch(setTab(0)), [dispatch]);

  const stepTwoSchema = useStepTwoSchema();
  const stepTwoForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validationSchema: stepTwoSchema,
    onSubmit: async (values) => {
      dispatch(setForm({ ...values, phone: formatPhone(values.phone) }));
      dispatch(setTab(2));
    },
  });

  return (
    <form onSubmit={stepTwoForm.handleSubmit}>
      <Wrapper>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_two.about')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="firstName"
              label={t('step_two.form.label.first_name')}
              placeholder={t('step_two.form.placeholder.first_name')}
              onBlur={stepTwoForm.handleBlur}
              error={
                stepTwoForm.touched.firstName &&
                Boolean(stepTwoForm.errors.firstName)
              }
              helperText={
                (stepTwoForm.touched.firstName &&
                  stepTwoForm.errors.firstName) ||
                ' '
              }
              onChange={stepTwoForm.handleChange}
              value={stepTwoForm.values.firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastName"
              label={t('step_two.form.label.last_name')}
              placeholder={t('step_two.form.placeholder.last_name')}
              onBlur={stepTwoForm.handleBlur}
              error={
                stepTwoForm.touched.lastName &&
                Boolean(stepTwoForm.errors.lastName)
              }
              helperText={
                (stepTwoForm.touched.lastName && stepTwoForm.errors.lastName) ||
                ' '
              }
              onChange={stepTwoForm.handleChange}
              value={stepTwoForm.values.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label={t('step_two.form.label.email')}
              placeholder={t('step_two.form.placeholder.email')}
              onBlur={stepTwoForm.handleBlur}
              error={
                stepTwoForm.touched.email && Boolean(stepTwoForm.errors.email)
              }
              helperText={
                (stepTwoForm.touched.email && stepTwoForm.errors.email) || ' '
              }
              onChange={stepTwoForm.handleChange}
              value={stepTwoForm.values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <PhoneField
              label={t('step_two.form.label.phone')}
              placeholder={t('step_two.form.placeholder.phone_sk')}
              error={
                stepTwoForm.touched.phone && Boolean(stepTwoForm.errors.phone)
              }
              helperText={
                (stepTwoForm.touched.phone && stepTwoForm.errors.phone) || ' '
              }
              setValue={(value: string) =>
                stepTwoForm.setFieldValue('phone', value)
              }
              value={stepTwoForm.values.phone}
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container justifyContent="space-between">
          <Button color="secondary" onClick={handleBack}>
            {t('step_two.back')}
          </Button>
          <Button color="primary" type="submit">
            {t('step_two.submit')}
          </Button>
        </Grid>
      </Wrapper>
    </form>
  );
});
