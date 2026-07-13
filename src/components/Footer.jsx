import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 py-10 mt-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-cc-text font-bold">
            <span className="text-cc-pink">C</span>andymations{" "}
            <span className="text-cc-pink">.</span>
          </p>
          <p className="font-body text-xs text-cc-muted mt-1">
            Built by Abdul Ahad
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Krimzonn/Candymations"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-cc-text hover:text-cc-pink transition-colors"
          >
            GitHub
          </a>
          <Link
            to="/library"
            className="bg-cc-pink hover:bg-cc-pink-hover text-white font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Explore the Library
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
