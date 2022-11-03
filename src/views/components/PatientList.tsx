import { FC } from 'react'
import { Patient } from '../../global';
import PatientItem from './PatientItem';

interface PatientListProps {
  patientList: Array<Patient>
}

const PatientList: FC<PatientListProps> = ({ patientList }) => {
  return (
    <div className="md:h-[73vh] md:overflow-y-scroll">
      <PatientItem />
      <PatientItem />
      <PatientItem />
      <PatientItem />
    </div>
  );
};

export default PatientList;