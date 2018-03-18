import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as films from '../fixtures/films.json'
import * as  people '../fixtures/films.json'
import * as planets from '../fixtures/films.json'
import * as species from '../fixtures/films.json'
import * as starships from '../fixtures/films.json'
import * as vehicles from '../fixtures/films.json'

createConnection()
  .then(async connection => {
    
  })
  .catch(error => console.log(error))
