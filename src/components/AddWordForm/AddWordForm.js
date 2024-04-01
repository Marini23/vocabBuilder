import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Filters } from 'components/Filters/Filters';
import {
  AddBtn,
  BtnContainer,
  CancelBtn,
  ErrorMessage,
  Form,
  Input,
  Text,
  Title,
} from './AddWordForm.styled';

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

export const AddWordForm = ({ isClose }) => {
  const formik = useFormik({
    initialValues: {
      en: '',
      ua: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
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
        <Filters />
        <Input
          name="ua"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.en}
          placeholder="Працювати"
          autoComplete="off"
        />
        {formik.touched.en && formik.errors.en ? (
          <ErrorMessage>{formik.errors.en}</ErrorMessage>
        ) : null}
        <Input
          name="en"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ua}
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
