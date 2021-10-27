const PopupWithForm = ({
  name,
  isOpen,
  onSubmit,
  title,
  children,
  onClose,
}) => {
  return (
    <>
      <div className={`modal modal_type_${name} ${isOpen && "modal_is-open"}`}>
        <form
          name=""
          action="#"
          className={`modal__container modal__container_type_${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="modal__title">{title}</h2>
          {children}
          <button type="submit" className="modal__save-button">
            Сохранить
          </button>
          <button
            type="reset"
            className="modal__close-button"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </>
  );
};

export default PopupWithForm;
