import React from 'react';

const teamMembers = [
    {
        name: 'Demeke Getahun',
        role: 'Founder and CEO',
        image: 'assets/images/demeke-getahun.jpeg',
    },
    {
        name: 'Embet Getaneh',
        role: 'Operation Manager',
        image: 'assets/images/emebet-getaneh.jpeg',
    },
    {
        name: 'Kaleab Birhanu',
        role: 'Marketing Director',
        image: 'assets/images/keleab.jpeg',
    },
    {
        name: 'Daniel Melka',
        role: 'Head of Sustainability and Community Engagement',
        image: 'assets/images/deniel.jpeg',
    },
   
];

function Team() {
    return (
        <section className="py-24">
            <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">Our team</h2>
                </div>
                <div className="grid grid-cols-1 items-center min-[500px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`block group ${index === 3 ? 'md:col-start-2 lg:col-start-4' : ''} ${index === 4 ? 'min-[500px]:col-span-2 mx-auto' : ''} md:col-span-2 lg:col-span-1`}>
                            <div className="relative mb-6">
                                <img src={member.image} alt={`${member.name} image`}
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                                {member.name}
                            </h4>
                            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Team;
