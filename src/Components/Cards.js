import React from 'react'
import img1 from '../imgs/9.jpg'
import img2 from '../imgs/10.jpg'
import img3 from '../imgs/11.jpg'
import img4 from '../imgs/12.jpg'
import img5 from '../imgs/13.jpg'
import img6 from '../imgs/14.jpg'
import img7 from '../imgs/15.jpg'

const Cards = () => {
    return (
        <>
            <div className='card-section'>
                <div className='cards'>
                    <div className='card'>
                        <img src={img7} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img2} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img3} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img4} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img5} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img6} />
                    </div>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={img1} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards