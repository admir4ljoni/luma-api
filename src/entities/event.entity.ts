import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { MerchantEntity } from './merchant.entity';

@Table({
  tableName: 'events',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class EventEntity extends Model<EventEntity> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date_start: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date_end: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @ForeignKey(() => MerchantEntity)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  merchant_id: string;

  @BelongsTo(() => MerchantEntity, {
    onDelete: 'CASCADE',
  })
  merchant: MerchantEntity;
}
