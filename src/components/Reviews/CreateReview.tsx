import { View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useCreateReview, ReviewProps } from "../../hooks/useCreateReview";
import { FormikTextInput, MainButton, Title } from "../UI";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: "10%",
    backgroundColor: "white",
    height: "100%",
  },
  formContainer: {
    gap: 10,
  },
});

const validationSchema = yup.object({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required"),
  text: yup.string(),
});

export const CreateReview = () => {
  const navigate = useNavigate();
  const { createReview } = useCreateReview();

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  const handleSubmit = async (values: ReviewProps) => {
    const { repositoryId } = await createReview(values);
    navigate(`/repository/${repositoryId}`);
  };

  return (
    <View style={styles.container}>
      <Title>Create a review</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ submitForm }) => (
          <View style={styles.formContainer}>
            <FormikTextInput
              name='ownerName'
              placeholder='Repository owner name'
              inputMode='text'
            />
            <FormikTextInput
              name='repositoryName'
              placeholder='Repository name'
              inputMode='text'
            />
            <FormikTextInput
              name='rating'
              keyboardType='numeric'
              inputMode='numeric'
              placeholder='Rating between 0 and 100'
            />
            <FormikTextInput name='text' placeholder='Review' multiline rows={2} />
            <MainButton onPress={submitForm}>Create a review</MainButton>
          </View>
        )}
      </Formik>
    </View>
  );
};
