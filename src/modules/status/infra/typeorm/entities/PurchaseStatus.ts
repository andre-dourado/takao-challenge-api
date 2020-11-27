import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('purchase_status')
class PurchaseStatus {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PurchaseStatus;
