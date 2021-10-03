import { VariantType } from 'notistack';
import { en } from '../../i18n/en';

export interface FlashMessagesState {
  flashMessageList: FlashMessage[];
  currentId: number;
}

interface FlashMessageData {
  [keys: string]: string | number;
}

export interface FlashMessageCommonData {
  msg: keyof typeof en;
  type: VariantType;
  data?: FlashMessageData;
}

export interface FlashMessage extends FlashMessageCommonData {
  id: number;
}

export enum FlashMessagesWorkerType {
  ADD_MESSAGE = 'FlashMessages/addMessage',
}

interface FlashMessagesWorker<T, P> {
  type: T;
  payload: P;
}

export type FlashMessagesAddMessageWorker = FlashMessagesWorker<
  FlashMessagesWorkerType.ADD_MESSAGE,
  FlashMessageCommonData
>;
