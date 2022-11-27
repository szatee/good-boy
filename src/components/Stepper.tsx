import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Step } from 'components/common/Step';

enum PATH {
  HOME = '/',
  INFO = '/info',
  CHECK = '/check-info',
}

const steps = [PATH.HOME, PATH.INFO, PATH.CHECK];

export const Stepper = memo(() => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const renderTitle = useMemo(() => {
    switch (pathname) {
      case PATH.HOME:
        return t('step_one.title');
      case PATH.INFO:
        return t('step_two.title');
      case PATH.CHECK:
        return t('step_three.title');
    }
  }, [pathname, t]);

  return (
    <Grid container spacing={3}>
      <Grid container item spacing={1}>
        {steps.map((item, index) => (
          <Grid item key={index}>
            <Step active={item === pathname} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Typography variant="h1">{renderTitle}</Typography>
      </Grid>
    </Grid>
  );
});
