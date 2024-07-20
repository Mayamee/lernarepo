export class Nurse {
  constructor() {
    console.log("Nurse constructor");
  }

  greet() {
    return "Hello! I'm a nurse. How can I help you?";
  }

  helpPatient() {
    return "I'm helping the patient.";
  }

  get(id) {
    return {
      id,
      name: "Nurse",
      surname: "Nurse Surname",
    };
  }
}
