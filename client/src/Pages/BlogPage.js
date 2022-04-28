import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../fixed/Navbar';
import { getBlog2 } from '../api/ApiCalls';
import Logo1 from '../image/2.jpg';

const BlogPage = () => {
    const [body, setBody] = useState();

    const { id } = useParams();

    useEffect(() => {
        loadBody(id);
    }, [])

    const loadBody = async (id2) => {
        await getBlog2(id2).then(res => {
            setBody(res.data)
        })
    }
    return (
        <div>
            <Navbar />
            {body ? (
                <div className='w-100 d-flex justify-content-center'>
                    <div className="card mt-5 w-50">
                        <img src={Logo1} className="card-img-top" alt="..." height={500} />
                        <div className="card-body">
                            <h1>{body.title}</h1>
                            <p className="card-text">{body.content}</p>
                            <p className="card-text"><small className="text-muted">{body.tag}</small></p>
                        </div>
                    </div>
                </div>
            ) : id}
        </div>
    )
}

export default BlogPage;