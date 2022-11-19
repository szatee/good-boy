import { api } from 'services/api';

export const contributeSlice = api.injectEndpoints({
  endpoints: (build) => ({
    addContribute: build.mutation({
      query: (body) => ({
        url: `shelters/contribute`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddContributeMutation } = contributeSlice;
