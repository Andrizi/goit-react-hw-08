import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContact = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <ul className={css.list}>
      {visibleContact.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact user={contact} />
        </li>
      ))}
    </ul>
  );
}
