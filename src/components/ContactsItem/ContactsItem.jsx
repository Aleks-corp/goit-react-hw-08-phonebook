import { useDispatch, useSelector } from 'react-redux';
import { Thumb } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { selectIsLoadingDel } from 'redux/contacts/selectors';
import { LoadingButton } from '@mui/lab';
import { DeleteForever } from '@mui/icons-material';
import { deleteContact } from 'redux/contacts/operations';

const ContactsItem = ({ id, name, number }) => {
  const idDelContact = useSelector(selectIsLoadingDel);
  const dispatch = useDispatch();
  return (
    <>
      <Thumb>
        {name}: {number}
      </Thumb>
      <LoadingButton
        size="small"
        type="button"
        loading={idDelContact === id}
        variant="contained"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteForever />
      </LoadingButton>
    </>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
