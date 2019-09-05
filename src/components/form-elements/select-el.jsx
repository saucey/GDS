import React from 'react'
import {
    Select,
} from 'govuk-react';
import styled from 'styled-components'
import LabelEl from '../reuseablestyles'

const HintEl = styled.label`
    font-size: 19px;
    color: #6f777b;
    display: block;
`

const SelectWrapper = styled.div`
    margin-top: 10px;
`

const SelectEl = ({ extraTopSpace, hint, label, data }) => {
    return (
        <div style={{'marginTop': extraTopSpace ? '25px' : '0'}}>
            {label && <LabelEl>{label}</LabelEl>}
            {hint && <HintEl>{hint}</HintEl>}
            <SelectWrapper>
                <Select id="selectEl" name="group1"> 
                    {data.map((opt, i) =>
                        <option key={i} value={i}>{opt}</option>
                    )}
                </Select>
            </SelectWrapper>
        </div>
    );
}

export default SelectEl;