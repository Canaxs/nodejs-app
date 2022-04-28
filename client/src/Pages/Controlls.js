import React, { useState, useEffect } from 'react'
import Navbar from '../fixed/Navbar';
import Text from '../fixed/Text';
import {deleteBlog, getBlog, postBlog } from '../api/ApiCalls';
import SmallBlogCard from '../fixed/SmallBlogCard';

const Controlls = () => {

    const [create, setCreate] = useState(false);
    const [shows, setShows] = useState(false);
    const [body,setBody] = useState({
        title: null,
        content: null,
        tag: null
    });
    const [blogs,setBlogs] = useState();

    useEffect(() => {
        Blogrefresh();
    },[shows])

    const Blogrefresh = () => {
        getBlog().then(res => {
            setBlogs(res.data)
        })
    }

    const Creating = () => {
        setCreate(true);
        setShows(false);
    }
    const Showing = () => {
        setShows(true);
        setCreate(false);
    }

    const OnClickButton = () => {
        try {
            postBlog(body);
            alert("Başarıyla oluşturuldu: "+body.title);
        }
        catch {
        }
    }

    const onClickSmall = (id) => {
        try {
            deleteBlog(id);
            alert("İd: "+id+"Başarıyla Silindi");
            Blogrefresh();
        }
        catch{}
    }

    if (create) {
        return (
            <div className='h-100'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <button type="button" className="btn btn-success btn-lg m-2" onClick={() => Creating()}>Create Shows</button>
                    <button type="button" className="btn btn-secondary btn-lg m-2" onClick={() => Showing()}>Delete Shows</button>
                </div>
                <div className='w-100 d-flex justify-content-center mt-2'>
                    <div className='w-50'>
                        <Text name={"Title"} onChange={(e) => setBody({...body,title: e.target.value})}/>
                        <Text name={"Text"} onChange={(e) => setBody({...body,content: e.target.value})}/>
                        <Text name={"Tag"} onChange={(e) => setBody({...body,tag: e.target.value})}/>
                        <button type="button" className="btn btn-success btn-lg m-2" onClick={() => OnClickButton()}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
    if (shows) {
        return (
            <div className='h-100'>
                <div>
                    <Navbar />
                </div>

                <div>
                    <button type="button" className="btn btn-success btn-lg m-2" onClick={() => Creating()}>Create Shows</button>
                    <button type="button" className="btn btn-secondary btn-lg m-2" onClick={() => Showing()}>Delete Shows</button>
                </div>

                <div className='w-100 d-flex justify-content-center'>
                    <div className='w-25'>
                    {blogs && blogs.map(e => (
                        <SmallBlogCard key={e.title} title={e.title} content={e.content} onClickSmall={() => onClickSmall(e.id)}/>
                    ))}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='h-100'>
            <div>
                <Navbar />
            </div>
            <div>
                <button type="button" className="btn btn-success btn-lg m-2" onClick={() => Creating()}>Create Shows</button>
                <button type="button" className="btn btn-secondary btn-lg m-2" onClick={() => Showing()}>Delete Shows</button>
            </div>
        </div>
    )

}

export default Controlls;
