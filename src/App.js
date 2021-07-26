import { useEffect } from 'react';
import ContactBook from './components/ContactBook/ContactBook'
import { fetchContacts } from './store/actions/contactBook';
import { useDispatch } from 'react-redux';


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  },[])
  return (
    <>
      <ContactBook />
    </>
  );
}


