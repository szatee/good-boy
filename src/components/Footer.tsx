import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { useBreakpoints } from 'utils/hooks/useBreakpoints';
import logo from 'assets/logo.png';

const Wrapper = styled('div')<{ isLaptop: boolean }>`
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 80px;
  padding: ${({ isLaptop }) => (isLaptop ? '0 40px' : '0')};
`;

const FooterText = styled(Typography)`
  color: #585757;
  margin-bottom: 12px;
`;

export const Footer = memo(() => {
  const { t } = useTranslation();
  const { isLaptop, isTablet, isMobile } = useBreakpoints();
  return (
    <Wrapper isLaptop={isLaptop}>
      <Grid
        container
        justifyContent="space-between"
        flexDirection={isTablet ? 'column' : 'row'}
      >
        <Grid item xs={4}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          xs={isTablet ? 12 : 8}
          flexDirection={isMobile ? 'column' : 'row'}
          marginTop="30px"
        >
          <Grid container item flexDirection="column" xs={isMobile ? 12 : 3}>
            <Typography variant="h2">{t('common.foundation')}</Typography>
            <br />
            <FooterText>{t('footer.about')}</FooterText>
            <FooterText>{t('footer.how_do_it')}</FooterText>
            <FooterText>{t('footer.contact')}</FooterText>
            <br />
          </Grid>
          <Grid container item flexDirection="column" xs={isMobile ? 12 : 3}>
            <Typography variant="h2">{t('common.foundation')}</Typography>
            <br />
            <FooterText>{t('footer.lorem')}</FooterText>
            <br />
          </Grid>
          <Grid container item flexDirection="column" xs={isMobile ? 12 : 3}>
            <Typography variant="h2">{t('common.foundation')}</Typography>
            <br />
            <FooterText>{t('footer.lorem')}</FooterText>
            <br />
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
});
