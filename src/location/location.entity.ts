import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Location' })
export class Location {
  @PrimaryGeneratedColumn({ name: 'LocationID' })
  id: number;

  @Column({ name: 'Manager', type: 'varchar' })
  manager: string;

  @Column({ name: 'ManagerPost', type: 'varchar' })
  managerPost: string;

  @Column({ name: 'Location', type: 'varchar' })
  location: string;

  @Column({ name: 'Note', type: 'text' })
  note: string;

  @Column({ name: 'PeriodStart', type: 'date' })
  periodStart: string;

  @Column({ name: 'PeriodEnd', type: 'date' })
  periodEnd: string;

  @Column({ name: 'Vice', type: 'varchar' })
  vice: string;

  @Column({ name: 'VicePost', type: 'varchar' })
  vicePost: string;

  @Column({ name: 'WorkPlan', type: 'varchar' })
  workPlan: string;

  @Column({ name: 'Created', type: 'timestamp' })
  created: string;

  @Column({ name: 'CreatedBy', type: 'varchar' })
  createdBy: string;
}
