import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  postMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.postMovie(createMovieDto);
  }

  @Get()
  getMovies(@Query('title') title: string) {
    return this.movieService.getMovies(title);
  }

  @Get(':id')
  getMovieById(@Param('id') id: string) {
    return this.movieService.getMovieById(+id);
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.updateMovie(+id, updateMovieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(+id);
  }
}
