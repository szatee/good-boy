import { memo, Fragment, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShelters } from 'store/sheltersSlice';
import { Shelter } from 'models/shelter';
import { useQuery } from 'utils/query';
import { Stepper } from 'components/Stepper';
import { StepOne } from 'screens/StepOne';
import { StepTwo } from 'screens/StepTwo';
import { StepThree } from 'screens/StepThree';

export const Tabs = memo(() => {
  const dispatch = useDispatch();
  const step = useSelector<{ tab: { value: number } }>(
    (state) => state.tab.value,
  );

  const { data: { shelters } = {} } = useQuery<{ shelters: Shelter[] }>({
    route: 'shelters',
  });

  useEffect(() => {
    if (shelters) {
      dispatch(setShelters(shelters));
    }
  }, [dispatch, shelters]);

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
