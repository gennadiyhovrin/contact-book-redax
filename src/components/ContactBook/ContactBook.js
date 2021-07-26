import ContactTable from "../ContactTable/ContactTable";
import ContactForm from "../ContactForm/ContactForm";
import useContactBook from "../../hooks/useContactBook";
import { connect } from "react-redux";
import { deleteItem, addItem } from "../../store/actions/contactBook";

function ContactBook({ contactItems, onItemDelete, onItemAdd }) {
  const { isForm, toggleForm } = useContactBook();

  return (
    <div className="row  justify-content-center">
      <div className="col-8">
        <ContactTable items={contactItems} onItemDelete={onItemDelete} />
        {isForm ? (
          <ContactForm onToggle={toggleForm} onItemAdd={onItemAdd} />
        ) : (
          <button type="button" className="btn btn-outline-info" onClick={toggleForm}>
            Новый контакт
          </button>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ contactItems }) {
  return {
    contactItems,
  };
}

const mapDispatchToProps = {
  onItemDelete: deleteItem,
  onItemAdd: addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactBook);
