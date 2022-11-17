import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { FormControlLabel, Grid, Typography } from '@mui/material';
import { Checkbox } from 'components/Common/Checkbox';
import { Button } from 'components/Common/Button';

const Wrapper = styled('div')`
  width: 100%;
`;

export const StepThree = memo(() => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <br />
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.type')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Chcem finančne prispieť celej nadácii</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.shelter')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Mestský útulok, Žilina</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.amount')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>50 €</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.name')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Peter Reguli</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.email')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>peter.reguli@goodrequest.com</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2">{t('step_three.phone')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>+421 902 237 207</Typography>
          </Grid>
        </Grid>
        <Grid container item alignItems="center">
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={true} />}
              label={t('step_three.gdpr')}
            />
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container justifyContent="space-between">
        <Button color="secondary">{t('step_three.back')}</Button>
        <Button color="primary">{t('step_three.submit')}</Button>
      </Grid>
    </Wrapper>
  );
});
