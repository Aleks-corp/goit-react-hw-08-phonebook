import Section from '../components/Section/Section';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import { Container } from '../components/Container.styled';

export default function PhoneBook() {
  return (
    <Container>
      <Section title="Add new contact">
        <PhonebookForm />
      </Section>
      <Section title="Contacts list">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}
