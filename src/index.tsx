import 'styles/global.scss';
import * as React from 'react';
import { render } from 'react-dom';

const App = () => (
    <>
        <h1>React Webpack Setup</h1>
        <p>It works!</p>
    </>
);

render(<App />, document.getElementById('app'));