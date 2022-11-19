import { memo, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Divider, Grid, Typography } from '@mui/material';
import { useBreakpoints } from 'utils/hooks/useBreakpoints';
import facebookIcon from 'assets/svg/facebook.svg';
import instagramIcon from 'assets/svg/instagram.svg';

const Wrapper = styled('div')<{ isLaptop: boolean }>`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${({ isLaptop }) => (isLaptop ? '6px 40px' : '6px 0')};
`;

const Icon = styled('a')`
  padding: 0 6px;
`;

const HeaderText = styled(Typography)`
  color: #9f9f9f;
`;

export const Header = memo(() => {
  const { t } = useTranslation();
  const { isLaptop } = useBreakpoints();
  return (
    <Fragment>
      <Wrapper isLaptop={isLaptop}>
        <Grid container alignItems="center" justifyContent="space-between">
          <HeaderText>{t('common.foundation')}</HeaderText>
          <Grid item>
            <Icon
              href="https://www.facebook.com/GoodRequestCom"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="fb" />
            </Icon>
            <Icon
              href="https://www.instagram.com/goodrequest/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="ig" />
            </Icon>
          </Grid>
        </Grid>
      </Wrapper>
      <Divider />
    </Fragment>
  );
});
