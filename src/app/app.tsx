import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const App: React.SFC = props => {
    return (
        <div>
            <div>App running...</div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
