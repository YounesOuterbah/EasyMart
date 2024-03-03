import React from "react";

export default function About() {
  return (
    <div className="container py-2">
      <h2 className="text-2xl font-bold">About Us!</h2>
      <h3 style={{ textAlign: "center" }}>
        Welcome To <span id="W_Name1">groceyish</span>
      </h3>
      <p>
        <span id="W_Name2">groceyish</span> is a Professional <span id="W_Type1">eCommerce</span>{" "}
        Platform. Here we will provide you only interesting content, which you will like very much.
        We're dedicated to providing you the best of <span id="W_Type2">eCommerce</span>, with a
        focus on dependability and <span id="W_Spec">Online buying</span>. We're working to turn our
        passion for <span id="W_Type3">eCommerce</span> into a booming{" "}
        <a
          href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html"
          rel="do-follow"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          online website
        </a>
        . We hope you enjoy our <span id="W_Type4">eCommerce</span> as much as we enjoy offering
        them to you.
      </p>
      <p>
        I will keep posting more important posts on my Website for all of you. Please give your
        support and love.
      </p>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        Thanks For Visiting Our Site
        <br />
        <br />
        <span style={{ color: "blue", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
          Have a nice day!
        </span>
      </p>
    </div>
  );
}
