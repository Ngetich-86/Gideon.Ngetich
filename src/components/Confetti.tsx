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

import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti: React.FC = () => {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            const container = document.querySelector('.container');
            if (container) {
                setDimensions({
                    width: container.clientWidth,
                    height: window.innerHeight,
                });
            }
        };

        // Initial size
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ReactConfetti
                width={dimensions.width}
                height={dimensions.height}
                colors={['#00bcd4', '#ff5722', '#ffb74d']}
                wind={0.1}
                recycle={false}
                numberOfPieces={360}
                gravity={0.2}
            />
        </div>
    );
};

export default Confetti;
