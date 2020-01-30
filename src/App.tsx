import React, { FC } from 'react';

import styles from './App.module.scss';

export const StyledParagraph: FC = () => (
    <p className={styles['with-font']}>I am with custom font.</p>
);

export const NotStyledParagraph: FC = () => (
    <p>And I am without.</p>
);

const App: FC = () => (
    <>
        <StyledParagraph/>
        <NotStyledParagraph/>
    </>
);

export default App;
