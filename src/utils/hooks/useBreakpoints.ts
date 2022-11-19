import { useMediaQuery } from '@mui/material';

export const useBreakpoints = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isLaptop = useMediaQuery('(max-width:1024px)');
  return {
    isMobile,
    isTablet,
    isLaptop,
  };
};
