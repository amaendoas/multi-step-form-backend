import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { database } from "../database"
import AppError from "../utils/AppError"

const quoteCollection = collection(database, "quotes")

 export default class QuotesController {
  create(request, response) {
    const { name, email, phone, service, budget, project_name, project_description } = request.body

    if(!name) {
      throw new AppError("Preencha seu nome!")
    }

    if(!email) {
      throw new AppError("Indique um email para contato")
    }

    if(!phone) {
      throw new AppError("Indique um telefone para contato")
    }

    if(!service) {
      throw new AppError("Escolha uma opção de serviço!")
    }

    if(!project_name) {
      throw new AppError("Escolha um nome para seu projeto")
    }

    if(!project_description) {
      throw new AppError("Descreva seu projeto")
    }

    if(!budget) {
      throw new AppError("Escolha um range de orçamento")
    }

    else {

      addDoc(quoteCollection, {
        name: name,
        email: email,
        phone: phone,
        service: service, 
        projectName: project_name,
        projectDescription: project_description,
        budget: budget
      })
  
      response.status(201).json()
    }

  }
}


