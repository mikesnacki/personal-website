import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Header from "../components/header"
import Landing from "../components/landing"
import About from "../components/about"

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Landing />
                <About />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))