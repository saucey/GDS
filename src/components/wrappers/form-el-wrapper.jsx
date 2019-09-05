import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 15px;
`
const FormElWrapper = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default FormElWrapper;
