import { Nurse } from "@ymm-hospital/nurse";

export class Doctor {
  get(id) {
    return {
      id,
      name: "Doctor",
      surname: "Doctor Surname",
    };
  }
  callNurse() {
    return "Nurse! Please come here!...a few moments..." + new Nurse().greet();
  }
}
