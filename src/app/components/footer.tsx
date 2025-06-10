import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const iconSize = 24;

  return (
    <footer className="h-min w-full px-[2%] py-4 flex flex-row bg-black text-white items-center">
      <h3 className="text-nowrap pr-4 font-bold text-lg">
        Built by Patrick Zhang
      </h3>
      <div className="mr-10 ml-auto font-extralight grid grid-cols-2 gap-y-2 gap-x-1">
        <FaLinkedin size={iconSize} className="place-self-end" />
        <p className="hover:underline underline-offset-4">
          <a target="_blank" href="https://www.linkedin.com/in/pzhang0742">
            Linkedin
          </a>
        </p>
        <FaGithub size={iconSize} className="place-self-end" />
        <p className="hover:underline underline-offset-4">
          <a target="_blank" href="https://github.com/pzhang8751">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}
