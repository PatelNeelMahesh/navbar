import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
//useState holds the info we are getting from the API
//useEffect runs that fetch call when our componant mounts

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/products?limit=10'
        );
        
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>{item.id}</h1>
                /*
                <h1>
                    <link to={`/shop/${item}`}>{item.id}</link>    
                </h1>
                */
            ))}
        </div>
    );
}

export default Shop;  