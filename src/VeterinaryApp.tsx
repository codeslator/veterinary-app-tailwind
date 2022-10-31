import { AppFooter, AppHeader, PatientForm, PatientList } from './views/components';

const VeterinaryApp = () => {
  return (
    <div className="h-screen relative">
      <AppHeader />
      <main className="my-8 px-10 w-full">
        <h1 className="font-bold text-4xl text-center">Patient Monitoring: <span className="text-purple-500">Veterinary</span></h1>
        <section className="md:grid md:grid-cols-2 md:gap-6">
          <div className="w-full my-5">
            <p className="text-center my-2 font-bold text-lg">Add Patients & Manage</p>
            <PatientForm />
          </div>
          <div className="w-full my-5">
            <PatientList />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}

export default VeterinaryApp
