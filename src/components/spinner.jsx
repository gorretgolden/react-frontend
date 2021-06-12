import React from 'react'
import {Spinner} from "react-bootstrap"

function SpinnerComponent() {
    return (
        <div

        >
             <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
</Spinner>
        </div>
    )
}

export default SpinnerComponent
