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
                {console.log(this.state.show)}
                <Header />
                <Landing />
                <About />
                <Experience />
                <Portfolio />
                <Contact addMessage={this.addMessage} />
                {/* <Modal show={this.state.show}
                    hideModal={this.hideModal}
                /> */}
                <Footer />
            </div>
        )
    }
}

// const Modal = ({ hideModal, show }) => {
//     show === false ? "display-block" : "display-none"

//     return (
//         <div className={show === false ? "display-block" : "display-none"}>
//             <section className='modal-main'>
//                 Thanks For your Submission!
//                 <button
//                     onClick={hideModal}
//                 >
//                     Close
//           </button>
//             </section>
//         </div>
//     );
// };

ReactDOM.render(<App />, document.getElementById('app'))