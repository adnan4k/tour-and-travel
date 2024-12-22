import React from 'react';

const Card = ({ image, title, category, description, link }) => (
  <div className="sm:col-span-6 lg:col-span-5">
    <a href={link}>
      <div
        className="h-56 bg-cover text-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        title={title}
      ></div>
    </a>
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div className="lg:pl-16">
        <a
          href={link}
          className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
        >
          {category}
        </a>
        <a
          href={link}
          className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </a>
        <p className="text-gray-700 text-xs mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const SmallCard = ({ image, title, date, link }) => (
  <div className="flex items-start mb-3 pb-3">
    <a href={link} className="inline-block mr-3">
      <div
        className="w-20 h-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </a>
    <div className="text-sm">
      <p className="text-gray-600 text-xs">{date}</p>
      <a
        href={link}
        className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
      >
        {title}
      </a>
    </div>
  </div>
);

const Destinations = () => {
  const smallCards = [
    {
      image:
        'https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=',
      title: 'Cristiano Ronaldo of Juventus FC looks dejected during the...',
      date: 'Aug 18',
      link: '#',
    },
    {
      image:
        'https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=',
      title: 'Barcelona v Bayern Munich',
      date: 'Jan 18',
      link: '#',
    },
    // Add more small cards here
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        <Card
          image="https://tailwindcss.com/img/card-left.jpg"
          title="The perfect summer sweater that you can wear!"
          category="Fashion"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          link="#"
        />
        <div className="sm:col-span-6 lg:col-span-4">
          {smallCards.map((card, index) => (
            <SmallCard key={index} {...card} />
          ))}
        </div>
        <Card
          image="https://tailwindcss.com/img/card-left.jpg"
          title="The perfect summer sweater that you can wear!"
          category="Fashion"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          link="#"
        />
      </div>
    </div>
  );
};

export default Destinations;
