import { PrimaryGeneratedColumn, Column } from 'typeorm'

export class Base {
  @PrimaryGeneratedColumn() id: number

  @Column('datetime') created: Date

  @Column('datetime') edited: Date
}
