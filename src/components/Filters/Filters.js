import { CiSearch } from 'react-icons/ci';
import Select, { components } from 'react-select';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { ButtonFilter, FormFilter, InputFilter } from './Filters.styled';

const data = [
  'verb',
  'participle',
  'noun',
  'adjective',
  'pronoun',
  'numerals',
  'adverb',
  'preposition',
  'conjunction',
  'phrasal verb',
  'functional phrase',
];

const options = data.map(item => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1),
}));

export const Filters = () => {
  const theme = useContext(ThemeContext);
  const handleSubmit = selectedOption => {
    const value = selectedOption.value;
    //   dispatch(setSelectedFilter(value));
  };
  return (
    <div>
      <FormFilter>
        <InputFilter type="text" placeholder="Find the word" name="filter" />
        <ButtonFilter type="submit">
          <CiSearch style={{ width: '20px', height: '20px' }} />
        </ButtonFilter>
      </FormFilter>

      <Select
        id="cacategory"
        placeholder={'Category'}
        name="category"
        options={options}
        isSearchable={false}
        // onChange={selectedOption => {
        //   const selectedValue = selectedOption ? selectedOption.value : null;
        //   console.log(selectedValue);
        //   input.onChange(selectedValue);
        // }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: 48,
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.5,
            color: '#121417',
            outline: 'none',
            paddingLeft: 12,
            paddingRight: 12,
            marginBottom: 20,
            border: state.isSelected
              ? '1px solid black'
              : '1px solid rgba(121, 4, 17, 0.1) ',
            borderColor: state.isFocused ? 'black' : 'rgba(121, 4, 17, 0.1)',
            boxShadow: state.isFocused ? 'none' : 'none',
            ':hover': {
              // Add hover effect
              borderColor: '#121417', // Change border color on hover
              boxShadow: 'none',
            },
          }),
          menu: baseStyles => ({
            ...baseStyles,
            color: 'rgba(18, 20, 23, 0.5)',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.25,
            backgroundColor: '#FFFFFF',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            fontWeight: 500,
            color: state.isSelected
              ? 'rgba(18, 20, 23, 0.2)'
              : 'rgba(18, 20, 23, 0.2)',
            backgroundColor: state.isFocused ? '#FFFFFF' : '#FFFFFF',
            ':hover': {
              backgroundColor: '#FFFFFF',
              color: '#121417',
            },
          }),
          indicatorSeparator: () => null,
        }}
      />
    </div>
  );
};
