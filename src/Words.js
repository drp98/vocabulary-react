import React, { useState, useEffect, useRef } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { Spinner } from './Spinner'
import './Words.css'

const fetchedWord = {
    content: '0000',
    translate: '0000',
    transcription: '[ 0000 ]',
}

const Words = () => {
    const [words, setWords] = useState({})
    const [currentWord, setCurrentWord] = useState({})
    const [index, setIndex] = useState(0)
    const [isTranslated, setIsTranslated] = useState(false)
    const wordsRef = useRef({})

    const [word, setWord] = useState({})
    const [length, setLength] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => {
                setWord(json)
                setLength(10)
                setIsLoaded(true)
            })
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${index + 1}`)
            .then(response => response.json())
            .then(json => {
                setWord(json)
                setIsLoaded(true)
            })
        setIsLoaded(false)
        setIsTranslated(false)
    }, [index])

    const next = () => {
        index < length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    const back = () => {
        index > 0 ? setIndex(index - 1) : setIndex(length - 1)
    }

    const translate = () => setIsTranslated(!isTranslated)

    return (
        <div
            id='width'
            className='container-sm text-center mt-3 mb-3 p-0 pr-3 pl-3'
        >
            <Card>
                <p className='mt-3'>
                    [ {index + 1} / {length} ]
                </p>

                <div className='font-weight-bold display-4'>
                    {word.name}
                </div>

                <p className='h3 font-weight-light mt-4'>
                    {word.phone}
                </p>

                <p
                    id='test'
                    className={`h4 font-weight-light mt-4 ${
                        isTranslated || 'invisible'
                    }`}
                >
                    {word.email}
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
