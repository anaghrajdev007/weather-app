import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Provide a default value for `suggestions` to ensure it's always an array
const SearchBar = ({ suggestions = [], onSearch }) => (
  <Autocomplete
    freeSolo
    options={suggestions.map((option) => option.name)} // Now safe to use `.map()`
    renderInput={(params) => (
      <TextField {...params} label="Search city" variant="outlined" />
    )}
    onInputChange={(_, value) => onSearch(value)}
  />
);

export default SearchBar;
