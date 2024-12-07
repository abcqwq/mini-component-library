/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHTS = {
    small: {
        '--height': `${8 / 16}rem`,
        '--bar-radius': '4px',
    },
    medium: {
        '--height': `${12 / 16}rem`,
        '--bar-radius': '4px',
    },
    large: {
        '--height': `${24 / 16}rem`,
        '--bar-radius': '8px',
        '--padding': '4px',
    },
};

const ProgressBar = ({ value, size }) => {
    return (
        <>
            <VisuallyHidden
                aria-valuenow={value}
                aria-label={'progress-bar'}
            >
                Progress Bar: {value}%
            </VisuallyHidden>
            <Wrapper
                value={value}
                max={100}
                style={HEIGHTS[size]}
            ></Wrapper>
        </>
    );
};

const Wrapper = styled.progress`
    appearance: none;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

    height: var(--height);

    &::-webkit-progress-bar {
        background-color: ${COLORS.transparentGray15};
        padding: var(--padding);

        border-radius: var(--bar-radius);
    }

    &::-webkit-progress-value {
        background-color: ${COLORS.primary};

        border-top-left-radius: ${4 / 16}rem;
        border-bottom-left-radius: ${4 / 16}rem;

        border-top-right-radius: ${(p) =>
            (4 / 16) * Math.max(0, p.value - 99)}rem;
        border-bottom-right-radius: ${(p) =>
            (4 / 16) * Math.max(0, p.value - 99)}rem;
    }
`;

export default ProgressBar;
