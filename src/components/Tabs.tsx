import { memo, Fragment, useMemo } from 'react';
import { getTab } from 'store/tabSlice';
import { useSelector } from 'react-redux';
import { Stepper } from 'components/Stepper';
import { StepOne } from 'screens/StepOne';
import { StepTwo } from 'screens/StepTwo';
import { StepThree } from 'screens/StepThree';

export const Tabs = memo(() => {
  const step = useSelector(getTab);

  const renderStep = useMemo(() => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
    }
  }, [step]);

  return (
    <Fragment>
      <Stepper />
      {renderStep}
    </Fragment>
  );
});
