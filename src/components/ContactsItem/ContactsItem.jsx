import { useDispatch, useSelector } from 'react-redux';
import { Thumb, Wrapper } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { selectIsLoadingDel } from 'redux/contacts/selectors';
import { LoadingButton } from '@mui/lab';
import { DeleteForever } from '@mui/icons-material';
import { deleteContact } from 'redux/contacts/operations';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';

const ContactsItem = ({ id, name, phone, email }) => {
  const idDelContact = useSelector(selectIsLoadingDel);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Thumb>
        <AssignmentIndRoundedIcon
          color="primary"
          sx={{
            mr: '30px',
          }}
        />
        {name}
      </Thumb>
      <Thumb>{email}</Thumb>
      <Thumb>{phone}</Thumb>
      <LoadingButton
        type="button"
        loading={idDelContact === id}
        variant="contained"
        onClick={() => dispatch(deleteContact(id))}
        sx={{
          p: 0,
          m: 0,
          minWidth: '35px',
          height: '35px',
          borderRadius: '10px',
          border: '1px solid #CDCDCD)',
          boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <DeleteForever />
      </LoadingButton>
    </Wrapper>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
