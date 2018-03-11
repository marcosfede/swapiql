import {Entity, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import { Person } from "./Person";

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Person, person => person.films)
    people: Promise<Person[]>
}
