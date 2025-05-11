'use client';

import Image from "next/image";

export interface EventCradProp {
  title: string;
  location: string;
  data: string;
  image: string;
  source: string;
  link: string;
  _id: string;
}
export const EventCard = ({
  data,
  onClick,
}: {
  data: EventCradProp;
  onClick: () => void;
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white shadow-xl cursor-pointer hover:scale-102 hover:transition-all hover:duration-300 rounded-lg m-4 w-96 pb-20 pt-0">
        <Image
          src={data.image}
          alt={data.title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <div className="px-4 space-y-2">
          <h2 className="text-xl font-bold mt-2">{data.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-left w-full">
            {data.location}
          </p>
          <p className="text-gray-800 text-left text-sm font-semibold w-full dark:text-gray-200">
            {data.data}
          </p>
          <button
            onClick={onClick}
            className="cursor-pointer mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition duration-300 w-full text-center font-semibold"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </>
  );
};

// _id
// 681fbaba7dbc746c5d6f3e85
// link
// "https://www.eventbrite.com.au/e/2025-sydney-property-expo-may-17-18-fr…"
// __v
// 0
// createdAt
// 2025-05-10T20:44:42.175+00:00
// data
// "Sat, May 17, 10:00 AM"
// image
// "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F420164849…"
// location
// "ICC Sydney Convention & Exhibition Centre Hall 1"
// source
// "Eventbrite"
// title
// "2025 Sydney Property Expo - May 17-18 (FREE ENTRY)"

