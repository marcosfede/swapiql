import {
  Column,
  ManyToMany,
  JoinTable,
  Entity,
  PrimaryGeneratedColumn,
  DiscriminatorValue,
} from 'typeorm'
import { Transport } from './Transport'
import { Person } from './Person'
import { Film } from './Film'

@Entity()
@DiscriminatorValue('starship')
export class Starship extends Transport {
  @Column() MGLT: string

  @Column() starship_class: string

  @ManyToMany(type => Person, person => person.starships)
  @JoinTable({ name: 'people_starships' })
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.starships)
  @JoinTable({ name: 'planets_starships' })
  films: Promise<Film[]>
}
