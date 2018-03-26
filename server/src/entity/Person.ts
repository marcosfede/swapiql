import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm'
import { Base } from './Base'
import { Vehicle } from './Vehicle'
import { Planet } from './Planet'
import { Starship } from './Starship'
import { Specie } from './Specie'
import { Film } from './Film'

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

  @Column({ nullable: true })
  homeworldId: number

  @ManyToOne(type => Planet, planet => planet.residents)
  homeworld: Promise<Planet>

  @ManyToMany(type => Film, film => film.characters)
  @JoinTable()
  films: Promise<Film[]>

  @Column({ nullable: true })
  specieId: number

  @ManyToOne(type => Specie, specie => specie.people)
  specie: Promise<Specie>

  @ManyToMany(type => Starship, starship => starship.pilots)
  @JoinTable()
  starships: Promise<Starship[]>

  @ManyToMany(type => Vehicle, vehicle => vehicle.pilots)
  @JoinTable()
  vehicles: Promise<Vehicle[]>
}
