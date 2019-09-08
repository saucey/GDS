import React from 'react'
import {
    Label,
    Input,
} from 'govuk-react';
import styled from 'styled-components'

import {LabelEl} from '../reuseablestyles'

const HintEl = styled.label`
    font-size: 19px;
    color: #6f777b;
    display: block;
`

const InputWrapper = styled.div`
    margin-top: 10px;
`

const InputEl = ({hint, label, ...inputProps }) => {
    console.log(inputProps, 'the props input');
    return (
        <div>
            {label && <LabelEl>{label}</LabelEl>}
            {hint && <HintEl>{hint}</HintEl>}
            <InputWrapper>
                <Input id="inputEl" {...inputProps} />
            </InputWrapper>
        </div>
    );
}

export default InputEl;