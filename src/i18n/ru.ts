import { en } from './en';

export const ru: typeof en = {
  test: 'ТЕСТ',
  //nav-link
  'nav-link__home': 'Главная',
  'nav-link__product-list': 'Список товаров',
  'nav-link__category-list': 'Список категорий',
  //app__user
  'app__user__user-id': 'ИД',
  'app__user__user-email': 'Почта',
  'app__user__user-name': 'Имя',
  'app__user__user-logout-btn': 'Выйти',
  //app__footer
  'app__footer__copyright-msg1': 'Авторское право © {{year}} cool29horhoj.',
  'app__footer__copyright-msg2': 'Все права защищены.',
  //requestErrorView
  'app__request-error-view__title': 'Ошибка выполнения запроса',
  'app__request-error-view__error__invalid-credentials':
    'Неверные учетные данные',
  'app__request-error-view__error__failed-to-get-a-response-from-the-server':
    'Ошибка получения ответа от сервера',
  'app__request-error-view__error__unknown-error-with-code':
    'Неизвестная ошибка с кодом {{code}}',
  'app__request-error-view__error__resource-not-found': 'Ресурс не существует',
  // ActionRowPanelDefault
  'component__action-row-panel-default__delete-request-message': 'Удалить ?',
  //validation
  validation__min_x_symbol: 'минимум {{x}} символов',
  validation__max_x_symbol: 'максимум {{x}} символов',
  validation__required: 'обязательно для заполнения',
  validation__email: 'не почта',
  //sign-in
  'page__sign-in__page-title': 'Вход',
  'page__sign-in__form-label__email': 'Почта',
  'page__sign-in__form-label__password': 'Пароль',
  'page__sign-in__form-label__submit-btn': 'ВОЙТИ',
  //productListForm
  'features__product-list-form__data-grid-column__id': 'ИД',
  'features__product-list-form__data-grid-column__title': 'Наименование',
  'features__product-list-form__data-grid-column__description': 'Описание',
  'features__product-list-form__data-grid-column__options': 'Опции',
  'features__product-list-form__search-placeholder': 'найти',
  'features__product-list-form__action-column-title': 'Действия',
  'features__product-list-form__page-title': 'Список товаров',
  'features__product-list-form__search-not-found-msg': 'Ничего не найдено',
  //productForm
  'features__product-form__input-label-title': 'Наименование',
  'features__product-form__input-label-description': 'Описание',
  'features__product-form__input-label-options': 'Опции',
  'features__product-form__button-title-save': 'Сохранить',
  'features__product-form__button-title-previous': 'Назад',
  'features__product-form__page-edit-title':
    'Редактируется товар с ИД="{{id}}"',
  'features__product-form__page-new-title': 'Добавить новый товар',
  'features__product-form__category-list-subform__action-column-title':
    'Действия',
  'features__product-form__category-list-subform__search-placeholder': 'Найти',
  'features__product-form__category-list-subform__search-not-found-msg':
    'Ничего не найдено',
  'features__product-form__category-list-subform__category-subform-title':
    'Категории, к которым принадлежит этот продукт',
  'features__product-form__category-list-subform__category-subform__msg__category_already-been-selected':
    'Данная категория уже выбрана',

  //categoryListForm
  'features__category-list-form__page-title': 'Список категорий',
  'features__category-list-form__data-grid-column__id': 'ИД',
  'features__category-list-form__data-grid-column__title': 'Наименование',
  'features__category-list-form__data-grid-column__description': 'Описание',
  'features__category-list-form__search-placeholder': 'найти',
  'features__category-list-form__action-column-title': 'Действия',
  'features__category-list-form__search-not-found-msg': 'Ничего не найдено',
  //categoryForm
  'features__category-form__input-label-title': 'Наименование',
  'features__category-form__input-label-description': 'Описание',
  'features__category-form__input-label-options': 'Опции',
  'features__category-form__button-title-save': 'Сохранить',
  'features__category-form__button-title-previous': 'Назад',
  'features__category-form__page-edit-title':
    'Редактируется категория с ИД="{{id}}"',
  'features__category-form__page-new-title': 'Добавить новую категорию',
};
