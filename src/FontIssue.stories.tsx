import React, { FC } from 'react';
import { NotStyledParagraph, StyledParagraph } from './App';

export default {
    title: 'Example'
};

export const FontIssue: FC = () => (
    <>
        <StyledParagraph/>
        <NotStyledParagraph/>
    </>
);
