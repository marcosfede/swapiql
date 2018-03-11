import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Specie {
    @PrimaryGeneratedColumn()
    id: number;

}
