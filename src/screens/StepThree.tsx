import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from 'store/tabSlice';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Checkbox } from 'components/Common/Checkbox';
import { Button } from 'components/Common/Button';
import { CARD_SIDE } from 'components/Common/Card';
import { renderText } from 'utils/text';
import { useStepThreeSchema } from 'utils/hooks/validations';
import { getForm } from 'store/formSlice';
import { selectShelters } from 'store/sheltersSlice';
import { setMessage } from 'store/messageSlice';

const Wrapper = styled('div')`
  width: 100%;
`;

export const StepThree = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const stepThreeSchema = useStepThreeSchema();
  const form = useSelector(getForm);
  const shelter = useSelector(selectShelters(form.shelterID));

  const handleBack = useCallback(() => dispatch(setTab(1)), [dispatch]);

  const stepThreeForm = useFormik({
    initialValues: {
      gdpr: false,
    },
    validationSchema: stepThreeSchema,
    onSubmit: async () => {
      dispatch(
        setMessage({
          type: 'success',
          text: t('step_three.submit_text'),
        }),
      );
    },
  });

  const handleToggleGdpr = useCallback(
    (value: any) => () => stepThreeForm.setFieldValue('gdpr', value),
    [stepThreeForm],
  );

  return form ? (
    <form onSubmit={stepThreeForm.handleSubmit}>
      <Wrapper>
        <br />
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.type')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {form.type === CARD_SIDE.LEFT
                  ? t('step_one.card.specific_shelter')
                  : t('step_one.card.foundation')}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.shelter')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{renderText(shelter?.name ?? '')}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.amount')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{renderText(form.value ?? '')} €</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.name')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {form.firstName} {form.lastName}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.email')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{renderText(form.email)}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h2">{t('step_three.phone')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{renderText(form.phone)}</Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={12}>
              <Checkbox
                label={t('step_three.gdpr')}
                checked={stepThreeForm.values.gdpr}
                onClick={handleToggleGdpr}
                error={
                  stepThreeForm.touched.gdpr &&
                  Boolean(stepThreeForm.errors.gdpr)
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container justifyContent="space-between">
          <Button color="secondary" onClick={handleBack}>
            {t('step_three.back')}
          </Button>
          <Button color="primary" type="submit">
            {t('step_three.submit')}
          </Button>
        </Grid>
      </Wrapper>
    </form>
  ) : null;
});
