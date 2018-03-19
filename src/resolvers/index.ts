import { getRepository } from 'typeorm'
import { Person } from '../entity/Person'

export const resolvers = {
  Query: {
    person: async (_, { id }) => getRepository(Person).findOneById(id),
  },
}
