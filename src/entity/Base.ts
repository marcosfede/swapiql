import { PrimaryGeneratedColumn, Column } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn() id: number

  @Column('timestamp') created: Date

  @Column('timestamp') edited: Date
}
