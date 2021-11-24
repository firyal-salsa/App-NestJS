import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
    constructor (private BooksService: BooksService) {}

    @Get()
    @ApiOkResponse({description:'Sukses mendapatkan Data Buku'})
    SeeOutput(){
        return this.BooksService.showAll();
    }
}
