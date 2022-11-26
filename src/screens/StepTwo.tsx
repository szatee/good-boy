import { memo, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getForm, setForm } from 'store/formSlice';
import { Grid, Typography } from '@mui/material';
import { Button } from 'components/common/Button';
import { TextField } from 'components/common/TextField';
import { Wrapper } from 'components/common/Wrapper';
import { useStepTwoSchema } from 'utils/hooks/validations';
import { PhoneField } from 'components/common/forms/PhoneField';
import { Form } from 'models/form';

export const StepTwo = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(getForm);
  const [initialValues, setInitialValues] = useState<Partial<Form>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (form) {
      setInitialValues(form);
    }
  }, [form]);

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  const stepTwoSchema = useStepTwoSchema();
  const stepTwoForm = useFormik({
    initialValues,
    validationSchema: stepTwoSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      dispatch(setForm(values));
      navigate('/check-info');
    },
  });

  return (
    <form onSubmit={stepTwoForm.handleSubmit}>
      <Wrapper>
        <Grid container item spacing={2}>
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
        <Grid container item justifyContent="space-between">
          <Button color="secondary" onClick={handleBack}>
            {t('step_two.back')}
          </Button>
          <Button
            color="primary"
            type="submit"
            disabled={!stepTwoForm.isValid && !stepTwoForm.dirty}
          >
            {t('step_two.submit')}
          </Button>
        </Grid>
      </Wrapper>
    </form>
  );
});
