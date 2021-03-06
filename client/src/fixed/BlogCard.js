import React from 'react'
import Logo1 from '../image/1.jpg'
import { useNavigate  } from "react-router-dom";

const BlogCard = (props) => {
    const {title,text,tag,id} = props;

    let history = useNavigate();

    const onClickBlogCard = (id) => {
        history("/blog/"+id);
    }

    return (
        <div className='w-100 d-flex justify-content-center flex-direction-column mt-5' onClick={() => onClickBlogCard(id)} style={{cursor:"pointer"}}>
            <div className="card w-50">
                <img src={Logo1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">{tag}</small></p>
                    </div>
            </div>
        </div>
    )
}

export default BlogCard;
