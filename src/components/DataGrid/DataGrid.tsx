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
          />
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <DataGridRow key={row.id} row={row} fields={fields} />
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
