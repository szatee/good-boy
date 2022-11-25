import { memo, useCallback } from 'react';
import { Alert as MAlert, Snackbar } from '@mui/material';
import { Pets } from '@mui/icons-material';
import { getMessage, setMessage } from 'store/messageSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Alert = memo(() => {
  const dispatch = useDispatch();
  const message = useSelector(getMessage);

  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return false;
      }

      dispatch(setMessage({ message: '' }));
    },
    [dispatch],
  );

  return (
    <Snackbar
      open={Boolean(message.message)}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      {message.message ? (
        <MAlert
          onClose={handleClose}
          severity={message.type}
          variant="filled"
          iconMapping={{
            success: <Pets fontSize="inherit" />,
          }}
        >
          {message.message}
        </MAlert>
      ) : (
        <div />
      )}
    </Snackbar>
  );
});
