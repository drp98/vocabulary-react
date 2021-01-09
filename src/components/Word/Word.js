import React from 'react'

const Word = ({ resource, isTranslated }) => {
    const word = resource.word.read()
    return (
        <>
            <div className='font-weight-bold display-4'>{word.name}</div>
            <p className='h3 font-weight-light mt-4'>{word.phone}</p>

            <p
                id='test'
                className={`h4 font-weight-light mt-4 ${
                    isTranslated || 'invisible'
                }`}
            >
                {word.email}
            </p>
        </>
    )
}

export default Word
