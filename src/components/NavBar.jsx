import { SOCIAL_NETWORK } from "../constant/index.js";

const NavBar = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[90%] max-w-4xl glass rounded-2xl px-6 py-3 flex justify-between items-center">
      <a href="/" className="font-bold text-xl tracking-widest">
        &lt;/&gt;
      </a>

      <div className="flex gap-6 text-2xl">
        {SOCIAL_NETWORK.map((Social, i) => (
          <a
            key={i}
            href={Social.url}
            className="hover:text-indigo-400 transition-transform hover:scale-110"
          >
            <Social.icon  title={Social.name} />
          </a>
        ))}
      </div>
    </header>
  );
};


export default NavBar;
