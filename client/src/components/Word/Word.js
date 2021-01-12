import React from 'react'

const Word = ({ resource, isTranslated }) => {
    const { word, transcription, translate } = resource.word.read()
    
    return (
        <>
            <div className='font-weight-bold display-4'>{word}</div>
            <p className='h3 font-weight-light mt-4'>{transcription}</p>

            <p
                id='test'
                className={`h4 font-weight-light mt-4 ${
                    isTranslated || 'invisible'
                }`}
            >
                {translate}
            </p>
        </>
    )
}

export default Word
