import { useState } from 'react';
import { Patient } from './global';
import { AppFooter, AppHeader, PatientForm, PatientList } from './views/components';

const VeterinaryApp = () => {
  const [patientList, setPatientList] = useState<Array<Patient>>([]);
  const [currentPatient, setCurrentPatient] = useState<Patient | undefined>();

  return (
    <div className="relative bg-gray-400">
      <AppHeader />
      <main className="my-2 px-5 md:px-10 w-full">
        <h1 className="font-bold text-4xl text-center mt-5">Patient Monitoring: <span className="text-indigo-700">Veterinary</span></h1>
        <section className="md:grid md:grid-cols-2 md:gap-6">
          <div className="w-full my-5">
            <p className="text-center my-2 font-bold text-lg">Add Patients & <span className="text-indigo-700">Manage</span></p>
            <PatientForm
              patientList={patientList}
              handlePatient={setPatientList}
              patient={currentPatient}
            />
          </div>
          <div className="w-full my-5">
            <p className="text-center my-2 font-bold text-lg">Manage Patients & <span className="text-indigo-700">Appointments</span></p>
            <PatientList
              patientList={patientList}
              handleCurrentPatient={setCurrentPatient}
            />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}

export default VeterinaryApp
