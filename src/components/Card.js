import React from 'react';
import 'tachyons';

const Card = ({ id, details }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?100x100`} alt="Robot" />
            <div>
                <h2>{details.name}</h2>
                <p>{details.email}</p>
            </div>
        </div>
    );
}

export default Card;
