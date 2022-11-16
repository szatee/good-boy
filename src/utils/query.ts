import { useCallback } from 'react';
import type { UseQueryOptions } from 'react-query';
import { useMutation as mutation, useQuery as query } from 'react-query';

export const apiFetch = async <T>(params: any): Promise<T> => {
  const { method = 'GET', route, payload, body } = params;
  const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/${route}`, {
    method,
    headers: {
      Accept: 'application/json',
      ...(payload ? { 'Content-Type': 'application/json' } : {}),
    },
    body,
  });

  let response;

  try {
    response = await res.clone().json();
  } catch {
    const errorMessage = await res.text();
    throw new Error(errorMessage);
  }

  return response;
};

export const useQuery = <T>({
  route,
}: {
  route: string;
} & UseQueryOptions<T>) => {
  const fetch = useFetchData<T>();
  return query(route, () => fetch({ route }));
};

export const useMutation = <T>({
  route,
  method = 'POST',
  ...rest
}: {
  route: string;
  method?: string;
}) => {
  const fetch = useFetchData<T>();

  return mutation((payload: any) => fetch({ method, route, payload }), {
    ...rest,
  });
};

const useFetch = () => {
  return useCallback(<T>(params: any) => apiFetch<T>(params), []);
};

export const useFetchData = <T>() => {
  const fetch = useFetch();
  return useCallback(
    async (params: any) => {
      const { error, data } = await fetch<{
        error?: { code: number };
        data: T;
      }>(params);
      if (error) {
        throw new Error(error.code.toString());
      }
      return data;
    },
    [fetch],
  );
};
