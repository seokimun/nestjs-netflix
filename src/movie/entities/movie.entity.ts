import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { MovieDetail } from './movie-detail.entity';
import { Director } from '../../director/entities/director.entity';

@Entity()
export class Movie extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @OneToOne(() => MovieDetail, (movieDetail) => movieDetail.movie, {
        cascade: true,
    })
    @JoinColumn()
    detail: MovieDetail;

    @ManyToOne(() => Director, (director) => director.id)
    director: Director;
}
