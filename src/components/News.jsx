import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'YOUR_API_KEY_HERE';
        const url = `https://api.coindesk.com/v1/coindesk/news`;
        const response = await fetch(url, {
          headers: {
            'X-CoinDesk-API-Key': apiKey,
          },
        });
        const data = await response.json();
        setNews(data.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>CoinDesk News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {News};