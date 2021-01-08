import React, {
    useState,
    useEffect,
    useRef,
    useTransition,
    Suspense,
} from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import Loader from './Loader'
import './Words.css'
import Test from './Test'
import { Spinner } from './Spinner'
import { ButtonSpinner } from './ButtonSpinner'

import { fetchProfileData } from './fakeApi'

const initialResource = fetchProfileData(1)

const Words = () => {
    const [isTranslated, setIsTranslated] = useState(false)

    const [startTransitionBack, isPendingBack] = React.useTransition({
        timeoutMs: 3000,
    })
    const [startTransitionNext, isPendingNext] = React.useTransition({
        timeoutMs: 3000,
    })
    const [resource, setResource] = useState(initialResource)

    function getNextId(id) {
        return id >= 10 ? 1 : id + 1
    }

    function getPrevId(id) {
        return id <= 1 ? 10 : id - 1
    }

    const translate = () => setIsTranslated(!isTranslated)

    return (
        <div
            id='width'
            className='container-sm text-center mt-3 mb-3 p-0 pr-3 pl-3'
        >
            <Card className='h-100'>
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
                        startTransitionBack(() => {
                            const prevWordId = getPrevId(resource.userId)
                            setResource(fetchProfileData(prevWordId))
                            setIsTranslated(false)
                        })
                    }}
                    disabled={isPendingBack}
                >
                    {isPendingBack ? (
                        <>
                            {'Back '}
                            <ButtonSpinner />
                        </>
                    ) : (
                        'Back'
                    )}
                </Button>
                <Button
                    variant='outline-success font-weight-bold'
                    onClick={() => {
                        startTransitionNext(() => {
                            const nextWordId = getNextId(resource.userId)
                            setResource(fetchProfileData(nextWordId))
                            setIsTranslated(false)
                        })
                    }}
                    disabled={isPendingNext}
                >
                    {isPendingNext ? (
                        <>
                            {'Next '}
                            <ButtonSpinner />
                        </>
                    ) : (
                        'Next'
                    )}
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Words
