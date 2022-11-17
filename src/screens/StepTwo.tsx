import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  InputAdornment,
  Menu,
  MenuItem,
} from '@mui/material';
import { Button } from 'components/Common/Button';
import { TextField } from 'components/Common/TextField';
import { Flag } from 'components/Common/Flag';

import sk_flag from 'assets/svg/sk.svg';
import cz_flag from 'assets/svg/cz.svg';

const Wrapper = styled('div')`
  width: 100%;
`;

export const StepTwo = memo(() => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(event.currentTarget),
    [],
  );

  const handleCloseMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <Wrapper>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">{t('step_two.about')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('step_two.form.label.first_name')}
            placeholder={t('step_two.form.placeholder.first_name')}
            error={true}
            helperText="Required field"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('step_two.form.label.last_name')}
            placeholder={t('step_two.form.placeholder.last_name')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('step_two.form.label.email')}
            placeholder={t('step_two.form.placeholder.email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('step_two.form.label.phone')}
            placeholder={t('step_two.form.placeholder.phone_sk')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Flag icon={sk_flag} onClick={handleOpenMenu} />
                </InputAdornment>
              ),
            }}
          />
          <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
            <MenuItem onClick={handleCloseMenu}>
              <Flag icon={sk_flag} />
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Flag icon={cz_flag} />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container justifyContent="space-between">
        <Button color="secondary">{t('step_two.back')}</Button>
        <Button color="primary">{t('step_two.submit')}</Button>
      </Grid>
    </Wrapper>
  );
});
