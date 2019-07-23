import React, { useRef, useState } from 'react'

export default function Modal({ hideModal, show }) {

    const modalRef = useRef();

    const displayed = show === true ? "modal display-block" : "modal display-none";

    return (
        <div
            ref={modalRef}
            className={displayed}>
            <section className="modal-main align-center">
                <h2>Hey, thanks for filling this out. We'll be in touch.</h2>
                <button
                    className="button-clear button-contact align-center"
                    onClick={hideModal}>
                    close
            </button>
            </section>
        </div>
    )
}
