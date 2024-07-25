import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="home-grid">
            <div className="container">
                <img 
                    src={item.url} 
                    alt="Placeholder" 
                    height="auto" 
                    width="400px" 
                    style={{ borderRadius: '10px' }} 
                />
            </div>
            <div className="card-grid">
                <h1>{item.title}</h1>
                <h3><em>{item.date}</em></h3>
                <p>{item.explanation}</p>
            </div>
        </div>
    );
}

export default Card;
