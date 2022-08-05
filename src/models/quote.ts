
export default class Quote {
  id: string 
  name: string 
  email: string 
  phone: number
  service: string
  projectName: string
  projectDescription: string
  budget: string
  constructor(id, name, email, phone, service, projectName, projectDescription, budget) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.service = service;
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.budget = budget
  }
}