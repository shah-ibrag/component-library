import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

test('renders Table', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
  expect(screen.getByText('Header 1')).toBeVisible();
  expect(screen.getByText('Footer 2')).toBeVisible();
});