import { Dispatch, FC, SetStateAction, SVGProps } from 'react';
import { Label, TextInput, Card, Textarea, Button, Spinner, Alert } from 'flowbite-react';
import { Formik } from 'formik';
import AlertIcon from 'mdi-react/AlertIcon';
import { PATIENT_INITIAL_VALUES, PATIENT_VALIDATION_SCHEMA } from '../validations/patientValidations';
import { Patient } from '../../global';

interface PatientFormProps {
  handlePatient: Dispatch<SetStateAction<Array<Patient>>>;
}

const PatientForm: FC<PatientFormProps> = ({ handlePatient }) => {

  

  const handleSubmit = (values: typeof PATIENT_INITIAL_VALUES) => {
    console.log(values)
  };

  return (
    <Card>
      <Formik
        initialValues={PATIENT_INITIAL_VALUES}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={PATIENT_VALIDATION_SCHEMA}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldError,
          isValid
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {!isValid && (
              <Alert
                color="failure"
                icon={AlertIcon as FC<SVGProps<SVGSVGElement>>}
              >
                <span>
                  <span className="font-medium">
                    Info alert!{' '}
                  </span>
                  Please, check the fields...
                </span>
              </Alert>
            )}
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
                value={values.pet_name}
                onChange={handleChange}
                helperText={(errors.pet_name && touched.pet_name) && <span className="font-medium text-red-600">{errors.pet_name}</span>}
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
                value={values.owner_name}
                onChange={handleChange}
                helperText={(errors.owner_name && touched.owner_name) && <span className="font-medium text-red-600">{errors.owner_name}</span>}
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
                value={values.email}
                onChange={handleChange}
                helperText={(errors.email && touched.email) && <span className="font-medium text-red-600">{errors.email}</span>}
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
                className="resize-none"
                helperText={(errors.symptom && touched.symptom) && <span className="font-medium text-red-600">{errors.symptom}</span>}
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
                value={values.discharge_time.toString()}
                onChange={handleChange}
                helperText={(errors.discharge_time && touched.discharge_time) && <span className="font-medium text-red-600">{errors.discharge_time}</span>}
              />
            </div>
            <div className="mt-3">
              <Button className="w-full uppercase" type="submit" disabled={!isValid}>
                {isSubmitting && (
                  <div className="mr-3">
                    <Spinner
                      size="sm"
                      light={true}
                    />
                  </div>
                )}
                {isSubmitting ? 'Loading...' : 'Add Patient'}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default PatientForm;