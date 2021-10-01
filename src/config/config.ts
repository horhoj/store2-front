export const DEFAULT_SIGN_IN_EMAIL = 'xman@mail.ru';
export const DEFAULT_SIGN_IN_PASSWORD = 'p@ssw0rd';

export const IS_LOGGING_ENABLED = true;

export const API_URL = 'http://192.168.0.55:8080/api/v1';
// export const API_URL = 'http://localhost:8080/api/v1';

export const DEFAULT_REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const ACCESS_TOKEN_LS_KEY = 'ACCESS_TOKEN_LS_KEY';

export const isStrictMode = false;

export const DEFAULT_DEBOUNCED_INPUT_DELAY = 600;

export const NEW_ENTITY_ITEM_ID = 'new';

export const LEFT_MENU_WIDTH = 300;

export const DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES = [
  5, 10, 25, 50, 999,
] as const;

export const DEFAULT_ENTITY_LIST_PER_PAGE: typeof DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES[number] = 5;

export const MODAL_TRANSITION_DURATION = 500;
