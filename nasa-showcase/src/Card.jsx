import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="container">
            <div className="card-container">
                {item.media_type === 'video' ? (
                    <iframe src={item.url} title={item.title} height="400px" width="75%"></iframe>
                ) : (
                    <img 
                        src={item.url} 
                        alt="APOD Image" 
                        height="auto" 
                        width="400px" 
                        style={{ borderRadius: '10px' }} 
                    />
                )}
                <h1>{item.title}</h1>
                <h3><em>{item.date}</em></h3>
                <p>{item.explanation}</p>
            </div>
        </div>
    );
}

export default Card;
