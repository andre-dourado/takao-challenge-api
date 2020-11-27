import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('ordered_items')
class OrderedItem {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => Product)
  @JoinTable()
  product: Product[];

  @Column()
  quantidade: number;

  @Column()
  preco: number;

  @Column()
  finalizado: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrderedItem;
