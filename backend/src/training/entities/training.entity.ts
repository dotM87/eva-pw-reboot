import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Team } from "src/team/entities/team.entity";
import { Board } from "src/board/entities/board.entity";
@Entity()
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' }) 
  creationDate: Date;

  // Aquí puedes definir otras propiedades de tu entidad Training

  @ManyToOne(() => Team, team => team.trainings)
  team: Team;

  @OneToMany(() => Board, board => board.training)
  boards: Board[];
}
