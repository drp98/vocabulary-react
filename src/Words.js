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
        timeoutMs: 2500,
    })
    const [startTransitionNext, isPendingNext] = React.useTransition({
        timeoutMs: 2500,
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
                    <Button variant='outline-warning font-weight-bold pb-10 position-absolute'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            class='bi bi-star'
                            viewBox='0 0 16 16'
                        >
                            <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
                        </svg>
                    </Button>

                    <p className='mt-3'>
                        [ {resource.userId} / {10} ]
                    </p>

                    <Suspense fallback={<Spinner />}>
                        <Test resource={resource} isTranslated={isTranslated} />
                    </Suspense>
                </>

                {/* <Button variant='outline-warning font-weight-bold mt-4'>
                    <i class='bi bi-star'></i>
                    Already know
                </Button> */}
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
                            {'Back'}
                            <ButtonSpinner />
                        </>
                    ) : (
                        'Back'
                    )}
                </Button>
                <Button
                    variant='outline-success font-weight-bold position-relative'
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
                            {'Next'}
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
