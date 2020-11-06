import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getAllCards()])
        .then(([user, cards]) => {
            setUserName(user.name);
            setUserDescription(user.about);
            setUserAvatar(user.avatar);
            setCards(cards);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={ userAvatar } alt="Аватар пользователя" onClick={ props.onEditAvatar } />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-edit">
                            <h1 className="profile__name">{ userName }</h1>
                            <button type="button" className="profile__edit-button" onClick={ props.onEditProfile }></button>
                        </div>
                        <p className="profile__description">{ userDescription }</p>
                    </div>           
                    <button type="button" className="profile__add-button" onClick={ props.onAddPlace }></button>
                </section>
                <section className="elements">
                    { cards.map((card) => (
                        <Card 
                        card={ card }
                        key={ card._id }
                        onCardClick={ props.onCardClick }
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export default Main;