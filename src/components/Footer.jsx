import "./Footer.css";
import company_logo from "../assets/scode_logo.png";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="w-100% h-20% bg-blue">
        <div className="xl:flex">
          <section className="xl:mt-15 xl:ml-20">
            <img src={company_logo} alt="Company_logo" className="w-50 h-45" />
            {/* Application Download Buttons */}
            <section className="text-white flex justify-evenly md:justify-start">
              <div className="flex items-center border-2 rounded-2xl p-2 md:ml-6 md:mr-12 hover:bg-gray-900 hover:opacity-75 hover:cursor-pointer md:p-2">
                  <FaApple className="w-5 h-5"/>
                <span className="ml-2">
                <span className="font-bold text-[10px]">Download on the</span>
                <br />
                <span className="font-bold text-[18px]">App Store</span>
                </span> 
              </div>
              <div className="flex items-center border-2 rounded-2xl p-2 hover:bg-gray-900 hover:opacity-75 hover:cursor-pointer">
                <BsAndroid2 className="w-5 h-5"/>
                <span className="ml-2">
                <span className="font-bold text-[10px]">Download on the</span>
                <br />
                <span className="font-bold text-[18px]">Google Play</span>
                </span>
              </div>  
                
            </section>
            {/* Social Links.. */}
            <section>
              <ul className="flex justify-normal mt-7 md:justify-normal">
                <li className="text-white bg-slate-400 p-3 rounded-full ml-9 md:ml-10 md:p-5 transition delay-150 duration-400 ease-in-out hover:-translate-y-2 hover:scale-105">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="text-white bg-slate-400 p-3 rounded-full ml-9 md:ml-10 md:p-5 transition delay-150 duration-400 ease-in-out hover:-translate-y-2 hover:scale-105">
                  <a href="#" className="text-white ">
                    <FaInstagram />
                  </a>
                </li>
                <li className="text-white bg-slate-400 p-3 rounded-full ml-9 md:ml-10 md:p-5 transition delay-150 duration-400 ease-in-out hover:-translate-y-2 hover:scale-105">
                  <a href="#" className="text-white ">
                    <GrLinkedinOption />
                  </a>
                </li>
                <li className="text-white bg-slate-400 p-3 rounded-full ml-9 md:ml-10 md:p-5 transition delay-150 duration-400 ease-in-out hover:-translate-y-2 hover:scale-105">
                  <a href="#" className="text-white ">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </section>
          </section>

          <section className="text-white md:grid grid-cols-2  lg:grid grid-cols-3 xl:grid-cols-4 xl:mt-15 xl:ml-50">
            <ul className="ml-5">
              <li className="gap">
                <a href="#">Career by places</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in India</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Mumbai</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Bangalore</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Pune</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Delhi</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Hyderabad</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Career in Chennai</a>
              </li>
            </ul>
            <ul className="ml-5">
              <li className="gap">
                <a href="#">Career by roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">UX/UI Design roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Marketing roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Sales roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Human Resource roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Development & IT roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Content writing roles</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Finance & Legal roles</a>
              </li>
            </ul>
            <ul className="ml-5">
              <li className="gap">
                <a href="#">About</a>
              </li>
              <li className="color-change md:change">
                <a href="#">About us</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Beep for Employers</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Privacy-Policy</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Terms</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Deactivate Account</a>
              </li>
            </ul>
            <ul className="ml-5 lg:block">
              <li className="gap">
                <a href="#">Resources</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Blogs</a>
              </li>
              <li className="color-change md:change">
                <a href="#">Contact Us</a>
              </li>
              <li className="color-change md:change">
                <a href="">Our Community</a>
              </li>
            </ul>
          </section>
        </div>
        <section>
          <hr className="my-20 w-70 mx-auto opacity-15 md:w-2xl md:ml-10 text-gray-400 lg:w-4xl xl:w-7xl" />
          <div className="flex justify-center md:justify-normal md:ml-10 lg:justify-normal lg:ml-10 xl:justify-normal xl:ml-10 ">
            <AiTwotoneCopyrightCircle className="mt-1" />
            <p className="mb-15 text-white">2024 Scode. All rights Reserved.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;