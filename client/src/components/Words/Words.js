import React, {
    useState,
    Suspense,
    useEffect
} from 'react'
import {
    Card,
    Button,
    ButtonGroup,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap'
import './Words.css'
import Word from '../Word/Word'
import { DefaultLoader } from '../Loaders/DefaultLoader/DefaultLoader'
import { ButtonLoader } from '../Loaders/ButtonLoader/ButtonLoader'
import { fetchWordData } from '../../utils/fetchData'

const initialResource = fetchWordData(1)

const Words = () => {
    const [length, setLength] = useState(null)
    
    useEffect(() => {
        fetch('/api/words/length')
            .then(response => response.json())
            .then(json => setLength(json))
    }, [])

    const [isTranslated, setIsTranslated] = useState(false)
    const [resource, setResource] = useState(initialResource)
    
    const [startTransitionBack, isPendingBack] = React.useTransition({
        timeoutMs: 2500,
    })
    const [startTransitionNext, isPendingNext] = React.useTransition({
        timeoutMs: 2500,
    })

    const translate = () => setIsTranslated(!isTranslated)

    const getNextId = id => (
        id >= length ? 1 : id + 1
    )

    const getPrevId = id => (
        id <= 1 ? length : id - 1
    )

    const renderTooltip = props => (
        <Tooltip id='tooltip-left' {...props}>
            Already know
        </Tooltip>
    )

    return (
        <div
            id='width'
            className='container-sm text-center mt-3 mb-3 p-0 pr-3 pl-3'
        >
            <Card className='h-100'>
                <>
                    <OverlayTrigger
                        placement='left'
                        delay={{ show: 0, hide: 0 }}
                        overlay={renderTooltip}
                    >
                        <div className='dropdown'>
                            <i className='bi bi-bookmark-star h2'></i>
                        </div>
                    </OverlayTrigger>

                    <p className='mt-3'>
                        [ {resource.wordId} / {length} ]
                    </p>

                    <Suspense fallback={<DefaultLoader />}>
                        <Word resource={resource} isTranslated={isTranslated} />
                    </Suspense>
                </>
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
                            const prevWordId = getPrevId(resource.wordId)
                            setResource(fetchWordData(prevWordId))
                            setIsTranslated(false)
                        })
                    }}
                    disabled={isPendingBack}
                >
                    {isPendingBack ? (
                        <>
                            {'Back'}
                            <ButtonLoader />
                        </>
                    ) : (
                        'Back'
                    )}
                </Button>
                <Button
                    variant='outline-success font-weight-bold position-relative'
                    onClick={() => {
                        startTransitionNext(() => {
                            const nextWordId = getNextId(resource.wordId)
                            setResource(fetchWordData(nextWordId))
                            setIsTranslated(false)
                        })
                    }}
                    disabled={isPendingNext}
                >
                    {isPendingNext ? (
                        <>
                            {'Next'}
                            <ButtonLoader />
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
