const { useCallback } = require('react');

export const useEvent = (
  event: (arg0: { target: { name: string; value: string } }) => any,
  name: string,
) =>
  useCallback(
    (value: string) =>
      event({
        target: {
          name,
          value,
        },
      }),
    [event, name],
  );
