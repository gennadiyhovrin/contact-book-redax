import ContactItem from "../ContactItem/ContactItem";
export default function ContactTable({items,onItemDelete}) {
  
  return (
    <table className="table">
      <thead>
        {items.map((item) => (
          <ContactItem key={item.id} item={item} onItemDelete={onItemDelete}/>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
}
