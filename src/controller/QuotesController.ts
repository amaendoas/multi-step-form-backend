import { deleteDoc, updateDoc, doc, addDoc, getDoc, collection, getDocs } from 'firebase/firestore'
import 'express-async-errors'
import { database } from "../database"
import AppError from "../utils/AppError"
import Quote from "../models/quote"

const quoteCollection = collection(database, "quotes")

 export default class QuotesController {
  async create(request, response) {
    const { name, email, phone, service, budget, projectName, projectDescription, createdAt } = request.body
    
    if(!name) {
      throw new AppError("Preencha seu nome!")
    }
    if(!email) {
      throw new AppError("Indique um email para contato")
    }
    if(!phone) {
      throw new AppError("Indique um telefone   para contato")
    }
    if(!service) {
      throw new AppError("Escolha uma opção de serviço!")
    }
    if(!projectName) {
      throw new AppError("Escolha um nome para seu projeto")
    }
    if(!projectDescription) {
      throw new AppError("Descreva seu projeto")
    }
    if(!budget) {
      throw new AppError("Escolha um range de orçamento")
    } 

    try{
     await addDoc(quoteCollection, {
        name,
        email,
        phone,
        service, 
        projectName,
        projectDescription,
        budget,
        createdAt
        })
    
        response.status(201).json()
      } catch {
        throw new AppError("Não foi possível cadastrar", 400)
       }
    }

  async index(request, response) {
    try {
      const data = await getDocs(quoteCollection)
      const quotes: any[] = []
      if(data.empty) {
        throw new AppError("Você não tem nenhum orçamento solicitado!", 400)
      } else {
        data.forEach(doc => {
          const quote = new Quote(
            doc.id,
            doc.data().name,
            doc.data().email,
            doc.data().phone,
            doc.data().service,
            doc.data().projectName,
            doc.data().projectDescription,
            doc.data().budget
          );
          quotes.push(quote)
        })
        response.json(quotes)
      }
    } catch {
      throw new AppError("Não foi possível listar!", 400)
    }
  }

  async show(request, response) {
    try {
      const id = request.params.id
      const quote = await doc(database, "quotes", id)
      const data = await getDoc(quote)

     if(!data.exists()) {
        throw new AppError("Não encontramos esse orçamento!", 400)
      } else {
        response.json(data.data())
      }
    } catch {
      throw new AppError("Não encontramos esse orçamento!", 400)
    }
  }

  async update(request, response) {
    try {
      const id = request.params.id
      const
        { name,
          email,
          phone,
          service,
          projectName,
          projectDescription,
          budget,
          createdAt
        } = request.body
      const quoteRef = doc(database, "quotes", id)
      await updateDoc(quoteRef, { 
        "name": name,
        "email": email, 
        "phone": phone,
        "service": service,
        "projectName": projectName,
        "projectDescription": projectDescription,
        "budget": budget,
        "createdAt": createdAt
      })
      response.json()
    } catch {
      throw new AppError("Não foi possível fazer o update!", 400)
    }
  }

  async delete(request, response){
    const id = request.params.id
    const quoteRef = await doc(database, "quotes", id)
    try {
      await deleteDoc(quoteRef)
      response.json()
    } catch {
      throw new AppError("Não foi possível deletar seu orçamento", 400)
    }
  }
}


