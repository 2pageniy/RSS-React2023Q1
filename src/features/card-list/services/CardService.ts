import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICardRaM } from '../interface';

interface ResponseFetch {
  results: ICardRaM[];
}

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<ResponseFetch, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name,
        },
      }),
    }),
  }),
});
