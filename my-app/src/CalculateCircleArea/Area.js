import { render } from '@testing-library/react';
import React from 'react';

const CalculateArea = () => {
    const radius = [1, 2, 3, 4];
    const area = (radius) => {
        return Math.PI * radius * radius;
    }
    const Calculate = (radius,logic) => {
        const output = [];
        for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]))
        };
        return output;
    }
    // console.log(Calculate(radius,area))
    render()
        return (
            <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'center'}}>
                Calculated Circle Area:
                <div>{Calculate(radius,area) }</div>
            </div>
        )
    
}

export default CalculateArea;