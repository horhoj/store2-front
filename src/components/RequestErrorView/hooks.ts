import { RequestError } from '../../store/types';
import { useAppTranslation } from '../../i18n/useAppTranslation';

export const useErrorMessage =
  () =>
  (requestError: RequestError): string => {
    const t = useAppTranslation();
    if (requestError.responseData === null) {
      return t(
        'app__request-error-view__error__failed-to-get-a-response-from-the-server',
      );
    }
    switch (requestError.responseData.status) {
      case 401:
        return t('app__request-error-view__error__invalid-credentials');
      case 404:
        return t('app__request-error-view__error__resource-not-found');
      default:
        return t('app__request-error-view__error__unknown-error-with-code', {
          code: requestError.responseData.status,
        });
    }
  };
