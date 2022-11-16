import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import logo from 'assets/logo.png';

const Wrapper = styled(Grid)`
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 83px;
`;

const FooterText = styled(Typography)`
  color: #585757;
  margin-bottom: 12px;
`;

export const Footer = memo(() => {
  const { t } = useTranslation();
  return (
    <Wrapper container justifyContent="space-between">
      <Grid item xs={4}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid
        container
        item
        justifyContent="space-between"
        xs={8}
        marginTop="30px"
      >
        <Grid container item flexDirection="column" xs={3}>
          <Typography variant="h2">{t('common.foundation')}</Typography>
          <br />
          <FooterText>{t('footer.about')}</FooterText>
          <FooterText>{t('footer.how_do_it')}</FooterText>
          <FooterText>{t('footer.contact')}</FooterText>
        </Grid>
        <Grid container item flexDirection="column" xs={3}>
          <Typography variant="h2">{t('common.foundation')}</Typography>
          <br />
          <FooterText>{t('footer.lorem')}</FooterText>
        </Grid>
        <Grid container item flexDirection="column" xs={3}>
          <Typography variant="h2">{t('common.foundation')}</Typography>
          <br />
          <FooterText>{t('footer.lorem')}</FooterText>
        </Grid>
      </Grid>
    </Wrapper>
  );
});
