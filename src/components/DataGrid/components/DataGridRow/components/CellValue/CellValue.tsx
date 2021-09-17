import React from 'react';
import styled from 'styled-components';
import { Theme } from '@material-ui/core';
import { CellValueProps } from './types';

export const CellValue: React.FC<CellValueProps> = ({ value, searchStr }) => {
  //если значение ячейки не задано
  if (value === null) {
    return <></>;
  }
  //если строка поиска не задана то возвращаем value
  if (searchStr === '') {
    return <>{value}</>;
  }
  const regexp = new RegExp(searchStr, 'ig');

  // const ms = String(value).split(searchStr);
  const ms = String(value).match(regexp);
  const slices = String(value).split(regexp);

  //если value не содержит в себе подстрок со значением searchStr
  //то возвращаем исходное значение
  if (!ms) {
    return <>{value}</>;
  }

  return (
    <>
      {slices.map((item, index) => (
        <span key={index}>
          {item}
          {index < slices.length - 1 ? (
            <SearchStrWrap>{ms[index]}</SearchStrWrap>
          ) : null}
        </span>
      ))}
    </>
  );
};

const SearchStrWrap = styled.span`
  background-color: ${({ theme }) => {
    return (theme as Theme).palette.primary.main;
  }};
  color: white;
  border-radius: 3px;
  padding: 3px;
`;
