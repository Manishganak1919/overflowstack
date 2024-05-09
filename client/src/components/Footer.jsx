import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const CustomFooter = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-teal-500 via-white to-[#0EA89B] rounded-md text-black">
                School
              </span>{" "}
              Logo
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://rococo-marigold-5064fc.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my pofile
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  projects
                </Footer.Link>
                <Footer.Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  careers
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Manishganak1919"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git hub
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/manish.in2002/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/manish-kumar-689905213/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Open minds Patna"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/manish.in2002/?hl=en"
              icon={FiInstagram}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/manish-kumar-689905213/"
              icon={FaLinkedin}
            />
            <Footer.Icon
              href="https://github.com/Manishganak1919"
              icon={FaSquareGithub}
            />
            <Footer.Icon
              href="https://twitter.com/ManishGanak"
              icon={FaXTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
