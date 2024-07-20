import { Doctor } from "@ymm-hospital/doctor";
import { Patient } from "@ymm-hospital/patient";
import { Scheduler } from "@ymm-hospital/scheduler";

console.log(
  JSON.stringify({
    doctor: new Doctor().get("asdf"),
    patient: new Patient().get("test"),
    scheduler: new Scheduler(),
  })
);
