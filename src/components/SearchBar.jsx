import React, { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';



const SearchBar = () => {
    const [query, setQuery] = useState("");
    // const items = ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'pineapple', 'grapefruit', 'melon', 'watermelon', 'grape']
    const { phoneBook } = usePhoneBookStore();

    const filteredItems = phoneBook.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.phoneNumber.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder='입력하세요' value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => <li className='search-list' key={index}>{item.name} - {item.phoneNumber}</li>)
                ) : (
                    <li className='search-list'>검색 결과가 없습니다.</li>
                )}
            </ul>
        </div>
    )
}

export default SearchBar;