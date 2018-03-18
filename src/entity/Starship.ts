import {Column, ManyToMany, JoinTable, Entity, PrimaryGeneratedColumn} from "typeorm";
import { Base } from "./Base";
import {Person} from './Person'
import { Film } from "./Film";

@Entity()
export class Starship extends Base {
  @Column() MGLT: string

  @Column() cargo_capacity: number

  @Column() consumables: string

  @Column() cost_in_credits: number

  @Column() crew: number

  @Column() hyperdrive_rating: number

  @Column() length: number
  
  @Column() manufacturer: string

  @Column() max_atmosphering_speed: string

  @Column() model: string

  @Column() name: string

  @Column() passengers: number

  @Column() starship_class: string

  @ManyToMany(type => Person, person => person.starships)
  @JoinTable({ name: 'people_starships' })
  pilots: Promise<Person[]>

  @ManyToMany(type => Film, film => film.starships)
  @JoinTable({ name: 'planets_starships' })
  films: Promise<Film[]>
}
