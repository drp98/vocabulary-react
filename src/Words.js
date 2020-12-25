import React, { useState, useEffect } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

const initialWords = [
    {
        word: '1 I mean it',
        translate: 'Я серьезно',
        transcription: '[ aɪ miːn ɪt]',
    },
    {
        word: '2 Hello',
        translate: 'Привет',
        transcription: '[ hello ]',
    },
    {
        word: '3 go',
        translate: 'идти',
        transcription: '[ g o ]',
    },
    {
        word: '4 Bye',
        translate: 'Пока',
        transcription: '[ b y e ]',
    },
]

const Words = () => {
    const [ words, setWords ] = useState({})
    const [ currentWord, setCurrentWord ] = useState({})
    const [index, setIndex] = useState(1)

    // const next = () => {
        
        
    //     setCurrentWord(state[id])
    // }

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => {
                
        //     })
        setWords(initialWords)
        setCurrentWord(initialWords[0])
        
    }, [])

    const next = () => {
        if (index < words.length ) {
            setIndex(i => i + 1)
            setCurrentWord(words[index])
        }
        else {
            setIndex(1)
            setCurrentWord(words[0])
        }
    }

    return (
        <div className='container text-center mt-3 mb-3 p-0 w-50'>
            <Card>
                <br />
                <span>[ 1 / 20 ]</span>
                <br />

                <span className='font-weight-bold display-4'>
                    { index }
                </span>

                <span className='font-weight-bold display-4'>
                    {/* {state?.userId} */}
                    {currentWord?.word}
                </span>
                <br />
                <span className='h4 font-weight-light'>
                    {currentWord?.translate}
                </span>
                <br />
                <span className='h3 font-weight-light'>
                    {currentWord?.transcription}
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
                <Button variant='outline-danger font-weight-bold'>Back</Button>
                <Button
                    variant='outline-success font-weight-bold'
                    onClick={() => next()}
                >
                    Next
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Words
