import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="md:px-24 p-4 bg-primary text-center text-white">
        Facebook Video and Reel Download for Free @ 2023 - Designed with {" "}
        <span className="text-red-500">❤</span>{" "} by {" "}
        <Link href="https://github.com/doiayokanmi" className="underline">
          Ibrahim Damilola
        </Link>
      </section>
    </>
  );
};

export default Footer;
