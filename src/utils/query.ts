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

  const response = await res.json();

  return response;
};

export const useQuery = <T>({
  route,
  method = 'GET',
}: {
  route: string;
  method?: string;
} & UseQueryOptions<T>) => {
  const fetch = useFetch<T>();
  return query(route, () => fetch({ method, route }));
};

export const useMutation = <T>({
  route,
  method = 'POST',
  ...rest
}: {
  route: string;
  method?: string;
}) => {
  const fetch = useFetch<T>();
  return mutation((payload: any) => fetch({ method, route, payload }), {
    ...rest,
  });
};

const useFetch = <T>() => {
  return useCallback((params: any) => apiFetch<T>(params), []);
};
