import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Drink from '../models/drink.js'
import drinkData from './data/drinks.js'
import User from '../models/user.js'
import userData from './data/users.js'
import ShoppedDrink from '../models/shoppedDrink.js'
import shoppedDrinkData from './data/shoppedDrink.js'
import suggestedDrinks from './data/suggestedDrinks.js'
import SuggestedDrink from '../models/suggestedDrink.js'

const seedDatabase = async () => {
  try {
    // connect to db 
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 DB connected in seeds')

    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍🏽 DB dropped')

    // create users
    const users = await User.create(userData)
    console.log(users)

    // create drinkData with added ownwer field 
    const drinksWithAddedUsers = drinkData.map(drink => {
      return { ...drink, owner: users[0]._id }
    })
    console.log(users.length)

    // create drinks using drinkData
    const drinks = await Drink.create(drinksWithAddedUsers)
    console.log(`🌱 DB seeded with ${drinks.length} drinks`)

    // create suggestedDrink with owner field
    const suggestedDrinkWithOwner = suggestedDrinks.map(drink => {
      return { ...drink, owner: users[1]._id }
    })

    // create suggested drink
    const createSuggestedDrinks = await SuggestedDrink.create(suggestedDrinkWithOwner)
    console.log(`🌱 DB seeded with ${createSuggestedDrinks.length} drinks`)

    // create shoppedDrinkData with added ownwer field 
    const shoppedDrinksWithData = shoppedDrinkData.map(drink => {
      return { ...drink, owner: users[0]._id }
    })

    // create shoppedDrinks
    const shoppedDrinks = await ShoppedDrink.create(shoppedDrinksWithData)
    console.log(`🌱 DB seeded with ${shoppedDrinks.length} drinks`)

    // closing the connection 
    await mongoose.connection.close()
    console.log('✌🏽 bye')

  } catch (err) {
    console.log('Error:', err)
    console.log('🆘 something has gone wrong')
    await mongoose.connection.close()
    console.log('💃🏽 bye')
  }
}

seedDatabase()