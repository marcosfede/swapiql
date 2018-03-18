import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm'
import { Film } from './Film'
import { Planet } from './Planet'
import { Specie } from './Specie'
import { Vehicle } from './Vehicle'
import { Starship } from './Starship'
import { Base } from './Base';

@Entity()
export class Person extends Base {

  @Column() birth_year: string

  @Column() eye_color: string

  @ManyToMany(type => Film, film => film.characters)
  @JoinTable({ name: 'characters' })
  films: Promise<Film>[]

  @Column() gender: string

  @Column() hair_color: string

  @Column('int') height: number

  @ManyToOne(type => Planet, planet => planet.residents)
  homeworld: Promise<Planet>

  @Column('int') mass: number

  @Column() name: string

  @Column() skin_color: string

  @ManyToMany(type => Specie, specie => specie.people)
  @JoinTable({ name: 'people_species' })
  specie: Promise<Specie[]>

  @ManyToMany(type => Starship, starship => starship.pilots)
  @JoinTable({ name: 'starship_pilots' })
  starships: Promise<Starship[]>

  @ManyToMany(type => Vehicle, vehicle => vehicle.pilots)
  @JoinTable({ name: 'vehicle_pilots' })
  vehicles: Promise<Vehicle[]>
}
