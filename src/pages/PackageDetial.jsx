import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Accordion from '../components/Accordion';
import { FaCalendarAlt, FaCheck, FaCheckCircle, FaCode, FaDochub, FaTimesCircle, FaUsers } from "react-icons/fa"; // Importing a calendar icon


export default function PackageDetail() {
    const [packageDetail, setPackageDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                const response = await axios.get(`https://dashboard.jemmavalleytour.com/api/package-detail/${id}`);
                setPackageDetail(response.data);
                console.log(response.data[0].schedules, 'API response');
            } catch (error) {
                setError('Error fetching package details.');
                console.error('Error fetching package details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackageDetail();
    }, [id]);

    if (loading) return <div classNameName="text-center">Loading...</div>;
    if (error) return <div classNameName="text-red-500">{error}</div>;
    const processedInclusions = (inclusions) => {
        if (!inclusions) return "No inclusions provided";
      
        return inclusions
          .split("\n") // Split the inclusions into an array of lines
          .map((line) => `✔ ${line}`) // Add the checkmark or dot to each line
          .join("\n"); // Join the lines back into a single string
      };

    const transformContent = (content) => {
        const lines = content.split("\n").filter((line) => line.trim() !== ""); // Split by new lines and remove empty lines
        return lines.map((line, index) => (
            <div key={index} className="flex flex-col gap-2 mb-2"> {/* Block container */}

                <div className="flex flex-row">
                    <FaCheck className="text-green-500 mt-1" />

                    <ReactMarkdown>{line}</ReactMarkdown>  {/* Render each line as Markdown */}
                </div>
                <div></div>
            </div>
        ));
    };


    return (
        <div className=' h-full pb-10 bg-gray-50 '>
            <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/photos/package-detail.jpg"
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                {/* Content */}
                <div className="cursor-pointer relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                        Package Detail
                    </h1>

                    {/* Path (Center and Indicating "Home") */}
                    <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
                        <Link to='/' className="inline">Home</Link>  → Packages
                    </div>
                </div>
            </div>
            <div classNameName="max-w-screen-xl bg-gray-100  mx-auto p-5 sm:p-10 md:p-16 relative">
                <section className="max-w-3/4  ">
                    {/* <!-- BG Image --> */}

                    <div className="md:mt-24 flex max-w-3/4 flex-col justify-between">
                        <h1 className='text-lg md:text-2xl md:-mt-5 text-center font-semibold mb-2  text-black  px-6'>{packageDetail[0].name}</h1>
                        {/* <!-- Component --> */}
                        <div className="grid grid-cols-1 md:mt-14 w-full mx-auto items-center gap-8 sm:gap-10 lg:grid-cols-2">
                            {/* <!-- Heading Content --> */}
                            <div class="flex flex-col  mx-auto  lg:w-full  sm:mb-2  p-4">
                                <h1 className='text-lg md:text-2xl align-left font-semibold mb-2  text-gray-700  px-6'>Tour Detials</h1>
                                {/* <div>

                                </div> */}
                                <div class="p-2 flex  w-full">
                                    <div>
                                        <FaCalendarAlt className="text-[#56C596] w-7 h-7 mr-2" /> {/* Calendar Icon */}
                                    </div>
                                    <div >
                                        <div>
                                            <p className='font-bold text-xl mr-2'>Tour Duration </p>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-sm text-gray-500"> {packageDetail[0].duration}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 flex  w-full">
                                    <div>
                                        <FaCode className="text-[#56C596] w-7 h-7 mr-2" /> {/* Calendar Icon */}
                                    </div>
                                    <div >
                                        <div>
                                            <p className='font-bold text-xl mr-2'>Tour Code </p>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-sm text-gray-500"> {packageDetail[0].tour_code}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 flex  w-full">
                                    <div>
                                        <FaUsers className="text-[#56C596] w-7 h-7 mr-2" /> {/* Calendar Icon */}
                                    </div>
                                    <div >
                                        <div>
                                            <p className='font-bold text-xl mr-2'>Group  Size </p>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-sm text-gray-500"> {packageDetail[0].group_size}</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 flex  w-full">
                                    <div>
                                        <FaDochub className="text-[#56C596] w-7 h-7 mr-2" /> {/* Calendar Icon */}
                                    </div>
                                    <div >
                                        <div>
                                            <p className='font-bold text-xl mr-2'>Tour Type </p>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-sm text-gray-500"> {packageDetail[0].tour_type}</p>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* <!-- Image Div --> */}
                            <div>
                                <img
                                    src={`https://dashboard.jemmavalleytour.com/storage/${packageDetail[0]?.image || ''}`}
                                    alt="" className="mx-auto inline-block h-full w-full max-w-[640px] max-h-[400px] rounded-2xl object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mx-auto  rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Inclusions Section */}
                        <div className="p-4">
                            <div className="flex flex-col justify-center bg-opacity-5 px-4 text-gray-700  relative">
                                <div className="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white "></div>
                                <span className="mb-4 text-center text-3xl font-bold">Package Inclusions:</span>
                                <div className="flex justify-center text-sm font-medium text-gray-700  sm:text-base md:mx-auto md:max-w-screen-sm">
                                    <ReactMarkdown>{packageDetail[0]?.inclusions || "No inclusions provided"}</ReactMarkdown>

                                </div>
                            </div>
                        </div>

                        {/* Exclusions Section */}
                        <div className="p-4">
                            <div className="flex flex-col justify-center bg-opacity-5 px-4 text-gray-700  relative">
                                <div className="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white "></div>
                                <span className="mb-4 text-center text-3xl font-bold">Package Exclusions:</span>
                                <div className="flex text-sm justify-center font-medium text-gray-700  sm:text-base md:mx-auto md:max-w-screen-sm">

                                    <ReactMarkdown>
                                        {packageDetail[0]?.exclusions || "No inclusions provided"}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 mx-auto my-14'>
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                        Schedules
                    </h1>
                    <h1>
                        <h1 className='font-medium mr-2 mb-2'>  {packageDetail[0].name}</h1>

                    </h1>
                    <Accordion items={packageDetail[0].schedules} />
                    <div className="mt-16  w-1/3 mx-auto ">
                        {/* Read More Button */}
                        <Link
                            to="/book"
                            state={{ tourCode: packageDetail[0].tour_code }}
                            className="z-10 flex justify-center text-sm w-full bg-[#56C596] px-4 py-2 text-white rounded-md hover:bg-[#56C596] transition duration-300 ease-in-out"
                        >
                            <span>Book Now</span>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    );
}
