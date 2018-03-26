import { PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm'

export abstract class Base {
  @PrimaryColumn() id: number

  @Column('timestamp') created: Date

  @Column('timestamp') edited: Date
}
