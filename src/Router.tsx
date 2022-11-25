import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StepOne } from 'screens/StepOne';
import { StepTwo } from 'screens/StepTwo';
import { StepThree } from 'screens/StepThree';

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<StepOne />} />
      <Route path="/info" element={<StepTwo />} />
      <Route path="/check-info" element={<StepThree />} />
    </Routes>
  );
});
