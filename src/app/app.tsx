import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.SFC<{ compiler: string; framework: string }> = props => {
    return (
        <div>
            <div>{props.compiler}</div>
            <div>{props.framework}</div>
        </div>
    );
};

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById('root'),
);
