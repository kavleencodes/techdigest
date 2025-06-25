// src/components/TrendingNews.jsx
import { useState, useEffect } from "react";

const TrendingNews = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNews = async (pageNum) => {
    const res = await fetch(`https://dev.to/api/articles?per_page=9&page=${pageNum}`);
    const data = await res.json();
    console.log(data)
    if (pageNum === 1) setArticles(data);
    else setArticles(prev => [...prev, ...data]);
  };

  


  useEffect(() => {
    fetchNews(page);
  }, [page]);

  return (
    <section className="py-12 px-6 bg-[var(--bg)] text-[var(--text)]">
      <h2 className="text-3xl font-bold mb-8 text-center">🔥 Trending Tech News</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((news, i) => (
          <a key={i} href={news.url} target="_blank" rel="noreferrer"
             className="bg-[var(--card-bg)] shadow-md rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className="text-[var(--muted)] mb-4">{news.description}</p>
            <p className="text-sm text-[var(--accent)] font-medium">
              DEV.to
            </p>
          </a>
        ))}
      </div>
      {articles.length % 9 === 0 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="px-6 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingNews;
