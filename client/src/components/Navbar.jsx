import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Navbar({ clickHandler }) {

  const [ toggleArrow, setToggleArrow ] = useState(false);

  return (
    <div className="navbar">
      <span>Filtros</span>
      <Button onClick={() => { clickHandler(); 
                              setToggleArrow(!toggleArrow)} }>
      { !toggleArrow ? <ArrowDropUpIcon/> : <ArrowDropDownIcon /> }
      </Button>
    </div>
  )
}
