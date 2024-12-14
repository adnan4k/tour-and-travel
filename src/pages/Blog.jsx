import React from 'react';

const Blog = () => {
  // Sample data array
  const cardData = [
    {
      id: 1,
      title: "Best View in New York City",
      description: "The city that never sleeps",
      imageUrl: "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
      date: "March 27",
      time: "6 mins ago",
      readTime: "3 mins read"
    },
    {
      id: 2,
      title: "Best Pizza in Town",
      description: "The collection of best pizza images in New York city",
      imageUrl: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
      date: "March 20",
      time: "3 mins ago",
      readTime: "3 mins read"
    },
    {
      id: 3,
      title: "Best Salad Images Ever",
      description: "The collection of best salads of town in pictures",
      imageUrl: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
      date: "April 15",
      time: "6 mins ago",
      readTime: "6 mins read"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {cardData.map((card) => (
          <div key={card.id} className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="#">
                <img className="w-full" src={card.imageUrl} alt={card.title} />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Photos
                </div>
              </a>
              <a href="!#">
                <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span className="font-bold">{card.date.split(' ')[0]}</span>
                  <small>{card.date.split(' ')[1]}</small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                {card.title}
              </a>
              <p className="text-gray-500 text-sm">{card.description}</p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg height="13px" width="13px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </svg>
                <span className="ml-1">{card.time}</span>
              </span>
              <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <span className="ml-1">{card.readTime}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
