import express from 'express';
import { AddAppointMentCollection, AppointmentPatientsList, appointMentByDate, DoctorList, IsDoctor, AddServices, ServicesList } from '../controllers/doctor.js';
import { login, register, viewUser } from '../controllers/user.js';

const router = express.Router();

router.post('/auth/appointByDate', appointMentByDate);
router.post('/auth/addAppointMent', AddAppointMentCollection);
router.get('/auth/patients', AppointmentPatientsList);
router.post('/auth/addServices', AddServices);
router.get('/auth/ourServices', ServicesList);

router.post('/auth/isDoctor', IsDoctor);
router.get('/auth/users', viewUser);
router.get('/auth/doctors', DoctorList);

//auth
router.post('/auth/register', register);
router.post('/auth/login', login);
export default router;