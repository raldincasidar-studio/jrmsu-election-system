// composables/useApiFetch.ts
import type { UseFetchOptions } from 'nuxt/app';
const { $swal, $toast } = useNuxtApp();

export function useMyFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  return useFetch<T>(url, {
    // baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001',
    // baseURL: 'http://localhost/SSG_Election2/api-version1/services',
    baseURL: 'https://thingproxy.freeboard.io/fetch/https://coderstation.net/SSG-Election/api-version1/services',
    headers: {
      'User-Agent': 'Coderstation-Protocol',
      'API-Key': '-',
      'API-Secret': '-'
    },
    ...options,

    onResponseError: (response) => {
      const res_data = response?.response?._data;
      console.log('GLOBAL ERROR:', res_data);
      // $toast.fire({
      //   title: res_data?.error || 'Something went wrong',
      //   icon: 'error'
      // })
    }
  });
}
