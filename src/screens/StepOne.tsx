import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Card, CARD_SIDE } from 'components/Common/Card';

import wallet_grey from 'assets/svg/wallet_grey.svg';
import wallet_white from 'assets/svg/wallet_white.svg';
import paw_grey from 'assets/svg/paw_grey.svg';
import paw_white from 'assets/svg/paw_white.svg';

const Wrapper = styled('div')`
  width: 100%;
`;

export const StepOne = memo(() => {
  const { t } = useTranslation();
  const [active, setActive] = useState(CARD_SIDE.LEFT);
  const handleChange = useCallback(
    (type: CARD_SIDE) => () => {
      setActive(type);
    },
    [],
  );
  return (
    <Wrapper>
      <br />
      <Grid container>
        <Grid item xs={6}>
          <Card
            text={t('step_one.card.specific_shelter')}
            active={active === CARD_SIDE.LEFT}
            side={CARD_SIDE.LEFT}
            icon={active === CARD_SIDE.LEFT ? wallet_white : wallet_grey}
            onClick={handleChange(CARD_SIDE.LEFT)}
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            text={t('step_one.card.foundation')}
            active={active === CARD_SIDE.RIGHT}
            side={CARD_SIDE.RIGHT}
            icon={active === CARD_SIDE.RIGHT ? paw_white : paw_grey}
            onClick={handleChange(CARD_SIDE.RIGHT)}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
});
