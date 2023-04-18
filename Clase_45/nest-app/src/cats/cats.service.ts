import { Injectable } from '@nestjs/common';
import { Cat } from './interface/Cats.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    async create(cat: Cat){
        this.cats.push(cat);
        return this.cats;
    }

    async findAll(): Promise<Cat[]> {
        return this.cats;
    }
}
