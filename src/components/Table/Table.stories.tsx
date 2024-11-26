import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn = (args) => (
  <Table {...args}>
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

export const Default = Template.bind({});
Default.args = {};