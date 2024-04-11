import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AddBtn,
  BtnContainer,
  CancelBtn,
  ErrorMessage,
  FlagContainer,
  Form,
  Input,
  TextFlag,
} from './EditWordForm.styled.js';
import ukraineIcon from '../../images/ukraine.svg';
import ukIcon from '../../images/united_kingdom.svg';

import { useDispatch } from 'react-redux';
import { addWord } from '../../redux/wordsSlice/wordsOperations';

const enRegExp = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const uaRegExp = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

const formSchema = Yup.object().shape({
  en: Yup.string()
    .matches(enRegExp, 'String is not valid')
    .required('String is required'),
  ua: Yup.string()
    .matches(uaRegExp, 'String is not valid')
    .required('String is required'),
});

export const AddWordForm = ({ selectedWord, isClose }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      en: selectedWord.en,
      ua: selectedWord.ua,
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        const payload = {
          en: values.en,
          ua: values.ua,
        };
        dispatch(addWord(payload));
        alert('Word saved successfully');
        isClose();
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
          <AddBtn type="submit">Save</AddBtn>
          <CancelBtn type="button">Cancel</CancelBtn>
        </BtnContainer>
      </Form>
    </>
  );
};
