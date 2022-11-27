import { createSelector } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const sheltersSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getShelters: build.query({
      query: () => 'shelters',
    }),
  }),
});

export const { useGetSheltersQuery } = sheltersSlice;

const selectSheltersResult =
  sheltersSlice.endpoints.getShelters.select('shelters');

export const selectShelters = (id?: string | number) =>
  createSelector(selectSheltersResult, (result) => {
    if (result) {
      const { data: { shelters } = {} } = result;

      if (id) {
        return (
          shelters?.find((shelter: { id: string }) => shelter.id === id) ?? {}
        );
      }
      return shelters;
    }
  });
