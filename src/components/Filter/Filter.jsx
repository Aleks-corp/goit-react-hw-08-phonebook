import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <FormControl size="small" color="primary">
        <InputLabel htmlFor="filter">Find contacts by name</InputLabel>
        <OutlinedInput
          size="small"
          id="filter"
          label="filter"
          name="filter"
          type="text"
          variant="outlined"
          title="Enter contact Name or Lastname"
          value={filterValue}
          onChange={e => dispatch(addFilter(e.target.value))}
          sx={{
            width: '300px',
            mb: 1,
            mr: 2,
          }}
        />
      </FormControl>

      <Button
        size="small"
        variant="contained"
        sx={{
          p: 1,
        }}
        type="reset"
        onClick={() => dispatch(removeFilter())}
      >
        Clear filter
      </Button>
    </div>
  );
};

export default Filter;
