import { FC } from 'react'
import PatientItem from './PatientItem';

interface PatientListProps { }

const PatientList: FC<PatientListProps> = () => {
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