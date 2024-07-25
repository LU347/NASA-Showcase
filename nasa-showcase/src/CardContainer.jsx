import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('API Key:', import.meta.env.VITE_API_KEY);
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])
  
    return (
        <div class="home-grid">
            { data && <Card item={data}/>}
        </div>
    )
}

export default CardContainer