import { Doctor } from "@ymm-hospital/doctor";
import { Patient } from "@ymm-hospital/patient";
import { Scheduler } from "@ymm-hospital/scheduler";
import { Nurse } from "@ymm-hospital/nurse";

console.log(
  JSON.stringify({
    doctor: new Doctor().get("asdf"),
    doctors_nurse: new Doctor().get("asdf").nurse.greet(),
    patient: new Patient().get("test"),
    scheduler: new Scheduler(),
    nurse: new Nurse().greet(),
  })
);

console.log(new Doctor().callNurse());
