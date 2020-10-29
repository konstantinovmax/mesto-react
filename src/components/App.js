import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
   return (
    <>
      <body class="root">
        <div className="root__content">
            <Header />
            <Main />
            <Footer />
            <PopupWithForm />
            <ImagePopup />            
        </div> 
      </body>
    </>
  );
}

export default App;
