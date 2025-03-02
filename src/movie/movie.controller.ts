import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    ParseIntPipe,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    getMovies(@Query('title') title?: string) {
        return this.movieService.getMovies(title);
    }

    @Get(':id')
    getMovieById(@Param('id', ParseIntPipe) id: number) {
        return this.movieService.getMovieById(id);
    }

    @Post()
    createMovie(@Body() createMovieDto: CreateMovieDto) {
        return this.movieService.createMovie(createMovieDto);
    }

    @Patch(':id')
    updateMovie(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateMovieDto: UpdateMovieDto,
    ) {
        return this.movieService.updateMovie(id, updateMovieDto);
    }

    @Delete(':id')
    deleteMovie(@Param('id', ParseIntPipe) id: number) {
        return this.movieService.deleteMovie(id);
    }
}
