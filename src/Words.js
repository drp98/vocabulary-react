import React, { useState, useEffect } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'

const initialWords = [
    {
        word: 'I mean it',
        translate: 'Я серьезно',
        transcription: '[ aɪ miːn ɪt]',
    },
    {
        word: 'Hello',
        translate: 'Привет',
        transcription: '[ hello ]',
    },
    {
        word: 'go',
        translate: 'идти',
        transcription: '[ g o ]',
    },
    {
        word: 'Bye',
        translate: 'Пока',
        transcription: '[ b y e ]',
    },
]

const Words = () => {
    const [ words, setWords ] = useState({})
    const [ currentWord, setCurrentWord ] = useState({})
    const [index, setIndex] = useState(0)
    const [isTranslated, setIsTranslated] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setWords(initialWords)
                setCurrentWord(initialWords[0])
            })
    }, [])

    useEffect(() => {
        setCurrentWord(words[index])
        setIsTranslated(false)
    }, [index, words])

    const next = () => {
        ( index < words.length - 1 )
        ? setIndex(index + 1)
        : setIndex(0)
    }

    const back = () => {
        ( index > 0 )
        ? setIndex(index - 1)
        : setIndex(words.length - 1)
    }

    const translate = () => setIsTranslated(!isTranslated)

    return (
        <div className='container text-center mt-3 mb-3 p-0 w-50'>
            <Card>
                <br />
                <span>
                    [ {index + 1} / {words?.length} ]
                </span>
                <br />

                <span className='font-weight-bold display-4'>
                    {currentWord?.word}
                </span>
                <br />
                <p
                    className={`h4 font-weight-light ${
                        isTranslated || 'invisible'
                    }`}
                >
                    {currentWord?.translate}
                </p>
                <br />
                <span className='h3 font-weight-light'>
                    {currentWord?.transcription}
                </span>
                <br />
                <Button variant='outline-warning font-weight-bold'>
                    Already know
                </Button>
            </Card>

            <Button
                variant='outline-primary w-100 mb-2 mt-2 font-weight-bold'
                onClick={() => translate()}
            >
                {isTranslated ? 'Hide' : 'Translate'}
            </Button>
            <br />
            <ButtonGroup className='text-center w-100'>
                <Button
                    variant='outline-danger font-weight-bold'
                    onClick={() => back()}
                >
                    Back
                </Button>
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
