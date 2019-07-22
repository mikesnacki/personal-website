import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Header from "../components/header"
import Landing from "../components/landing"
import About from "../components/about"
import Experience from "../components/experience"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from "../components/footer"
import base from "../firebase"

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }

        this.addMessage = this.addMessage.bind(this)
    }

    componentWillMount() {
        base.syncState("messages", {
            context: this,
            state: "messages",
        })
    }


    addMessage(newMessage) {
        this.setState(prevState => ({
            messages: [prevState, newMessage]
        }))
    }

    render() {
        return (
            <div>
                <Header />
                <Landing />
                <About />
                <Experience />
                <Portfolio />
                <Contact addMessage={this.addMessage} />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))