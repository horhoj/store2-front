import { RequestError } from '../../store/types';

export const getErrorMessage = (requestError: RequestError): string => {
  if (requestError.responseData === null) {
    return 'Failed to get a response from the server';
  }
  switch (requestError.responseData.status) {
    case 401:
      return 'Invalid credentials';
    default:
      return 'Unknown error';
  }
};
