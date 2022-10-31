import { AppFooter, AppHeader } from "./views/components";

const VeterinaryApp = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <AppHeader />
      <main></main>
      <AppFooter />
    </div>
  )
}

export default VeterinaryApp
