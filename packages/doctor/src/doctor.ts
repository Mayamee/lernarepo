import { Nurse } from "@ymm-hospital/nurse";

const nurse = new Nurse();

export class Doctor {
  get(id) {
    return {
      id,
      name: "Doctor",
      surname: "Doctor Surname",
      nurse,
    };
  }
  callNurse() {
    return "Nurse! Please come here!...a few moments..." + nurse.greet();
  }
}
