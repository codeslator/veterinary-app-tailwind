import { FC } from 'react';
import { Card } from 'flowbite-react';

interface PatientItemProps {}

const PatientItem: FC<PatientItemProps> = () => {
  return (
    <Card className="mb-2">
      <div>
        <p className="mb-1"><span className="font-bold">Name: </span>Red</p>
        <p className="mb-1"><span className="font-bold">Owner: </span>Joh Doe</p>
        <p className="mb-1"><span className="font-bold">E-mail: </span>jondoe@mail.com</p>
        <p className="mb-1"><span className="font-bold">Discharge Time: </span>1/11/2022</p>
        <p className="mb-1"><span className="font-bold">Symptom: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum voluptatem facere, non magnam animi! Libero recusandae tempore necessitatibus porro?</p>
      </div>
    </Card>
  )
}

export default PatientItem