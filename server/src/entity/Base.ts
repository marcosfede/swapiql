import { Column, PrimaryColumn } from 'typeorm'

export abstract class Base {
  @PrimaryColumn() public id: number

  @Column('timestamp') public created: Date

  @Column('timestamp') public edited: Date
}
