import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Film } from "./Film";
import { Planet } from "./Planet";
import { Specie } from "./Specie";
import { Startship } from "./Startship";
import { Vehicle } from "./Vehicle";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    birth_year: string

    @Column()
    eye_color: string
    
    @ManyToMany(type => Film, film => film.people)
    @JoinTable()
    films: Promise<Film>[]
    
    @Column()
    gender: string
    
    @Column()
    hair_color: string
    
    @Column()
    height: number
    
    @ManyToOne(type => Planet, planet => planet.residents)
    homeworld: Promise<Planet>
    
    @Column()
    mass: number
    
    @Column()
    name: string
    
    @Column()
    skin_color: string
    
    @Column('date')
    created: Date
    
    @Column('date')
    edited: Date
    
    // @Column()
    // species: Specie[]
    
    // @Column()
    // starships: Startship[]

    // @Column()
    // vehicles: Vehicle[]
}
