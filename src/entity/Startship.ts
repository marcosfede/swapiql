import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Startship {
    @PrimaryGeneratedColumn()
    id: number;

}
