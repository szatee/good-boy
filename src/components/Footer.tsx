import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { useBreakpoints } from 'utils/hooks/useBreakpoints';
import logo from 'assets/logo.png';

const Wrapper = styled('div')<{ isLaptop: boolean }>`
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: ${({ isLaptop }) => (isLaptop ? '0 40px' : '0')};
`;

const FooterTitle = styled(Typography)`
  margin-bottom: 20px;
`;

const FooterText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
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
            <FooterTitle variant="h2">{t('common.foundation')}</FooterTitle>
            <FooterText>{t('footer.about')}</FooterText>
            <FooterText>{t('footer.how_do_it')}</FooterText>
            <FooterText>{t('footer.contact')}</FooterText>
          </Grid>
          <Grid container item flexDirection="column" xs={isMobile ? 12 : 3}>
            <FooterTitle variant="h2">{t('common.foundation')}</FooterTitle>
            <FooterText>{t('footer.lorem')}</FooterText>
          </Grid>
          <Grid container item flexDirection="column" xs={isMobile ? 12 : 3}>
            <FooterTitle variant="h2">{t('common.foundation')}</FooterTitle>
            <FooterText>{t('footer.lorem')}</FooterText>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
});
