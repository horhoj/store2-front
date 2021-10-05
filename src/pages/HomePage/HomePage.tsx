import React from 'react';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import { PageTitle } from '../../components/PageTitle';

export const HomePage: React.FC = () => {
  return (
    <>
      <PageTitle>Домашняя страница</PageTitle>
      <ChapterTitle>
        Это демонстрационный проект, написанный с целью показать уровень
        владения навыками разработки на react.
      </ChapterTitle>
      <ChapterTitle>Исходный код:</ChapterTitle>
      <Typography>
        Backend:&nbsp;
        <Link
          className="text-info"
          href="https://github.com/horhoj/store2-back"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/horhoj/store2-back
        </Link>
      </Typography>

      <Typography>
        Frontend:&nbsp;
        <Link
          className="text-info"
          href="https://github.com/horhoj/store2-front"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/horhoj/store2-front
        </Link>
      </Typography>

      <ChapterTitle>Используемые технологии:</ChapterTitle>
      <Ul>
        <li>react</li>
        <li>redux-toolkit</li>
        <li>redux-saga</li>
        <li>typescript</li>
        <li>yup</li>
        <li>formik</li>
        <li>i18next</li>
        <li>styled-components</li>
        <li>axios</li>
        <li>Material UI</li>
      </Ul>
      <ChapterTitle>Функционал проекта:</ChapterTitle>
      <Ul>
        <li>backend написан на PHP 8 и laravel</li>
        <li>Общение между back и front по API REST</li>
        <li>
          Входящие данные от АПИ валидируются в реальном времени, с помощью
          типов описанных посредством библиотеки yup
        </li>
        <li>
          Описание сущностей выполнено на typescript, который автоматически
          генерируется на основе описаний структур сущностей посредством yup,
          что решает проблему двойного описания сущностей при разработки и их
          валидации в реальном времени
        </li>
        <li>
          Некоторые сложные компоненты разработаны самостоятельно (Например
          DataGrid).
        </li>
        <li>
          Многие компоненты переиспользуются, например DataGrid используется для
          отображения списков категорий и товаров, а CategoryList отображает
          список категорий и на странице категорий и в модальном окне для выбора
          категории в форме редактирования товара.
        </li>
        <li>для управления проектом используется redux-saga.</li>
      </Ul>
    </>
  );
};

const ChapterTitle = styled(Typography)`
  font-size: 120%;
  margin-top: 10px;
  font-style: italic;
`;

const Ul = styled.ul`
  list-style: symbols();
  & > li {
    margin-left: 30px;
  }
`;
