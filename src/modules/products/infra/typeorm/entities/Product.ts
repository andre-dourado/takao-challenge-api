import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';

import uploadConfig from '@config/upload';

import Category from '@modules/categories/infra/typeorm/entities/Category';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column('double precision')
  preco: number;

  @Column()
  imagem: string;

  @Column({ name: 'categoria_id' })
  categoriaId: string;

  @Column({ name: 'quantidade_em_estoque' })
  quantidadeEmEstoque: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'imagem_url' })
  getImagemUrl(): string | null {
    if (!this.imagem) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.imagem}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.imagem}`;
      default:
        return null;
    }
  }
}

export default Product;
