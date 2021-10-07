import { RequestError } from '../../store/types';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { RequestErrorMessageList } from './types';

const defaultRequestErrorMessageList: RequestErrorMessageList = {
  401: 'app__request-error-view__error__failed-to-get-a-response-from-the-server',
  404: 'app__request-error-view__error__resource-not-found',
};

export const useErrorMessage =
  () =>
  (
    requestError: RequestError,
    localOverrideRequestErrorMessageList: RequestErrorMessageList | null = null,
  ): string => {
    const t = useAppTranslation();

    if (requestError.responseData === null) {
      return t(
        'app__request-error-view__error__failed-to-get-a-response-from-the-server',
      );
    }
    const code = requestError.responseData.status;
    const requestErrorMessageList = {
      ...defaultRequestErrorMessageList,
      ...localOverrideRequestErrorMessageList,
    };

    const msg = requestErrorMessageList[code];
    if (msg) {
      return t(msg);
    }
    return t('app__request-error-view__error__unknown-error-with-code', {
      code: requestError.responseData.status,
    });
  };
