import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import './Words.css'

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
    const [words, setWords] = useState({})
    const [currentWord, setCurrentWord] = useState({})
    const [index, setIndex] = useState(0)
    const [isTranslated, setIsTranslated] = useState(false)
    const wordsRef = useRef({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setWords(initialWords)
                setCurrentWord(initialWords[0])
                wordsRef.current = initialWords
            })
    }, [])

    useEffect(() => {
        setCurrentWord(wordsRef.current[index])
        setIsTranslated(false)
    }, [index])

    const next = () => {
        index < words.length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    const back = () => {
        index > 0 ? setIndex(index - 1) : setIndex(words.length - 1)
    }

    const translate = () => setIsTranslated(!isTranslated)

    return (
        <div
            id='width'
            className='container-sm text-center mt-3 mb-3 p-0 pr-3 pl-3'
        >
            <Card>
                <p className='mt-3'>
                    [ {index + 1} / {words?.length} ]
                </p>

                <p className='font-weight-bold display-4'>
                    {currentWord?.word}
                </p>

                <p className='h3 font-weight-light mt-4'>
                    {currentWord?.transcription}
                </p>

                <p
                    id='test'
                    className={`h4 font-weight-light mt-4 ${
                        isTranslated || 'invisible'
                    }`}
                >
                    {currentWord?.translate}
                </p>

                <Button variant='outline-warning font-weight-bold mt-4'>
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
