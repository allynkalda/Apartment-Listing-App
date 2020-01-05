import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function Navbar({ clickHandler }) {

  // <input type="text" placeholder="Barcelona"></input>
  // <Button variant="contained" color="primary">Search</Button>

  return (
    <div className="navbar">
      <span>Filtros</span>
      <Button onClick={() => clickHandler()}>
        <ArrowDropUpIcon />
      </Button>
    </div>
  )
}
