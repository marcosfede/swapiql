import { Column, Entity, TableInheritance, DiscriminatorColumn, DiscriminatorValue } from 'typeorm'
import { Base } from './Base';

export abstract class Transport extends Base {
  @Column() cargo_capacity: number

  @Column() consumables: string

  @Column() cost_in_credits: number

  @Column() crew: string

  @Column() length: number

  @Column() manufacturer: string

  @Column() max_atmosphering_speed: string

  @Column() model: string

  @Column() name: string

  @Column() passengers: number
}
