import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeEventCarousel.css";

import { Navigation, Pagination } from "swiper/modules";
import TeamCards from "../TeamCards/TeamCrads";
import HomeEventCard from "../EventsCards/HomeEventCard";

function HomeEventCarousel() {
  return (
    <div className="w-full relative">
      <div className="cursor-pointer font-medium carousel-previous-container rounded-full absolute -left-6 text-black text-center bg-[#ffb76e] top-1/2 -translate-y-1/2 font-poppins leading-10 text-2xl shadow-md w-10 h-10 z-10">
        &lt;
      </div>
      <div className="cursor-pointer font-medium carousel-next-container rounded-full absolute -right-6 text-black text-center bg-[#ffb76e] top-1/2 -translate-y-1/2 font-poppins leading-10 text-2xl shadow-md w-10 h-10 z-10">
        &gt;
      </div>
      <div className="w-full">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".carousel-next-container",
            prevEl: ".carousel-previous-container",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper pb-12"
        >
          {events.map((event) => (
            <SwiperSlide className="flex justify-center">
              <HomeEventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeEventCarousel;
const events = [
  {
    title: "Ballot Brilliance",
    image: "/assets/carouseLImg/CaImg4.jpg",
    location: "D.A.V. High School, Tasra",
    date: "25 Apr, 2024",
    breif:
      "LiGHT Sindri organized the Ballot Brilliance event at D.A.V. Tasra, which included an essay competition and quiz to raise awareness regarding the importance of voting among students.",
  },
  {
    title: "Bacchon ki holi",
    image: "/assets/events/preholi.jpg",
    location: "Hindu mission orphanage, Dhanbad",
    instaLink:
      "https://www.instagram.com/p/C4zveXev72N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "19 Mar, 2024",
    breif:
      "LiGHT Sindri team hosted a Pre-Holi Celebration, bringing happiness to the Hindu Mission Orphanage. With presents, activities, and vibrant celebrations, we disperse joy and warm the hearts of the kids.",
  },
  {
    title: "Anubhuti",
    image: "/assets/events/anubhuti.jpg",
    location: "Saraswati Vidya Mandir, Dhanbad",
    instaLink:
      "https://www.instagram.com/reel/CzlpoZUuHoG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "06 Nov, 2023",
    breif:
      "Good Touch and Bad Touch was a crucial issue that was covered in ANUBHUTI, an educational seminar by LiGHT Sindri on November 6th at Saraswati Vidya Mandir, Sindri. The program included lively talks, animations, and quizzes.",
  },
  {
    title: "Umang'23",
    image: "/assets/carouseLImg/CaImg2.jpg",
    location: "Online",
    instaLink:
      "https://www.instagram.com/p/CnbR_rkg1JE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "17-26 Jan, 2023",
    breif:
      "The cultural event was organized by NGO LiGHT SINDRI and included the following sub-events: Kalakriti, Kavya, Nagma, and Kissa. Participants displayed their emotions, inventiveness, musicality, and narrative skills.",
  },
  {
    title: "Old Age Home Visit",
    image: "/assets/events/old-age-home.jpg",
    location: "Ramashram old age home, Govindpur",
    instaLink:
      "https://www.instagram.com/reel/Cz3c1Gqve0W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "08 Nov, 2023",
    breif:
      "LiGHT Sindri went to an old age home in Dhanbad, where she sang Chhath songs, gave sweets and blankets to the senior citizens, and celebrated pre-Diwali with them.",
  },
  {
    title: "Satarkata",
    image: "/assets/events/satarkta.jpg",
    location: "Online",
    instaLink:
      "https://www.instagram.com/p/C1WG30Rv-fT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "28 Dec 2023 - 9 Jan 2024",
    breif:
      "SATARKTA was an online event hosted by NGO Light where participants submitted their ideas related to social concerns. It promoted social consciousness and problem-solving.",
  },
  {
    title: "Unnati",
    image: "/assets/events/unnati.jpg",
    location: "D.A.V. High School, Tasra",
    instaLink:
      "https://www.instagram.com/reel/Cmnc_uyqTup/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    date: "26 Dec, 2022",
    breif:
      "Under the first phase of UNNATI, Upliftment of DAV School Tasra was done by providing it with basic facilities.",
  },
];
