import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { RolesEntity } from './role.entity';
import { UserSessionEntity } from './user_session.entity';
import { MerchantEntity } from './merchant.entity';

@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class UsersEntity extends Model<UsersEntity> {
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
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  profile_picture: string;

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
  merchant_assigned: string;

  @BelongsTo(() => MerchantEntity, {
    onDelete: 'SET NULL',
  })
  merchant_assigned_to: string;

  @ForeignKey(() => RolesEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;

  @BelongsTo(() => RolesEntity, {
    onDelete: 'SET NULL',
  })
  role: RolesEntity;

  @HasMany(() => UserSessionEntity)
  sessions: UserSessionEntity[];
}
