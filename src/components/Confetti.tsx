// import {useState,useEffect} from 'react'
import ReactConfetti from 'react-confetti'
// import useWindowSize from '@react-hook/window-size';

const Confetti = () => {
    // const { width, height } = useWindowSize()
    return (
        <>
            <div style={{ position: 'relative' }}>
                <ReactConfetti
                    width={1200}
                    height={790}
                    colors={['#00bcd4', '#ff5722', '#ffb74d']}
                    wind={0.1}
                    recycle={false}
                    numberOfPieces={360}
                    gravity={0.2}
                />
            </div>
        </>
    )
}

export default Confetti
