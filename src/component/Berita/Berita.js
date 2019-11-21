import React from 'react';
import './Berita.css';

const Berita = ({title,pubDate,link,thumbnail,description}) => {
  
    return (
      <div className="Berita">
        <div>
            <img src={thumbnail} alt={description}/>
        </div>    
        <div className="info">
            <p>{title}</p>
            <p>{pubDate}</p>
            <a href={link}>{link}</a>
        </div>
      </div>
    );
  }

export default Berita;
