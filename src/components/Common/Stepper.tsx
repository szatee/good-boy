import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { Step } from './Step';

export const Stepper = memo(() => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={3}>
      <Grid container item spacing={1}>
        <Grid item>
          <Step active={true} />
        </Grid>
        <Grid item>
          <Step />
        </Grid>
        <Grid item>
          <Step />
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h1">{t('step_one.title')}</Typography>
      </Grid>
    </Grid>
  );
});
