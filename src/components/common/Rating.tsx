import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const createArray = (number: number) => {
    let arr = [];
    let num = 1;
    for(let i = 0; i < number; i++ ) {
        arr.push(num)
        num++;
    }
    return arr;
}

export default function Rating() {
    const starsAmount = createArray(4)
    return (
        <div>
            {starsAmount.map((star, index) => (
                <StarIcon 
                key={index} />
            ))}
        </div>
    )
}
