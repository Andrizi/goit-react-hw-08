import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <div className={css.container}>
      <div className={css.contacts}>
        <div className={css.contact}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.contact}>
          <FaPhone className={css.icon} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
