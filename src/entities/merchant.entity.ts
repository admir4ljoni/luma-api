import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { UsersEntity } from './user.entity';

@Table({
  tableName: 'merchants',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class MerchantEntity extends Model<MerchantEntity> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  profile_picture: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  category: string;

  @ForeignKey(() => UsersEntity)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  user_id: string

  @BelongsTo(() => UsersEntity, {
    onDelete: 'DO NOTHING'
  })
  owner: UsersEntity;
}