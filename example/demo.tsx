import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DemoComponent from '../src/index'

class Component extends React.Component {
    render() {
        return (
            <div>
                我是的example
                <DemoComponent />
            </div>
        )
    }
}

ReactDOM.render(<Component />, document.getElementById('app'))