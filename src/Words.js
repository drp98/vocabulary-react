import React, {
    useState,
    useEffect,
    useRef,
    useTransition,
    Suspense,
} from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { Spinner } from './Spinner'
import './Words.css'
import Test from './Test'

import { fetchProfileData } from './fakeApi'

const initialResource = fetchProfileData(1)

const fetchedWord = {
    content: '0000',
    translate: '0000',
    transcription: '[ 0000 ]',
}

//const Test = React.lazy(() => import('./Test'))

const Words = () => {
    const [words, setWords] = useState({})
    const [currentWord, setCurrentWord] = useState({})
    const [index, setIndex] = useState(0)
    const [isTranslated, setIsTranslated] = useState(false)
    const wordsRef = useRef({})

    const [word, setWord] = useState({})
    const [length, setLength] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [startTransition, isPending] = React.useTransition({ timeoutMs: 100 })
    const [resource, setResource] = useState(initialResource)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //         .then(response => response.json())
    //         .then(json => {
    //             setWord(json)
    //             setLength(10)
    //             setIsLoaded(true)
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${index + 1}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             setWord(json)
    //             setIsLoaded(true)
    //         })
    //     setIsLoaded(false)
    //     setIsTranslated(false)
    // }, [index])

    const next = () => {
        index < length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    function getNextId(id) {
        return id >= 10 ? 1 : id + 1
    }

    function getPrevId(id) {
        return id <= 1 ? 10 : id - 1
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
                <>
                    <p className='mt-3'>
                        [ {resource.userId} / {10} ]
                    </p>

                    <Suspense fallback={<Spinner />}>
                        <Test resource={resource} isTranslated={isTranslated} />
                    </Suspense>
                </>

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
                    onClick={() => {
                        const prevWordId = getPrevId(resource.userId)
                        setResource(fetchProfileData(prevWordId))
                        setIsTranslated(false)
                    }}
                >
                    Back
                </Button>
                <Button
                    variant='outline-success font-weight-bold'
                    onClick={() => {
                        startTransition(() => {
                            const nextWordId = getNextId(resource.userId)
                            setResource(fetchProfileData(nextWordId))
                            setIsTranslated(false)
                        })
                    }}
                >
                    Next
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Words
