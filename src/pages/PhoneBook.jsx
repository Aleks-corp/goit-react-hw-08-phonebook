import Section from '../components/Section/Section';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import { Container } from '../components/Container.styled';

export default function PhoneBook() {
  return (
    <Container>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}
