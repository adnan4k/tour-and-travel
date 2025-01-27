import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function DestinationDetail() {
    const [packageDetail, setPackageDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    console.log(id,'here is id ');

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                const response = await axios.get(`https://dashboard.jemmavalleytour.com/api/destination-detail/${id}`);
                setPackageDetail(response.data.data);
                console.log(response.data.data, 'API response');
            } catch (error) {
                setError('Error fetching package details.');
                console.error('Error fetching package details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackageDetail();
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    const markdownContent = packageDetail?.content?.replace(/\\n/g, '\n'); // Fix escaped newlines if needed

    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                <div
                    className="bg-cover bg-center text-center overflow-hidden"
                    style={{
                        minHeight: '500px',
                        backgroundImage: `url('https://dashboard.jemmavalleytour.com/storage/${packageDetail?.image || ''}?quality=85&w=1201&h=676&crop=1')`,
                    }}
                    title={packageDetail?.title || 'Package Image'}
                ></div>
               
                <div className="max-w-3xl mx-auto">
                    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                            <h1 className="text-gray-900 font-bold text-3xl mb-2">{packageDetail?.title}</h1>

                            {/* Render Markdown Content */}
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        </div>
                    </div>
                </div>
         
            </div>
        </div>
    );
}
