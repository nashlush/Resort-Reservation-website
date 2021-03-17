import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Error = () => {
  return (
    <Hero>
      <Banner
        title="Error 404!"
        subtitle="Sorry! We cannot find the page you were looking for!"
      >
        <Link to="/" className="btn-primary">
          Return to Home Page
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
