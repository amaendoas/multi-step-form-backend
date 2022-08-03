import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { fireBaseApp } from "../database"
 
const database = getFirestore(fireBaseApp)
const userCollection = collection(database, "users")

 export default class UsersController {
  async create(request, response) {
    const { name, email, phone, password } = request.body

    await addDoc(userCollection, {
      name: name,
      email: email,
      phone: phone,
      password: password
    })

    response.status(201).json({ name, email, phone, password })
  }
}


