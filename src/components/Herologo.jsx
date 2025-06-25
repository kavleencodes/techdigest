


import { useEffect } from "react";


const Herologo = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const letters = "TechDigest".split("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <h1 className="text-5xl md:text-6xl font-bold flex items-center space-x-3">
        <span
          className="text-6xl font-bold animate-flicker"
          style={{ color: 'var(--accent)' }}
        >
          &lt;/&gt;
        </span>
        <div className="flex space-x-1">
  {letters.map((char, index) => (
    <span
      key={index}
      className={`letter-animation delay-${index}`}
      style={{
        color: index < 4 ? 'var(--text)' : 'var(--highlight)'
      }}
    >
      {char}
    </span>
  ))}
</div>

      </h1>
    </div>
  );
};

export default Herologo;


