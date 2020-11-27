import PurchaseStatus from '@modules/status/infra/typeorm/entities/PurchaseStatus';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('purchases')
class Purchase {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  codigo: string;

  @Column({ name: 'status_id' })
  statusId: string;

  @ManyToOne(() => PurchaseStatus)
  @JoinColumn({ name: 'status_id' })
  status: PurchaseStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Purchase;
