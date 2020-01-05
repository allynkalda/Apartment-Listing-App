import React from 'react';
import Button from '@material-ui/core/Button';
// import ToggleButton from '@material-ui/lab/ToggleButton';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Barcelona"></input>
      <Button variant="contained" color="primary">Search</Button>
      <span>Filtros</span>
      <Button >
        <ArrowDropUpIcon />
      </Button>
    </div>
  )
}
