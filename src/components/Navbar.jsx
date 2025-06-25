

const Navbar = () => {
  const letters = "TechDigest".split("");

  return (
    <>
      {/* 🎯 Navbar Container with Absolute Links */}
      <div className="relative w-full py-12 bg-[var(--bg)] animate-slideUpFade text-center">
       <br />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair flex items-center space-x-2">
            <span
              className="text-5xl font-bold animate-flicker"
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
                    color: index < 4 ? 'var(--text)' : 'var(--highlight)',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h1>

          {/* 🧾 Tagline */}
          <p className="mt-2 text-sm md:text-base text-white italic tracking-wide font-light font-playfair">
            Built for Devs. Built by Dev.
          </p>
          <p className="mt-2 text-sm md:text-base text-white italic tracking-wide font-light font-playfair">
            One stop for Trending Tech News, Github Repos and Dev Jokes
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;


