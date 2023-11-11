import { useState } from 'react';
import './searchBar.css';

export default function SearchBar(){
    const [searchMessage, setSearchMessage] = useState('');

    function handleSearchChange(e) {
        e.preventDefault();
        setSearchMessage(e.target.value);
    }

    return(
        <div className='search'>
            <input 
                type='search'
                placeholder='Search'
                value={searchMessage}
                onChange={handleSearchChange}
                    />
            
        </div>
    )
}