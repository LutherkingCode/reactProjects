import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../core.css'; // Import your CSS file for styling if needed

function Core() {
  function generateShortUrl() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const length = 6;
    let shortUrl = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortUrl += characters[randomIndex];
    }

    return `http://bit.ly/${shortUrl}`;
  }

  const [listUrls, setListUrls] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLongUrl = event.target.longUrl.value;
    const newShortUrl = generateShortUrl();

    const newLink = {
      longUrl: newLongUrl,
      shortUrl: newShortUrl,
    };

    setListUrls([...listUrls, newLink]);
  };

  return (
    <div className="core-container">
      <h1>GET YOUR URL SHORT WITH ONE CLICK</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='longUrl'>Paste your URL to receive a short one</label><br />
        <input name="longUrl" type="text" />
        <br />
        <button type='submit'>SEND URL</button>
      </form>

      {listUrls.length > 0 && (
        <div className="saved-urls">
          <h2>Here your short url:</h2>
          <ul>
            {listUrls.map((url, index) => (
              <li key={index}>
                <Link to={url.longUrl}>
                  {url.shortUrl}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Core;
