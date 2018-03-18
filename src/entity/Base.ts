import { PrimaryGeneratedColumn, Column } from 'typeorm'

export abstract class Base {
  @PrimaryGeneratedColumn() id: number

  @Column('timestamp') created: Date

  @Column('timestamp') edited: Date
}
