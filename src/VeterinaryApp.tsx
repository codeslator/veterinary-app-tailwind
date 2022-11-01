import { AppFooter, AppHeader, PatientForm, PatientList } from './views/components';

const VeterinaryApp = () => {
  return (
    <div className="h-screen relative">
      <AppHeader />
      <main className="my-2 px-5 md:px-10 w-full">
        <h1 className="font-bold text-4xl text-center">Patient Monitoring: <span className="text-indigo-700">Veterinary</span></h1>
        <section className="md:grid md:grid-cols-2 md:gap-6">
          <div className="w-full my-5">
            <p className="text-center my-2 font-bold text-lg">Add Patients & <span className="text-blue-600">Manage</span></p>
            <PatientForm />
          </div>
          <div className="w-full my-5">
            <p className="text-center my-2 font-bold text-lg">Manage Patients & <span className="text-blue-600">Appointments</span></p>
            <PatientList />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}

export default VeterinaryApp
