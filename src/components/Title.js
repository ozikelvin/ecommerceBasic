import React from 'react'
import styled from 'styled-components/macro';


export default function Title({ name,title }) {
    return (
        <Titlee className="row my-5 mx-4">
            <div className="col-10 mx-auto my-2 text-center">
                <h3 className="text-capitalize ">
                    {name} <span className="">{title}</span>
                </h3>
            </div>
        </Titlee>
    )
}



const Titlee = styled.div`

h3 {
    color:#e9e9e9;
    font-size:2.6rem;
}

`
