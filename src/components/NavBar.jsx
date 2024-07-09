import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SOCIAL_NETWORK } from "../constant/index.js";

const NavBar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 flex items-center justify-between isolate  bg-white/40 shadow-lg ring-1 ring-black/5">
      <div className="flex flex-shrink-0 items-center ml-5">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </a>
      </div>
      <div className="mx-8 my-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href={SOCIAL_NETWORK.linkedin}
          target="_blank"
          className="hover:text-indigo-500"
        >
          <FaLinkedin />
        </a>
        <a
          href={SOCIAL_NETWORK.github}
          target="_blank"
          className="hover:text-indigo-500"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIAL_NETWORK.twitter}
          target="_blank"
          className="hover:text-indigo-500"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
