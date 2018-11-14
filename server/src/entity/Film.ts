import { Entity, ManyToMany, Column } from 'typeorm'
import { Person } from './Person'
import { Base } from './Base'
import { Vehicle } from './Vehicle'
import { Planet } from './Planet'
import { Starship } from './Starship'
import { Specie } from './Specie'

@Entity()
export class Film extends Base {
  @Column() title: string

  @Column() episode_id: number

  @Column() opening_crawl: string

  @Column() director: string

  @Column() producer: string

  @Column() release_date: string

  @ManyToMany(type => Person, person => person.films)
  characters: Promise<Person[]>

  @ManyToMany(type => Planet, planet => planet.films)
  planets: Promise<Planet[]>

  @ManyToMany(type => Starship, starship => starship.films)
  starships: Promise<Starship[]>

  @ManyToMany(type => Specie, specie => specie.films)
  species: Promise<Specie[]>

  @ManyToMany(type => Vehicle, vehicle => vehicle.films)
  vehicles: Promise<Vehicle[]>
}
