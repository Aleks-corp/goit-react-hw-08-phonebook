import {
  Container,
  ContainerPhoneList,
  Section,
} from 'components/Container/Container';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export default function PhoneBook() {
  return (
    <Section>
      <Container title="Add new contact">
        <PhonebookForm />
      </Container>
      <ContainerPhoneList title="Contacts list">
        <Filter />
        <ContactsList />
      </ContainerPhoneList>
    </Section>
  );
}
