import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { Step } from './Step';

const steps = [0, 1, 2];

export const Stepper = memo(() => {
  const { t } = useTranslation();
  const step = useSelector<{ tab: { value: number } }>(
    (state) => state.tab.value,
  );

  const renderTitle = useMemo(() => {
    switch (step) {
      case 0:
        return t('step_one.title');
      case 1:
        return t('step_two.title');
      case 2:
        return t('step_three.title');
    }
  }, [step, t]);

  return (
    <Grid container spacing={3}>
      <Grid container item spacing={1}>
        {steps.map((item, index) => (
          <Grid item key={index}>
            <Step active={item === step} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Typography variant="h1">{renderTitle}</Typography>
      </Grid>
    </Grid>
  );
});
