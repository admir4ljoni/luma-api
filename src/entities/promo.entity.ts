import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { EventEntity } from './event.entity';

@Table({
  tableName: 'promos',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class PromoEntity extends Model<PromoEntity> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

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
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_periodic: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  member_only: boolean;

  @ForeignKey(() => EventEntity)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  event_id: string;

  @BelongsTo(() => EventEntity, {
    onDelete: 'CASCADE',
  })
  event: EventEntity;
}
