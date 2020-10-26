import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('well')
export class Well {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToOne(
  //     type => Component,
  //     component => component.well,
  //     { nullable: true }
  // )
  // component: Component;
  //
  // @OneToMany(
  //     type => DailyDrillReport,
  //     ddr => ddr.well
  // )
  // ddr: DailyDrillReport[];
}
