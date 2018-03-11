import {Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column} from "typeorm";
import { Person } from "./Person";

@Entity()
export class Planet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Person, person => person.homeworld)
    residents: Promise<Person[]>;
}
