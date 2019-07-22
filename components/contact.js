import React from 'react'

export default class Contact extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var newMessage = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            message: this.refs.message.value,
        }

        if (newMessage) {
            this.props.addMessage(newMessage)
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    render() {
        return (
            <div
                id="contact"
                className="align-center contact" >
                <form
                    onSubmit={this.handleSubmit}
                    method="post">
                    <h2>Contact</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        ref="name"
                        className="contact-input"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                        required></input>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        ref="email"
                        className="contact-input"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                        required></input>
                    <textarea
                        type="text"
                        name="message"
                        className="contact-input"
                        placeholder="message"
                        ref="message"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                        required></textarea>
                    <button
                        type="submit"
                        className="button-clear button-contact">Send
                </button>
                </form>
            </div >
        )
    }
}

