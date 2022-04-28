import React from 'react'

const Text = (props) => {
    const {name,onChange} = props;
    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">{name}</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={onChange}/>
            </div>
        </div>
    )
}

export default Text;
