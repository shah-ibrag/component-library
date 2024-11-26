import React from 'react';
import { TableProps, TableHeaderProps, TableRowProps, TableCellProps, TableFooterProps } from './Table.types';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTableCell = styled.td`
  padding: 8px;
  text-align: left;
`;

const StyledTableFooter = styled.tfoot`
  background-color: #f5f5f5;
`;

export const Table: React.FC<TableProps> = ({ children }) => <StyledTable>{children}</StyledTable>;
export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => <StyledTableHeader>{children}</StyledTableHeader>;
export const TableRow: React.FC<TableRowProps> = ({ children }) => <StyledTableRow>{children}</StyledTableRow>;
export const TableCell: React.FC<TableCellProps> = ({ children }) => <StyledTableCell>{children}</StyledTableCell>;
export const TableFooter: React.FC<TableFooterProps> = ({ children }) => <StyledTableFooter>{children}</StyledTableFooter>;