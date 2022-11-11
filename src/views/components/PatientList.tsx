import { Dispatch, FC, SetStateAction } from 'react'
import { Patient } from '../../global';
import PatientItem from './PatientItem';

interface PatientListProps {
  patientList: Array<Patient>;
  handleCurrentPatient: Dispatch<SetStateAction<Patient | undefined>>;
  deletePatient: (id: string) => void;
}

const PatientList: FC<PatientListProps> = ({ patientList, handleCurrentPatient, deletePatient }) => {
  return (
    <>
      {(patientList.length !== 0) ? (
        <div className={`md:h-[73vh] ${(patientList.length > 2) && 'md:overflow-y-scroll'}`}>
          {patientList.map((patient: Patient) => (
            <PatientItem
              patient={patient} key={patient.id}
              handleCurrentPatient={handleCurrentPatient}
              deletePatient={deletePatient}
            />
          ))}
        </div>
      ) : (
        <p className="text-center my-2 font-bold text-lg">Patient list is empty.</p>
      )}
    </>
  );
};

export default PatientList;