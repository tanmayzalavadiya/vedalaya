import React from "react";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import phone from '../images/phone.png';

export default function Footer() {
  return (
    <div className="bg-[#111827] w-full">
      <footer>
        <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-wrap justify-between space-y-8 sm:space-y-0">
          {/* div1 */}
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8">
            <p className="text-gray-400 text-justify">
              Our Ayurveda Heritage has given us numerous solutions to complex problems through herbs and lifestyle changes.
            </p>
          </div>

          {/* div2 */}
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8">
            <h1 className="text-white mb-4 font-bold">Categories</h1>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Migraine & Headaches</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Daily Wellness</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Male Wellness</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Women's Health</a>
              </li>
            </ul>
          </div>

          {/* div3 */}
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8">
            <h1 className="text-white mb-4 font-bold">Policies</h1>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Refund</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">T&C</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Delivery</a>
              </li>
            </ul>
          </div>

          {/* div4 */}
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8">
            <h1 className="text-white mb-4 font-bold">Useful Links</h1>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">Amazon Store</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white transition-colors" href="/">1mg Store</a>
              </li>
            </ul>
          </div>

          {/* div5 */}
          <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-8">
            <h1 className="text-white mb-4 font-bold">Contact Us</h1>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <a href="/">
                  <img src="" alt="" className="mr-2" />
                </a>
                <a className="text-gray-400 hover:text-white transition-colors" href="mailto:tanmayzalavadiya82@gmail.com">
                  tanmayzalavadiya82@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="/">
                  <img src={phone} alt="" className="mr-2" />
                </a>
                <a className="text-gray-400 hover:text-white transition-colors" href="tel:+918200150197">
                  +91 8200150197
                </a>
              </li>
            </ul>

            <div className="flex mt-6 space-x-4">
              <a href="/" className="hover:text-white">
                <img src={facebook} alt="Icon 1" />
              </a>
              <a href="/" className="hover:text-white">
                <img src={instagram} alt="Icon 2" />
              </a>
              <a href="/" className="hover:text-white">
                <img src={youtube} alt="Icon 3" />
              </a>
              <a href="/" className="hover:text-white">
                <img src={twitter} alt="Icon 4" />
              </a>
            </div>
          </div>
        </div>

        {/* footer end */}
        <div className="bg-[#1b2433] bg-opacity-75 py-4">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            {/* Copyright Text */}
            <p className="text-gray-400 text-sm text-center sm:text-left mb-2 sm:mb-0">
              Copyright © 2023
            </p>

            {/* Spacer or Additional Element */}
            <span className="hidden"></span>

            {/* Designed By */}
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Redesigned by Tanmay
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
