import * as Yup from 'yup';
import { Patient } from "../../global";

export const PATIENT_INITIAL_VALUES: Patient = {
  pet_name: '',
  owner_name: '',
  email: '',
  symptom: '',
  discharge_time: ''
}

export const PATIENT_VALIDATION_SCHEMA = Yup.object({
  pet_name: Yup.string().required(),
  owner_name: Yup.string().required(),
  email: Yup.string().email().required(),
  symptom: Yup.string().required(),
  discharge_time: Yup.string().required(),
})