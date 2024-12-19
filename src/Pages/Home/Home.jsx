import React from "react";
import Header from "../../components/Header/Header";
import HeroImg from "../../assets/Background Image.png";
import Typography from "@mui/material/Typography";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Container from "@mui/material/Container";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CityImg1 from "../../assets/Islamabad.webp";
import CityImg2 from "../../assets/Karachi.webp";
import CityImg3 from "../../assets/Lahore.webp";
import CityImg4 from "../../assets/Faisalabad.webp";
import CityImg5 from "../../assets/Rawalpindi.webp";
import CityImg6 from "../../assets/Abottabad.webp";
import CityImg7 from "../../assets/Bahawalpur.jpg";
import CityImg8 from "../../assets/DeraGhaziKhan.jpg";
import CityImg9 from "../../assets/Gujranwala.jpg";
import CityImg10 from "../../assets/Gujrat.jpg";
import CityImg11 from "../../assets/Hyderabad.jpg";
import CityImg12 from "../../assets/Jhelum.jpg";
import CityImg13 from "../../assets/Kamoke.jpg";
import CityImg14 from "../../assets/Larkana.jpg";
import CityImg15 from "../../assets/city-tile-Mangla.jpg";
import CityImg16 from "../../assets/Mardan.jpg";
import CityImg17 from "../../assets/Multan.jpg";
import CityImg18 from "../../assets/Murree.jpg";
import CityImg19 from "../../assets/Okara.jpg";
import CityImg20 from "../../assets/PanoAqil.jpg";
import CityImg21 from "../../assets/Peshawar.jpg";
import CityImg22 from "../../assets/Quetta.jpg";
import CityImg23 from "../../assets/RahimYarKhan.jpg";
import CityImg24 from "../../assets/Sadiqabad.jpg";
import CityImg25 from "../../assets/Sahiwal.jpg";
import CityImg26 from "../../assets/Sargodha.jpg";
import CityImg27 from "../../assets/Sheikhupura.jpg";
import CityImg28 from "../../assets/Sialkot.jpg";
import CityImg29 from "../../assets/Sukkur.jpg";
import CityImg30 from "../../assets/WahhCannt.jpg";
import { useNavigate } from "react-router-dom";
import IosApp from "../../assets/appstore.png";
import AppGallery from "../../assets/appgallery.png";
import GoogleApp from "../../assets/googleplaystore.png";
import MobileImg from "../../assets/mobile.webp";
import QRImg from "../../assets/qr.png";

const Home = () => {
  const navigate = useNavigate();
  const citiesData = [
    { name: "Islamabad", image: CityImg1 },
    { name: "Karachi", image: CityImg2 },
    { name: "Lahore", image: CityImg3 },
    { name: "Faisalabad", image: CityImg4 },
    { name: "Rawalpindi", image: CityImg5 },
    { name: "Abbottabad", image: CityImg6 },
    { name: "Bahawalpur", image: CityImg7 },
    { name: "Dera Ghazi Khan", image: CityImg8 },
    { name: "Gujranwala", image: CityImg9 },
    { name: "Gujrat", image: CityImg10 },
    { name: "Hyderabad", image: CityImg11 },
    { name: "Jhelum", image: CityImg12 },
    { name: "Kamoke", image: CityImg13 },
    { name: "Larkana", image: CityImg14 },
    { name: "Mangla", image: CityImg15 },
    { name: "Mardan", image: CityImg16 },
    { name: "Multan", image: CityImg17 },
    { name: "Murree", image: CityImg18 },
    { name: "Okara", image: CityImg19 },
    { name: "Pano Aqil", image: CityImg20 },
    { name: "Peshawar", image: CityImg21 },
    { name: "Quetta", image: CityImg22 },
    { name: "Rahim Yar Khan", image: CityImg23 },
    { name: "Sadiqabad", image: CityImg24 },
    { name: "Sahiwal", image: CityImg25 },
    { name: "Sargodha", image: CityImg26 },
    { name: "Sheikhupura", image: CityImg27 },
    { name: "Sialkot", image: CityImg28 },
    { name: "Sukkur", image: CityImg29 },
    { name: "Wah Cantt", image: CityImg30 },
  ];
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-neutral-100 relative overflow-hidden w-full">
        <Container maxWidth="xl">
          <section className="max-md:flex max-sm:hidden flex  flex-col md:flex-row items-center justify-between px-8 md:px-16 h-svh">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10">
              <h1 className="text-3xl lg:text-4xl max-sm:text-sm font-bold text-gray-900 leading-tight">
                It’s the food and groceries you love, delivered
              </h1>
              <div className=" mt-6 flex items-center relative border-2 p-4 bg-white rounded-2xl">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Your street and street number"
                  className="w-full py-3 pl-4 pr-24 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {/* Locat Button */}
                <button className="flex  items-center absolute right-32 top-1/2 transform -translate-y-1/2  py-2 px-4 rounded-md  text-pink-900 hover:text-pink-600 transition duration-300">
                  <GpsFixedIcon className="me-1 " />
                  Locate me
                </button>
                {/* Find Food Buton */}
                <button className="ml-4 text-nowrap bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 hover:scale-110 transition duration-300">
                  Find food
                </button>
              </div>
            </div>

            {/* Image Contmnt */}
            <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
              <div className="absolute  md:right-[-70%] -top-64 w-[70%] md:w-[150%] overflow-hidden">
                <img
                  src={HeroImg}
                  alt="Foodpanda Mascot"
                  className="object-cover scal"
                />
              </div>
            </div>
          </section>

          <section className="max-sm:flex hidden flex-col justify-center items-center max-sm:px-0 h-svh">
            {/* Text Content */}
            <div className="w-full  text-center  z-10">
              <h1 className="text-3xl lg:text-4xl max-sm:text-md font-bold text-gray-900 leading-tight">
                It’s the food and groceries you love, delivered
              </h1>
              {/* Image Contmnt */}
              <div className="w-full">
                <div className="">
                  <img src={HeroImg} alt="Foodpanda Mascot" className="" />
                </div>
              </div>
            </div>

            <div className=" mt-6  items-center  w-full ">
              {/* Search Input */}
              <div className="flex bg-white w-full border-2 p-4 rounded-2xl mb-3">
                <input
                  type="text"
                  placeholder="Your street and street number"
                  className=" py-3 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            {/* Find Food Buton */}
            <button className="w-full text-nowrap bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600  transition duration-300">
              Find food
            </button>
          </section>
        </Container>
      </div>
      {/* 2nd Section */}
      <div>
        <div className="max-sm:mx-0 mx-16">
          <Container maxWidth="xl">
            <h1 className="max-sm:mt-10 mt-20 max-sm:text-sm mb-5 text-3xl font-bold text-gray-900">
              You prepare the food, we handle the rest
            </h1>
          </Container>
        </div>
        <div className="h-96 bg-img2 w-full bg-center ">
          <div className="px-8 md:px-16 max-sm:px-0">
            <Container maxWidth="xl" className="relative">
              <div className="bg-white w-[630px] max-sm:w-[auto] p-7 max-sm:top-50 rounded-2xl drop-shadow-xl absolute top-52 max-sm:left-0 max-sm:mx-3">
                <h1 className="text-2xl max-sm:text-xs font-semibold my-5">
                  List your restaurant or shop on foodpanda
                </h1>
                <h3 className="max-sm:text-xs">
                  Would you like millions of new customers to enjoy your amazing
                  food and groceries? So would we!
                </h3>
                <h3 className="my-5 max-sm:text-xs">
                  It's simple: we list your menu and product lists online, help
                  you process orders, pick them up, and deliver them to hungry
                  pandas – in a heartbeat!
                </h3>
                <h3 className="my-5 max-sm:text-xs">
                  Interested? Let's start our partnership today!
                </h3>
                <button className="text-nowrap bg-pink-600 text-white max-sm:text-xs py-3 px-4 rounded-lg hover:bg-pink-600 hover:scale-110 transition duration-300">
                  Get Started
                </button>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/* 3rd Section */}
      <div>
        <div className="mx-16 mt-72 max-sm:mt-40 max-sm:mx-0">
          <Container maxWidth="xl">
            <h1 className="mb-5 text-3xl font-bold max-sm:text-sm text-gray-900">
              Find us in these cities and many more!
            </h1>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-6 max-sm:gap-3">
              {citiesData.map((city, index) => (
                <button onClick={() => navigate("/city")}>
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl transition-all"
                  >
                    <img
                      src={city.image}
                      alt={city.name}
                      className="hover:scale-110 aspect-square object-cover  rounded-2xl transition-all duration-300"
                    />
                    <div className="bg-white p-3 absolute bottom-2 left-2 rounded-xl">
                      <h3 className="font-semibold">{city.name}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Container>
        </div>
      </div>
      {/* 4th Section */}
      <div>
        <div className="mx-16 mt-24 max-sm:mx-0 max-sm:mt-0 ">
          <Container maxWidth="xl">
            <h1 className="mt-20 mb-5 text-3xl max-sm:text-sm font-bold text-gray-900">
              Put us in your pocket
            </h1>
            <div className="bg-pink-600 p-6 rounded-xl flex items-center max-sm:items-start relative max-sm:h-96 h-96 h">
              <div className="w-[45%] max-sm:w-full">
                <h1 className="max-sm:text-center max-sm:text-sm text-2xl font-bold text-white">
                  Download the food and groceries you love
                </h1>
                <div className="flex items-center">
                  <div className="p-2 border-2 rounded-lg">
                    <img src={QRImg} className="w-[200px]" alt="" />
                  </div>
                  <p className="max-sm:text-center ms-4 max-sm:text-xs text-white my-5">
                    It's all at your fingertips – the restaurants and shops you
                    love. Find the right food and groceries to suit your mood,
                    and make the first bite last. Go ahead, download us.
                  </p>
                </div>
                <div className="flex ">
                  <button>
                    <img src={IosApp} className="w-28 rounded-lg " alt="" />
                  </button>
                  <button>
                    <img src={GoogleApp} className="w-32 rounded-lg " alt="" />
                  </button>
                  <button>
                    <img src={AppGallery} className="w-28 rounded-lg " alt="" />
                  </button>
                </div>
              </div>
              <div className=" absolute max-sm:top-48 -top-20 right-0 w-[660px] max-sm:w-auto">
                <img src={MobileImg} className="" alt="" />
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* 5th Section */}
      <div>
        <div className="max-sm:mx-0 mx-16">
          <Container maxWidth="xl">
            <h1 className="max-sm:mt-28 mt-20 max-sm:text-sm mb-5 text-3xl font-bold text-gray-900">
              Take your office out to lunch
            </h1>
          </Container>
        </div>
        <div className="h-96 bg-img3 w-full bg-center ">
          <div className="px-8 md:px-16 max-sm:px-0">
            <Container maxWidth="xl" className="relative">
              <div className="bg-white w-[630px] max-sm:w-[auto] p-7 max-sm:top-50 rounded-2xl drop-shadow-xl absolute top-52 max-sm:left-0 max-sm:mx-3" >
                <h1 className="text-2xl max-sm:text-xs font-semibold ">
                  foodpanda for business
                </h1>
                <h3 className="max-sm:text-xs my-5">
                  Order lunch or fuel for work-from-home, late nights in the
                  office, corporate events, client meetings, and much more.
                </h3>
    
                <button className="text-nowrap bg-pink-600 text-white max-sm:text-xs py-3 px-4 rounded-lg hover:bg-pink-600 hover:scale-110 transition duration-300">
                  DISCOVER MORE{" "}
                </button>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/* 6th section */}
    </>
  );
};

export default Home;
