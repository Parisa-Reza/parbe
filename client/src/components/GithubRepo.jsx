import { FaGithub } from "react-icons/fa";
const GithubRepo = () => {
  return (
    <div>
      {/* GitHub Icon */}
      <a
        href="https://github.com/Parisa-Reza/parbe" // your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#670D2F] hover:text-black transition-colors text-2xl"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default GithubRepo;
