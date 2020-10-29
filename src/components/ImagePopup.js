import React from 'react';

function ImagePopup() {
    return (
        <>
            <div className="modal modal_type_picture">
                <div className="modal__container_type-picture">
                    <button type="reset" className="modal__close-button modal__close-button_type-picture"></button>
                    <figure>
                        <img className="modal__image" src="#" alt="" />
                        <figcaption className="modal__caption"></figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default ImagePopup;