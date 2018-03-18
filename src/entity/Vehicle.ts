import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  DiscriminatorValue,
} from 'typeorm'
import { Transport } from './Transport'
import { Person } from './Person'
import { Film } from './Film'

@Entity()
@DiscriminatorValue('vehicle')
export class Vehicle extends Transport {
  @Column() vehicle_class: string

  @ManyToMany(type => Person, person => person.vehicles)
  @JoinTable({ name: 'people_starships' })
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.vehicles)
  @JoinTable({ name: 'planets_starships' })
  films: Promise<Film[]>
}
