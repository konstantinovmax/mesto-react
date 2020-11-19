import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <>
            <figure className="element" key={ props.card._id }>
                <button type="button" className="element__delete" />
                <img className="element__image" src={ props.card.link } alt={ props.card.name } onClick={ handleClick }/>
                <div className="element__caption-container">
                    <h2 className="element__caption">{ props.card.name }</h2>
                    <div className="element__like-area">
                        <button type="button" className="element__like-button" />
                        <output className="element__like-numbers">{ props.card.likes.length }</output>
                    </div>
                </div>
            </figure>
        </>
    );
}

export default Card;