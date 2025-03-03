import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';

@Controller('director')
export class DirectorController {
    constructor(private readonly directorService: DirectorService) {}

    @Get()
    findAll() {
        return this.directorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.directorService.findOne(id);
    }

    @Post()
    createDirector(@Body() createDirectorDto: CreateDirectorDto) {
        return this.directorService.createDirector(createDirectorDto);
    }

    @Patch(':id')
    updateDirector(
        @Param('id') id: number,
        @Body() updateDirectorDto: UpdateDirectorDto,
    ) {
        return this.directorService.updateDirector(id, updateDirectorDto);
    }

    @Delete(':id')
    deleteDirector(@Param('id') id: number) {
        return this.directorService.deleteDirector(id);
    }
}
