import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Base } from './Base'
import { Person } from './Person'
import { Film } from './Film'

@Entity()
export class Vehicle extends Base {
  @Column() cargo_capacity: number

  @Column() consumables: string

  @Column() cost_in_credits: number

  @Column() crew: number

  @Column() length: number

  @Column() manufacturer: string

  @Column() max_atmosphering_speed: string

  @Column() model: string

  @Column() name: string

  @Column() passengers: number

  @Column() vehicle_class: string

  @ManyToMany(type => Person, person => person.vehicles)
  @JoinTable({ name: 'people_starships' })
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.vehicles)
  @JoinTable({ name: 'planets_starships' })
  films: Promise<Film[]>
}
