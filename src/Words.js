import React from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

const initialWords = [
    {
        word: 'I mean it',
        translate: 'Я серьезно',
        transcription: '[ aɪ miːn ɪt]',
    },
    {
        word: '1',
        translate: '1',
        transcription: '[ 1 ]',
    },
]

const Words = () => {
    return (
        <div className='container text-center mt-3 mb-3 p-0 w-50'>
            <Card>
                <br />
                <span id='counter'>[ 1 / 20 ]</span>
                <br />
                <span id='wordId' className='font-weight-bold display-4'>
                    {initialWords[0].word}
                </span>
                <br />
                <span id='transcriptionId' className='h4 font-weight-light'>
                    {initialWords[0].translate}
                </span>
                <br />
                <span id='translateId' className='h3 font-weight-light'>
                    {initialWords[0].transcription}
                </span>
                <br />
                <Button variant='outline-warning font-weight-bold'>
                    Already know
                </Button>
            </Card>
            
            <Button variant='outline-primary w-100 mb-2 mt-2 font-weight-bold'>
                Translate
            </Button>
            <br />
            <ButtonGroup className='text-center w-100'>
                <Button variant='outline-danger font-weight-bold'>
                    Back
                </Button>
                <Button variant='outline-success font-weight-bold'>
                    Next
                </Button>
            </ButtonGroup>
            
        </div>
        
    )
}

export default Words
