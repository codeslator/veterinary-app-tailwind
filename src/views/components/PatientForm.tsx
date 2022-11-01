import { FC } from 'react';
import { Label, TextInput, Card, Textarea, Button } from 'flowbite-react';

interface PatientFormProps { }

const PatientForm: FC<PatientFormProps> = () => {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="pet_name"
              value="Pet Name"
            />
          </div>
          <TextInput
            id="pet_name"
            name="pet_name"
            type="text"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="owner_name"
              value="Owner Name"
            />
          </div>
          <TextInput
            id="owner_name"
            name="owner_name"
            type="text"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="email"
              value="E-mail"
            />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            sizing="sm"
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="symptom"
              value="Symptom"
            />
          </div>
          <Textarea
            id="symptom"
            name="symptom"
            placeholder="Leave a comment..."
            rows={2}

          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="discharge_time"
              value="Discharge Time"
            />
          </div>
          <TextInput
            id="discharge_time"
            name="discharge_time"
            type="date"
            sizing="sm"
          />
        </div>
        <div className="mt-3">
          <Button className="w-full uppercase">
            Add Patient
          </Button>
        </div>
      </div>
    </Card>

  );
};

export default PatientForm;