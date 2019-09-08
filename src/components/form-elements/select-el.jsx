import React from 'react'
import {
    Select,
} from 'govuk-react';
import styled from 'styled-components'
import {LabelEl} from '../reuseablestyles'

const HintEl = styled.label`
    font-size: 19px;
    color: #6f777b;
    display: block;
`

const SelectWrapper = styled.div`
    margin-top: 10px;
`

const SelectEl = (...props) => {
    return (
        <div style={{'marginTop': props.extraTopSpace ? '25px' : '0'}}>
            {props.label && <LabelEl>{props.label}</LabelEl>}
            {props.hint && <HintEl>{props.hint}</HintEl>}
            <SelectWrapper style={props.fixed ? {width: props.width} : {}}>
                <Select id="selectEl" name="group1" className={props.roundedCorners? 'rounded' : ''} > 
                    {props.data.map((opt, i) =>
                        <option key={i} value={i}>{opt}</option>
                    )}
                </Select>
            </SelectWrapper>
        </div>
    );
}

export default SelectEl;