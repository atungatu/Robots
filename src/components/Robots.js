import React from 'react';
import Card from './Card';
import { robotList } from '../data/robotList'
const Robots = ({ robots }) => {
    const filteredRobot =
        robots.map(robot => {
            return (
                <div>
                    <Card key={robot.id} id={robot.id} details={robot} />
                </div>
            )
        }
        );
    return robots.length === 0 ?
        <h1>loading...</h1>
        : (
            <div>
                {filteredRobot}
            </div>
        );

}

export default Robots;
