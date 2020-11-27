import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import Purchase from '@modules/purchases/infra/typeorm/entities/Purchase';

@Entity('ordered_items')
class OrderedItem {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column({ name: 'purchase_id', default: null })
  purchaseId: string;

  @ManyToOne(() => Purchase)
  @JoinColumn({ name: 'purchase_id' })
  purchase: Purchase;

  @Column()
  quantidade: number;

  @Column('double precision')
  preco: number;

  @Column()
  finalizado: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrderedItem;
