import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, ManyToMany, JoinTable } from 'typeorm'

import { Base } from './Base'
import { Person } from './Person'
import { Planet } from './Planet'
import { Film } from './Film'
@Entity()
export class Specie extends Base {
  @Column() average_height: string

  @Column() average_lifespan: string

  @Column() classification: string

  @Column() designation: string

  @Column() eye_colors: string

  @Column() hair_colors: string

  @Column() language: string

  @Column() name: string

  @Column() skin_colors: string

  @ManyToOne(type => Planet, planet => planet.species)
  homeworld: Promise<Planet>

  @OneToMany(type => Person, person => person.specie)
  people: Promise<Person[]>

  @ManyToMany(type => Film, film => film.species)
  @JoinTable()
  films: Promise<Film[]>
}
