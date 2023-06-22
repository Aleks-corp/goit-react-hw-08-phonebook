import { Input } from 'components/PhonebookForm/PhonebookForm.styled';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';

const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(addFilter(e.target.value))}
        />
      </Label>
      <button type="reset" onClick={() => dispatch(removeFilter())}>
        Clear filter
      </button>
    </div>
  );
};

export default Filter;
