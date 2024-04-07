import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CityTable = ({ cities, onSelectCity }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>City</TableCell>
          <TableCell align="right">Country</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cities.map((city) => (
          <TableRow key={city.name} hover onClick={() => onSelectCity(city)}>
            <TableCell component="th" scope="row">{city.name}</TableCell>
            <TableCell align="right">{city.country}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CityTable;
