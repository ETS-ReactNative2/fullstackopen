import express from 'express';
import patientService from '../services/patientService';
import createPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  // res.send(patientService.getPublicPatients());
  res.send(patientService.getPatients());
});

router.get('/:id', (req, res) => {
  const patient = patientService.getPatient(req.params.id);
  if (!patient) return res.status(404).send('No patient with that id');
  return res.send(patient);
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const patient = createPatient(req.body);
    const addedPatient = patientService.addPatient(patient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;