import UserAPI from '~/api/user';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptionsOf } from '~/hooks/types';

const useGetMe = (options: UseQueryOptionsOf<typeof UserAPI.getMe> = {}) => {
  return useQuery(getKey(), fetcher(), options);
};

const getKey = () => ['GetMe'];
const fetcher = () => () => UserAPI.getMe();

useGetMe.getKey = getKey;
useGetMe.fetcher = fetcher;

export default useGetMe;
