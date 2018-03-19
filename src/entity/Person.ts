import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm'
import { Film, Base, Vehicle, Planet, Starship, Specie } from '.'

@Entity()
export class Person extends Base {
  @Column() birth_year: string

  @Column() eye_color: string

  @Column() gender: string

  @Column() hair_color: string

  @Column() height: string

  @Column() mass: string

  @Column() name: string

  @Column() skin_color: string

  @ManyToOne(type => Planet, planet => planet.residents)
  homeworld: Promise<Planet>

  @ManyToMany(type => Film, film => film.characters)
  @JoinTable()
  films: Promise<Film>[]

  @ManyToMany(type => Specie, specie => specie.people)
  @JoinTable()
  specie: Promise<Specie[]>

  @ManyToMany(type => Starship, starship => starship.pilots)
  @JoinTable()
  starships: Promise<Starship[]>

  @ManyToMany(type => Vehicle, vehicle => vehicle.pilots)
  @JoinTable()
  vehicles: Promise<Vehicle[]>
}
