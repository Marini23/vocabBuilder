import { CiSearch } from 'react-icons/ci';
import Select, { components } from 'react-select';
import { ThemeContext } from 'styled-components';
import { useContext, useState } from 'react';
import {
  ButtonFilter,
  Fieldset,
  FormFilter,
  InputFilter,
  InputRadio,
} from './Filters.styled';
import { Link } from 'react-router-dom';

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
  const [isVerbSelect, setIsVerbSelect] = useState(false);
  const theme = useContext(ThemeContext);
  const handleSubmit = selectedOption => {
    const value = selectedOption.value;
    console.log(value);
    if (value === 'verb') {
      setIsVerbSelect(true);
    } else {
      setIsVerbSelect(false);
    }
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
        onChange={handleSubmit}
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
            marginBottom: 8,
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
      {isVerbSelect && (
        <Fieldset>
          <div>
            <input
              type="radio"
              id="regular"
              name="verb"
              value="regular"
              defaultChecked
            />
            <label htmlFor="regular">Regular</label>
          </div>
          <div>
            <input type="radio" id="irregular" name="verb" value="irregular" />
            <label htmlFor="irregular">Irregular</label>
          </div>
        </Fieldset>
      )}
    </div>
  );
};
