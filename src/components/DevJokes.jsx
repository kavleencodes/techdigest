// src/components/DevJokes.jsx
import React, { useState, useEffect } from "react";

const DevJokes = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = () => {
    setLoading(true);
    fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist"
    )
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching joke:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading) return <p className="text-center text-[var(--muted)]">Loading joke...</p>;

  return (
    <section className="py-12 px-6 bg-[var(--bg)] text-[var(--text)] text-center">
      <h2 className="text-3xl font-bold mb-6">😂 Dev Jokes</h2>

      {joke.type === "single" ? (
        <p className="text-xl italic">{joke.joke}</p>
      ) : (
        <>
          <p className="text-xl font-medium">{joke.setup}</p>
          <p className="mt-4 text-lg">{joke.delivery}</p>
        </>
      )}

      <button
        onClick={fetchJoke}
        className="mt-8 px-6 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-opacity-90 transition"
      >
        Get Another
      </button>
    </section>
  );
};

export default DevJokes;
