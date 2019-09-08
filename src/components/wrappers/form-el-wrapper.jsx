import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 15px;
    width: 100%;
`
const FormElWrapper = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default FormElWrapper;
