import * as Dataloader from 'dataloader'
import { getRepository } from 'typeorm';
import { Film, Planet, Person, Specie, Starship, Vehicle } from './entity';

export const filmLoader = () => new Dataloader(ids => getRepository(Film).findByIds(ids))
export const planetLoader = () => new Dataloader(ids => getRepository(Planet).findByIds(ids))
export const personLoader = () => new Dataloader(ids => getRepository(Person).findByIds(ids))
export const specieLoader = () => new Dataloader(ids => getRepository(Specie).findByIds(ids))
export const starshipLoader = () => new Dataloader(ids => getRepository(Starship).findByIds(ids))
export const vehicleLoader = () => new Dataloader(ids => getRepository(Vehicle).findByIds(ids))

export default () => ({
  filmLoader: filmLoader(),
  planetLoader: planetLoader(),
  personLoader: personLoader(),
  specieLoader: specieLoader(),
  starshipLoader: starshipLoader(),
  vehicleLoader: vehicleLoader()
})