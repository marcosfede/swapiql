import {
  Column,
  ManyToMany,
  JoinTable,
  Entity,
  PrimaryGeneratedColumn,
  DiscriminatorValue,
  ClassEntityChild,
} from 'typeorm'

import { Transport } from './Transport'
import { Person } from './Person'
import { Film } from './Film'
@Entity()
export class Starship extends Transport {
  @Column() MGLT: string

  @Column() starship_class: string

  @ManyToMany(type => Person, person => person.starships)
  @JoinTable()
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.starships)
  @JoinTable()
  films: Promise<Film[]>
}
