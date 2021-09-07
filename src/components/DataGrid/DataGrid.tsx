import { Table, TableHead, TableBody, Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { DataGridProps } from './types';
import { DataGridRow } from './components/DataGridRow';
import { DataGridHeadRow } from './components/DataGridHeadRow';

export const DataGrid: React.FC<DataGridProps> = ({
  fields,
  rows,
  disabled,
  handleColumnClkCb,
  sortAsc,
  sortField,
  searchStr,
  actionColumnTitle,
  actionRowPanelRender,
}) => {
  const handleColumnHeaderClk = (fieldName: string) => {
    handleColumnClkCb(fieldName);
  };

  return (
    <Wrap>
      <StyledTable>
        <TableHead>
          <DataGridHeadRow
            fields={fields}
            handleColumnHeaderClkCb={handleColumnHeaderClk}
            sortField={sortField}
            sortAsc={sortAsc}
            disabled={disabled}
            actionColumnTitle={actionColumnTitle}
          />
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <DataGridRow
              key={row.id}
              row={row}
              fields={fields}
              searchStr={searchStr}
              actionRowPanelRender={actionRowPanelRender}
            />
          ))}
        </TableBody>
      </StyledTable>
    </Wrap>
  );
};

const Wrap = styled(Box)`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: 600px;
`;
