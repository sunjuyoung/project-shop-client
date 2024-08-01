import React from "react";

const Footer = () => {
  return (
    <div className="mx-20 my-5 footer">
      <div className="flex justify-around gap-12 top">
        <div className="flex flex-col flex-1 gap-2 text-justify item">
          <h1 className="text-base">Categories</h1>
          <span className="text-sm">Women</span>
          <span className="text-sm">Men</span>
          <span className="text-sm">Shoes</span>
          <span className="text-sm">Accessories</span>
          <span className="text-sm">New Arrivals</span>
        </div>
        <div className="flex flex-col flex-1 gap-2 text-justify item">
          <h1 className="text-base">Links</h1>
          <span className="text-sm">FAQ</span>
          <span className="text-sm">Pages</span>
          <span className="text-sm">Stores</span>
          <span className="text-sm">Compare</span>
          <span className="text-sm">Cookies</span>
        </div>
        <div className="flex flex-col flex-1 gap-2 text-justify item">
          <h1 className="text-base">About</h1>
          <span className="text-sm">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex flex-col flex-1 gap-2 text-justify item">
          <h1 className="text-base">Contact</h1>
          <span className="text-sm">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10 bottom">
        <div className="font-bold left">
          <span className="text-blue-800 logo">SHOP </span>
          <span className="text-xs copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
