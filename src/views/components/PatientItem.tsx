import { FC } from 'react';
import { Card } from 'flowbite-react';
import { Patient } from '../../global';

interface PatientItemProps {
  patient: Patient;
}

const PatientItem: FC<PatientItemProps> = ({ patient }) => {
  const { pet_name, owner_name, email, discharge_time, symptom } = patient;
  return (
    <Card className="mb-2">
      <div>
        <p className="mb-1"><span className="font-bold">Name: </span>{pet_name}</p>
        <p className="mb-1"><span className="font-bold">Owner: </span>{owner_name}</p>
        <p className="mb-1"><span className="font-bold">E-mail: </span>{email}</p>
        <p className="mb-1"><span className="font-bold">Discharge Time: </span>{discharge_time}</p>
        <p className="mb-1"><span className="font-bold">Symptom: </span>{symptom}</p>
      </div>
    </Card>
  )
}

export default PatientItem