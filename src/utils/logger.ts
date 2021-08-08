import { IS_LOGGING_ENABLED } from '../config/config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logger = (title: string, ...arg: any): void => {
  if (IS_LOGGING_ENABLED) {
    // eslint-disable-next-line no-console
    console.log(`LOG: ${title}:`, ...arg);
  }
};
