import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Accordion } from '../../components';

function Course() {
    const [dataLo, setDataLo] = useState([]);
    const [dataLesson, setDataLesson] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        console.log(localStorage.getItem('token'))
        axios.post(`https://api.storeximi.com/api/lo/${id}`, {}, config).then(e => {
            setDataLo(e.data.data_lo);
            setDataLesson(e.data.data_lesson);
        }).catch(e => {
            console.log(e)
        })
    }, []);

    // console.log(dataLo);
    // console.log(dataLesson);
    return (
        <div className="container mx-auto py-11">
            <div className="flex wrap justify-between bg-white py-3 gap-10">
                <div className="w-4/12 py-2">
                    <div className="border rounded-lg bg-white py-5">
                        <h2 className="text-xl font-light ml-6">Daftar Modul</h2>
                        <div className="flex wrap gap-1 flex-col mt-5">
                            <Accordion dataLo={dataLo} dataLesson={dataLesson} />
                        </div>
                    </div>
                </div>
                <div className="w-9/12 py-2">
                    <div className="border rounded-lg bg-white p-6">
                        <h1 className="font-bold text-3xl">Pembukaan</h1>
                        <p className="text-justify mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci lobortis platea porta amet. Amet, interdum nisl risus, sem viverra et. Venenatis nam neque, lobortis ut amet. Feugiat lobortis nec sodales vitae risus quis faucibus vestibulum. Dolor dolor mi placerat commodo eget habitasse aliquam etiam morbi. Nunc nisi, vitae fermentum nisl enim scelerisque dolor at leo. Venenatis, integer nibh ipsum tristique dui phasellus amet, eget urna. Eu arcu, varius commodo leo. Et viverra elementum senectus maecenas consectetur et condimentum id. Sodales eget molestie urna fermentum malesuada laoreet. Vestibulum sagittis fermentum lacinia feugiat turpis diam pretium.
                            <br /> <br />
                            Tortor auctor sed enim neque, nec elementum. Faucibus amet adipiscing odio tortor augue lacinia vivamus. Nibh pulvinar porttitor fusce quam integer nisl, ornare neque euismod. Erat enim purus, et lobortis scelerisque. Dignissim viverra ipsum faucibus ornare condimentum ullamcorper fringilla ut dui. Eget neque, aliquam nulla pretium. Elit faucibus ornare risus, nam. Duis integer in morbi non laoreet dignissim quis.
                            <br /><br />
                            Tortor auctor sed enim neque, nec elementum. Faucibus amet adipiscing odio tortor augue lacinia vivamus. Nibh pulvinar porttitor fusce quam integer nisl, ornare neque euismod. Erat enim purus, et lobortis scelerisque. Dignissim viverra ipsum faucibus ornare condimentum ullamcorper fringilla ut dui. Eget neque, aliquam nulla pretium. Elit faucibus ornare risus, nam. Duis integer in morbi non laoreet dignissim quis.
                            <br /><br />
                            Tortor auctor sed enim neque, nec elementum. Faucibus amet adipiscing odio tortor augue lacinia vivamus. Nibh pulvinar porttitor fusce quam integer nisl, ornare neque euismod. Erat enim purus, et lobortis scelerisque. Dignissim viverra ipsum faucibus ornare condimentum ullamcorper fringilla ut dui. Eget neque, aliquam nulla pretium. Elit faucibus ornare risus, nam. Duis integer in morbi non laoreet dignissim quis.</p>

                        <div className="flex wrap justify-between mt-10">
                            <a href="#" className="bg-white border border-blue-600 p-3 px-5 text-blue-600 rounded hover:underline">Back</a>
                            <a href="#" className="bg-blue-600 py-3 px-5 text-white rounded hover:bg-blue-700">Next</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Course
