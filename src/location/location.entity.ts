import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Location' })
export class Location {
  @PrimaryGeneratedColumn({ name: 'LocationID' })
  id: number;

  @Column({ name: 'Manager', type: 'nvarchar', nullable: true })
  manager: string;

  @Column({ name: 'ManagerPost', type: 'nvarchar', nullable: true })
  managerPost: string;

  @Column({ name: 'Location', type: 'nvarchar', nullable: true })
  location: string;

  @Column({ name: 'Note', type: 'nvarchar', nullable: true })
  note: string;

  @Column({ name: 'PeriodStart', type: 'date', nullable: true })
  periodStart: string;

  @Column({ name: 'PeriodEnd', type: 'date', nullable: true })
  periodEnd: string;

  @Column({ name: 'Vice', type: 'nvarchar', nullable: true })
  vice: string;

  @Column({ name: 'VicePost', type: 'nvarchar', nullable: true })
  vicePost: string;

  @Column({ name: 'WorkPlan', type: 'nvarchar', nullable: true })
  workPlan: string;

  @Column({ name: 'Created', type: 'datetime', nullable: true })
  created: string;

  @Column({ name: 'CreatedBy', type: 'nvarchar', nullable: true })
  createdBy: string;
}
