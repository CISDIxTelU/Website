import React, { useEffect, useState } from 'react'
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DetailCourse() {
    const [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.post(`https://api.storeximi.com/api/topic/${id}`, {}, config).then(res => {
            setData(res.data.data_topic);
            console.log(res.data.data_topic)
        }).catch(e => {
            console.log(e);
        })
    }, []);

    console.log(data);
    return (
        <div className="container mx-auto py-11">
            <h1 className="text-3xl font-bold w-1/2">{data.title}</h1>
            <div className="flex wrap justify-between bg-white py-3 gap-10">
                <div className="w-9/12 py-2">
                    <img src={`https://api.storeximi.com/storage/${data.cover_image}`} alt="data" className="w-full h-1/2 object-cover rounded-xl border" />
                    <div className="bg-white mt-5 border rounded-xl p-10">
                        <h2 className="text-2xl font-semibold">Overview</h2>
                        <p className="mt-3">{data.description}</p>
                    </div>

                    <div className="bg-white mt-5 border rounded-xl p-10">
                        <h2 className="text-2xl font-semibold">What you’ll learn</h2>
                        <ul class="list-none leading-loose mt-3 md:list-disc ml-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
                            <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
                        </ul>
                    </div>
                </div>
                <div className="w-4/12 py-2">
                    <div className="bg-white border rounded-xl p-10">
                        <h2 className="text-2xl font-semibold mb-10">are you interest with this
                            courses? let’s start !</h2>
                        <div className=" flex wrap flex-col gap-4">
                            <Link to={`/course/${data.id}`} className="bg-blue-600 text-white rounded-lg font-semibold w-full text-center p-3 inline-flex items-center justify-center hover:bg-blue-700" href="#">
                                <FaBookOpen className="mr-3" />
                                <span>Start Courses</span>
                            </Link>
                            <a className="bg-white text-blue-600 border border-blue-600 rounded-lg font-semibold w-full text-center p-3 inline-flex items-center justify-center hover:underline" href="#">
                                <FaHeart className="mr-3" />
                                <span>Add Favourite</span>
                            </a>
                        </div>
                        <hr className="my-11" />
                        <div className="text-center mb-8">
                            <Link to="/courses" className="text-blue-600 underline" href="#">back to courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCourse
