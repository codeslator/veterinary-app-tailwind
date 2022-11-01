import { FC, Fragment } from 'react';
import { Label, TextInput, Card, Textarea, Button } from 'flowbite-react';
import { Formik } from 'formik';
import { PATIENT_INITIAL_VALUES } from '../validations/patientValidations';

interface PatientFormProps { }

const PatientForm: FC<PatientFormProps> = () => {

  const handleSubmit = (values: typeof PATIENT_INITIAL_VALUES) => {
    console.log(values)
  }

  return (
    <Card>
      <Formik
        initialValues={PATIENT_INITIAL_VALUES}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldError,
          isValid
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="pet_name"
                  value="Pet Name"
                />
              </div>
              <TextInput
                id="pet_name"
                name="pet_name"
                type="text"
                sizing="sm"
                value={values.pet_name}
                onChange={handleChange}
                // color="green"
                // helperText={<Fragment><span className="font-medium">Alright!</span>{' '}Username available!</.Fragment>}
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="owner_name"
                  value="Owner Name"
                />
              </div>
              <TextInput
                id="owner_name"
                name="owner_name"
                type="text"
                sizing="sm"
                value={values.owner_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="email"
                  value="E-mail"
                />
              </div>
              <TextInput
                id="email"
                name="email"
                type="email"
                sizing="sm"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="symptom"
                  value="Symptom"
                />
              </div>
              <Textarea
                id="symptom"
                name="symptom"
                placeholder="Leave a comment..."
                rows={2}
                value={values.symptom}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="discharge_time"
                  value="Discharge Time"
                />
              </div>
              <TextInput
                id="discharge_time"
                name="discharge_time"
                type="date"
                sizing="sm"
                value={values.discharge_time.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Button className="w-full uppercase" type="submit">
                Add Patient
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default PatientForm;