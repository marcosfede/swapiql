import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

}
