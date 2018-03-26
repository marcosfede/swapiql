import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, ManyToMany, JoinTable } from 'typeorm'
import { Person } from './Person'
import { Film } from './Film'
import { Base } from './Base'
import { Specie } from './Specie'

@Entity()
export class Planet extends Base {
  @Column() name: string

  @Column() rotation_period: string

  @Column() orbital_period: string

  @Column() diameter: string

  @Column() climate: string

  @Column() gravity: string

  @Column() terrain: string

  @Column() surface_water: string

  @Column() population: string

  @OneToMany(type => Person, person => person.homeworld)
  residents: Promise<Person[]>

  @OneToMany(type => Specie, specie => specie.homeworld)
  species: Promise<Specie[]>

  @ManyToMany(type => Film, film => film.planets)
  @JoinTable()
  films: Promise<Film[]>
}
