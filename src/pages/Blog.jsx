import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample data array
  const [cardData, setCardData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://dashboard.jemmavalleytour.com/api/blogs')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatRelativeTime = (dateString) => {
    const createdAt = new Date(dateString);
    const now = new Date();
    const diffInMs = now - createdAt;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInMinutes < 1) {
        return "Just now";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
        const days = Math.floor(diffInMinutes / 1440);
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
};
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/photos/waterfall.jpg"
            alt="Background Image"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content */}
        <div className="cursor-pointer relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Blogs
          </h1>

          {/* Path (Center and Indicating "Home") */}
          <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
            <Link to='/' className="inline">Home</Link>  → Blogs
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="max-w-full flex justify-center ">
          <div className="bg-white text-4xl font-bold text-indigo-800 black mix-blend-screen px-10 py-5">Blogs</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {cardData.map((card) => (
            <div key={card?.id} className="rounded overflow-hidden shadow-lg">
              <Link to={`/blog-detail/${card.id}`} className="relative">
                <Link to={`/blog-detail/${card.id}`} >
                  <img
                    className="w-full max-w-[400px] max-h-[250px]"
                    src={`https://dashboard.jemmavalleytour.com/storage/${card?.image || ''}`}
                    alt={card.title}
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </Link>
               
               
              </Link>
              <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                  {card.title}
                </a>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </div>
              <div className="px-6 py-2 flex flex-row justify-between items-center">
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg height="13px" width="13px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </svg>
                  <span className="ml-1">{new Date(card.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </span>
                <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                <span className="ml-1">{formatRelativeTime(card.created_at)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
