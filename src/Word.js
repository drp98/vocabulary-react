import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Word = () => {
    return (
        <div className='container text-center mt-3 mb-3 p-0 w-50'>
            <Card>
                <br />
                <span id='counter'>[ 1 / 20 ]</span>
                <br />
                <span id='wordId' className='font-weight-bold display-4'>
                    I mean it
                </span>
                <br />
                <span id='transcriptionId' className='h4 font-weight-light'>
                    [ aɪ miːn ɪt]
                </span>
                <br />
                <span id='translateId' className='h3 font-weight-light'>
                    Я серьезно
                </span>
                <br />
                <Button variant='outline-warning'>Already know</Button>
            </Card>
        </div>
    )
}

export default Word
