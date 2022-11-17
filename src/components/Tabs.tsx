import { memo, Fragment, useMemo } from 'react';
import { Stepper } from 'components/Common/Stepper';
import { StepOne } from 'screens/StepOne';
import { StepTwo } from 'screens/StepTwo';
import { StepThree } from 'screens/StepThree';

export const Tabs = memo(() => {
  const step: number = 1;

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
      <Stepper step={step} />
      {renderStep}
    </Fragment>
  );
});
