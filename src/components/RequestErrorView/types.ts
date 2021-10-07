import { RequestError } from '../../store/types';
import { TranslationMessageKeys } from '../../i18n/types';

export interface RequestErrorViewProps {
  requestError: RequestError;
  localOverrideRequestErrorMessageList?: RequestErrorMessageList | null;
}

export interface RequestErrorMessageList {
  [keys: number]: TranslationMessageKeys;
}
