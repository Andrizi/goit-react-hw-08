import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.contacts}>
        <div className={css.contact}>
          <FaUser className={css.icon} />
          <p className={css.text}>{user.name}</p>
        </div>
        <div className={css.contact}>
          <FaPhone className={css.icon} />
          <p className={css.text}>{user.number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(user.id))}
      >
        Delete
      </button>
    </div>
  );
}
