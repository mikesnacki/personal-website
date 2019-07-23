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
import Modal from "../components/modal"

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            show: false
        }

        this.addMessage = this.addMessage.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    componentWillMount() {
        base.syncState("messages", {
            context: this,
            state: "messages",
        })
    }


    addMessage(newMessage) {
        this.setState(prevState => ({
            messages: [prevState, newMessage],
            show: true,
        }))
    }

    hideModal = () => {
        this.setState({ show: false })
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
                <Modal
                    show={this.state.show}
                    hideModal={this.hideModal}
                />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))