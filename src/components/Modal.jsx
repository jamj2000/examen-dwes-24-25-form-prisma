'use client'

import { useRef } from "react";

function Modal({ openElement, children }) {
    const refModal = useRef()

    const openModal = () => refModal.current?.showModal()
    const closeModal = () => refModal.current?.close()

    const handleClickOutside = (e) => {
        if (refModal.current) {
            const rect = refModal.current.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY
                && e.clientY <= rect.top + rect.height
                && rect.left <= e.clientX
                && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                refModal.current.close();
            }
        }
    }

    return (
        <>
            <div onClick={openModal} > {openElement} </div >

            <dialog ref={refModal} className="p-4"
                onMouseDown={handleClickOutside}
            >

                <div onClick={closeModal} className="text-right"> ❌ </div>

                {children}
            </dialog>
        </>
    );
}

export default Modal;