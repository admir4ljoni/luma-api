import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UserSessionEntity } from './user_session.entity';

@Table({
  tableName: 'sessions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class SessionEntity extends Model<SessionEntity> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  session_start: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  session_end: Date;

  @HasMany(() => UserSessionEntity)
  sessions: UserSessionEntity[];
}
