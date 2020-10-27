import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  manager: string;

  @Column({ type: 'varchar' })
  managerPost: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'text' })
  note: string;

  @Column({ type: 'date' })
  periodStart: string;

  @Column({ type: 'date' })
  periodEnd: string;

  @Column({ type: 'varchar' })
  vice: string;

  @Column({ type: 'varchar' })
  vicePost: string;

  @Column({ type: 'varchar' })
  workPlan: string;

  @Column({ type: 'timestamp' })
  created: string;

  @Column({ type: 'varchar' })
  createdBy: string;
}
