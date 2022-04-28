import React from 'react'

const SmallBlogCard = (props) => {
    const {title,content,onClickSmall} = props;
    return (
        <div>
            <div className="card text-white bg-danger mb-3" style={{cursor:"pointer"}} onClick={onClickSmall}>
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h5 className="card-title">{content}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
    )
}

export default SmallBlogCard;