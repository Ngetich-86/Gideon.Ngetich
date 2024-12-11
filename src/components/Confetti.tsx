// // import {useState,useEffect} from 'react'
// import ReactConfetti from 'react-confetti'
// // import useWindowSize from '@react-hook/window-size';

// const Confetti = () => {
//     // const { width, height } = useWindowSize()
//     return (
//         <>
//             <div style={{ position: 'relative' }}>
//                 <ReactConfetti
//                     width={1100}
//                     height={790}
//                     colors={['#00bcd4', '#ff5722', '#ffb74d']}
//                     wind={0.1}
//                     recycle={true}
//                     numberOfPieces={360}
//                     gravity={0.2}
//                 />
//             </div>
//         </>
//     )
// }

// export default Confetti

import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

function Confetti() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    // console.log(dimensions.width, dimensions.height);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <ReactConfetti
                width={dimensions.width}
                height={dimensions.height}
                colors={['#00bcd4', '#ff5722', '#ffb74d']}
                wind={0.1}
                recycle={true}
                numberOfPieces={360}
                gravity={0.2}
            />
        </div>
    );
}

export default Confetti;
