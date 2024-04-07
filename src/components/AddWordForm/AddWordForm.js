import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import {
  AddBtn,
  BtnContainer,
  CancelBtn,
  ErrorMessage,
  Fieldset,
  FlagContainer,
  Form,
  Input,
  Label,
  Text,
  TextFlag,
  Title,
} from './AddWordForm.styled';
import ukraineIcon from '../../images/ukraine.svg';
import ukIcon from '../../images/united_kingdom.svg';
// import radioBtn from '../../images/radioButton.svg';
// import radioBtnChecked from '../../images/radioButton_checked.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../redux/wordsSlice/wordsOperations';

const enRegExp = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const uaRegExp = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

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

const formSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required')
    .oneOf(data, 'Invalid category'),
  isIrregular: Yup.boolean(),
  en: Yup.string()
    .matches(enRegExp, 'String is not valid')
    .required('String is required'),
  ua: Yup.string()
    .matches(uaRegExp, 'String is not valid')
    .required('String is required'),
});

const options = data.map(item => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1),
}));

export const AddWordForm = ({ isClose }) => {
  const dispatch = useDispatch();
  const [isVerbSelect, setIsVerbSelect] = useState(false);
  const handleVerb = selectedOption => {
    const value = selectedOption.value;
    if (value === 'verb') {
      setIsVerbSelect(true);
    } else {
      setIsVerbSelect(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      category: '',
      isIrregular: false,
      en: '',
      ua: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        const payload = {
          category: values.category,
          en: values.en,
          ua: values.ua,
        };
        if (values.category === 'verb') {
          payload.isIrregular = values.isIrregular;
        }
        dispatch(addWord(payload));
        alert('Word added successfully');
        isClose();
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Add word</Title>
        <Text>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </Text>
        <Select
          value={options.find(
            option => option.value === formik.values.category
          )} // Set value based on formik values
          onChange={selectedOption => {
            formik.setFieldValue('category', selectedOption.value);
            handleVerb(selectedOption);
          }} // Update formik field
          onBlur={formik.handleBlur}
          id="cacategory"
          placeholder={'Category'}
          name="category"
          options={options}
          isSearchable={false}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              cursor: 'pointer',
              height: 48,
              borderRadius: 14,
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: '#FCFCFC',
              outline: 'none',
              paddingLeft: 12,
              paddingRight: 12,
              marginBottom: 8,
              backgroundColor: 'transparent',
              border: state.isSelected
                ? '2px solid black'
                : '2px solid #D1D5DB ',
              borderColor: state.isFocused ? 'black' : '#D1D5DB',
              boxShadow: state.isFocused ? 'none' : 'none',
              ':hover': {
                border: '3px solid #D1D5DB',
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
            singleValue: base => ({
              ...base,
              color: '#FCFCFC', // Change text color of the selected option
            }),
            indicatorSeparator: () => null,
          }}
        />
        {isVerbSelect && (
          <Fieldset>
            <div>
              <Label>
                <input
                  type="radio"
                  name="isIrregular"
                  value="false"
                  // checked={!formik.values.isIrregular} // Check if the value is false
                  onChange={formik.handleChange} // Update Formik field
                  defaultChecked
                />
                Regular
              </Label>
            </div>
            <div>
              <Label>
                <input
                  type="radio"
                  name="isIrregular"
                  value="true"
                  // checked={formik.values.isIrregular} // Check if the value is true
                  onChange={formik.handleChange} // Update Formik field
                />
                Irregular
              </Label>
            </div>
          </Fieldset>
        )}
        <FlagContainer>
          <img src={ukraineIcon} alt="Ukraine flag" />
          <TextFlag>Ukrainian</TextFlag>
        </FlagContainer>
        <Input
          name="ua"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ua}
          placeholder="Працювати"
          autoComplete="off"
        />
        {formik.touched.en && formik.errors.en ? (
          <ErrorMessage>{formik.errors.en}</ErrorMessage>
        ) : null}
        <FlagContainer>
          <img src={ukIcon} alt="Ukraine flag" />
          <TextFlag>English</TextFlag>
        </FlagContainer>
        <Input
          name="en"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.en}
          placeholder="Work"
          autoComplete="off"
        />
        {formik.touched.ua && formik.errors.ua ? (
          <ErrorMessage>{formik.errors.ua}</ErrorMessage>
        ) : null}
        <BtnContainer>
          <AddBtn type="submit">Add</AddBtn>
          <CancelBtn type="button">Cancel</CancelBtn>
        </BtnContainer>
      </Form>
    </>
  );
};
