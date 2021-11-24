import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from './books.entity'

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private BooksRepository: Repository<Books>
    ) { }

    async showAll(){
        return await this.BooksRepository.find();
    }
}
