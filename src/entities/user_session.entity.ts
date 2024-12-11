import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { SessionEntity } from './session.entity';
import { UsersEntity } from './user.entity';

@Table({
  tableName: 'user_session',
  timestamps: false,
})
export class UserSessionEntity extends Model<UserSessionEntity> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => SessionEntity)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  session_id: string;

  @BelongsTo(() => SessionEntity, {
    onDelete: 'SET NULL',
  })
  session: SessionEntity;

  @ForeignKey(() => UsersEntity)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user_id: string;

  @BelongsTo(() => UsersEntity, {
    onDelete: 'SET NULL',
  })
  user: UsersEntity;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_time: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_time: Date;
}
