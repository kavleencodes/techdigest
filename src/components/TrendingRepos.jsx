import React, { useState, useEffect } from "react";

const TrendingRepos = ({ language = "", since = "daily" }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = `https://github-trending-api.now.sh/repositories?since=${since}${language ? `&language=${language}` : ""}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching trending repos:", err);
        setLoading(false);
      });
  }, [language, since]);

  return (
    <section className="py-12 px-6 bg-[var(--bg)] text-[var(--text)]">
      <h2 className="text-3xl font-bold mb-8 text-center">🔥 Trending GitHub Repos</h2>

      {loading ? (
        <p className="text-center text-[var(--muted)]">Loading...</p>
      ) : repos.length === 0 ? (
        <p className="text-center text-[var(--muted)]">No trending repositories found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--card-bg)] shadow-md rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">
                {r.author}/{r.name}
              </h3>
              {r.description && (
                <p className="text-[var(--muted)] mb-4">{r.description}</p>
              )}
              <div className="flex items-center justify-between text-sm text-[var(--accent)]">
                <span>⭐ {r.stars.toLocaleString()}</span>
                <span className="bg-[var(--highlight)] text-black py-1 px-2 rounded-full">
                  {r.language || "Unknown"}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default TrendingRepos;
