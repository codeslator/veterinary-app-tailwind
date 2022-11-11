import { Dispatch, FC, SetStateAction } from 'react';
import { Card, Button } from 'flowbite-react';
import { Patient } from '../../global';

interface PatientItemProps {
  patient: Patient;
  handleCurrentPatient: Dispatch<SetStateAction<Patient | undefined>>;
  deletePatient: (id: string) => void;
}

const PatientItem: FC<PatientItemProps> = ({ patient, handleCurrentPatient, deletePatient }) => {
  const { pet_name, owner_name, email, discharge_time, symptom, id } = patient;

  const handleDelete = () => {
    const response = confirm('Are you sure you want to delete this record?');
    if (response) {
      deletePatient(id);
    }
  };

  return (
    <Card className="mb-2">
      <div>
        <p className="mb-1"><span className="font-bold">Name: </span>{pet_name}</p>
        <p className="mb-1"><span className="font-bold">Owner: </span>{owner_name}</p>
        <p className="mb-1"><span className="font-bold">E-mail: </span>{email}</p>
        <p className="mb-1"><span className="font-bold">Discharge Time: </span>{discharge_time}</p>
        <p className="mb-1"><span className="font-bold">Symptom: </span>{symptom}</p>
        <div className="flex flex-row justify-between mt-5">
          <Button
            className="bg-blue-500 hover:bg-blue-700 focus:ring-blue-600 uppercase px-5"
            onClick={() => handleCurrentPatient(patient)}
          >
            Edit
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-700 focus:ring-red-600 uppercase px-5"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default PatientItem