import {Entity, PrimaryGeneratedColumn, ManyToMany, Column} from "typeorm";
import { Person } from "./Person";
import { Base } from "./Base";

@Entity()
export class Film extends Base {

    @Column()
    title: string;

    @Column('smallint')
    episode_id: number;

    @Column('text')
    opening_crawl: string;

    @Column()
    director: string;

    @Column()
    producer: string;

    @Column('date')
    release_date: string;

    @ManyToMany(type => Person, person => person.films)
    characters: Promise<Person[]>

    @ManyToMany(type => Person, person => person.films)
    planets: Promise<Person[]>

    @ManyToMany(type => Person, person => person.films)
    starships: Promise<Person[]>

    @ManyToMany(type => Person, person => person.films)
    species: Promise<Person[]>


}
