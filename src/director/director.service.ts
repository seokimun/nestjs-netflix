import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectorService {
    constructor(
        @InjectRepository(Director)
        private readonly directorRepository: Repository<Director>,
    ) {}

    findAll() {
        return this.directorRepository.find();
    }

    findOne(id: number) {
        return this.directorRepository.findOne({
            where: { id },
        });
    }

    createDirector(createDirectorDto: CreateDirectorDto) {
        return this.directorRepository.save(createDirectorDto);
    }

    async updateDirector(id: number, updateDirectorDto: UpdateDirectorDto) {
        const director = await this.directorRepository.findOne({
            where: { id },
        });

        if (!director) {
            throw new NotFoundException('존재하지 않는 감독입니다.');
        }

        await this.directorRepository.update({ id }, { ...updateDirectorDto });
        return this.directorRepository.findOne({ where: { id } });
    }

    async deleteDirector(id: number) {
        const director = await this.directorRepository.findOne({
            where: { id },
        });

        if (!director) {
            throw new NotFoundException('존재하지 않는 감독입니다.');
        }

        await this.directorRepository.delete({ id });
        return id;
    }
}
