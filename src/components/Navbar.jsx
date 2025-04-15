import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../styles/Navbar.css'

function Navbar({onSearch}) {

    const [searchCity, setSearchCity] = useState('')

    const handleSearchClick = () => {
        if(searchCity.trim().length == '') return
        onSearch(searchCity)
    }
  return (
    <nav className='navbar'>
        <div className='search-bar' >
            <TextField id="search-city-input"
            placeholder="Search City" 
            variant="outlined" 
            size="small"
            style={{width: '14rem', color: 'white', border: '1px solid white', borderRadius: '5px'}}
            sx= {{
                '& .MuiInputBase-input': {
                    paddingLeft: '50px',
                    color: 'white'
                }
            }}
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            />
            <SearchOutlinedIcon 
            variant="outlined"
            className='search-icon' 
            fontSize='small'
            onClick={handleSearchClick}
            />
        </div>
    </nav>
  )
}

export default Navbar