import React from 'react'

export const DefaultLoader = () => (
    <div
        className='spinner-border text-dark text-center font-size-small'
        role='status'
    >
        <span className='sr-only'>Loading...</span>
    </div>
)