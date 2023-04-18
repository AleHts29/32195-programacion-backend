import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDTO } from './dto/Cats.dto';
import { Cat } from './interface/Cats.interface';

@Controller('/api/v1/cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Get()
    async findAll():Promise<Cat[]> {
        return await this.catsService.findAll()
    }

    @Post()
    async create(
        @Body() createDTO: CatsDTO
    ) {
        return await this.catsService.create(createDTO);
    }
}