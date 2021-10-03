import {
  FlashMessageCommonData,
  FlashMessagesAddMessageWorker,
  FlashMessagesWorkerType,
} from './types';

export const addMessageWorker = (
  data: FlashMessageCommonData,
): FlashMessagesAddMessageWorker => ({
  type: FlashMessagesWorkerType.ADD_MESSAGE,
  payload: { ...data },
});
