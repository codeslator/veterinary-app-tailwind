import { Dispatch, FC, SetStateAction } from 'react';
import { Label, TextInput, Card, Textarea, Button, Spinner } from 'flowbite-react';
import { Formik, FormikState } from 'formik';
import { PATIENT_INITIAL_VALUES, PATIENT_VALIDATION_SCHEMA } from '../validations/patientValidations';
import { Patient } from '../../global';

interface PatientFormProps {
  handlePatient: Dispatch<SetStateAction<Array<Patient>>>;
  patient: Patient | undefined;
}

const PatientForm: FC<PatientFormProps> = ({ handlePatient, patient }) => {

  const handleSubmit = (values: typeof PATIENT_INITIAL_VALUES, setSubmitting: (isSubmitting: boolean) => void, resetForm: (nextState?: Partial<FormikState<Patient>> | undefined) => void) => {
    handlePatient((prev: Array<Patient>) => [...prev, { ...values, id: Date.now().toString() }]);
    setSubmitting(false);
    resetForm(PATIENT_INITIAL_VALUES as Partial<FormikState<Patient>>);
  };

  return (
    <Card>
      <Formik
        initialValues={patient ? patient : PATIENT_INITIAL_VALUES}
        onSubmit={(values, { setSubmitting, resetForm }) => handleSubmit(values, setSubmitting, resetForm)}
        validationSchema={PATIENT_VALIDATION_SCHEMA}
        enableReinitialize        
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
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
                {isSubmitting ? 'Loading...' : (patient?.id) ? 'Update Patient' : 'Add Patient'}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default PatientForm;