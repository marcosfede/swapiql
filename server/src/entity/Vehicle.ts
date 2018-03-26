import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  DiscriminatorValue,
  ClassEntityChild,
} from 'typeorm'
import { Transport } from './Transport'
import { Person } from './Person'
import { Film } from './Film'

@Entity()
export class Vehicle extends Transport {
  @Column() vehicle_class: string

  @ManyToMany(type => Person, person => person.vehicles)
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.vehicles)
  @JoinTable()
  films: Promise<Film[]>
}
