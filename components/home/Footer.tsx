"use client";

import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Diyostore</h3>
          <p className="text-sm leading-loose">
            Join us in our mission to connect the world. We aim to create the
            best platform for online marketing and building community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <a
                href="https://peterdiyo.netlify.app/"
                className="hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://peterdiyo.netlify.app/"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://peterdiyo.netlify.app/"
                className="hover:text-white transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://peterdiyo.netlify.app/"
                className="hover:text-white transition-colors"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://peterdiyo.netlify.app/"
                className="hover:text-white transition-colors"
              >
                Guides
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/peter-diyo-a38451289/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/pierep.diyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/PeterDiyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@diyocode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Diyostore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
