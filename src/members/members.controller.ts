import { Controller, Get, Post, Body} from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersDTO } from './members.dto'
import { ApiOkResponse, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

@Controller('members')
export class MembersController {
    constructor (private MembersService: MembersService) {}

    @Get()
    @ApiOkResponse({description:'Sukses mendapatkan Data Member'})
    SeeOutput(){
        return this.MembersService.showAll();
    }

    @Post()
    @ApiResponse({
        status:201,
        description: 'Sukses menambah data Member'
    })
    @ApiCreatedResponse()
    borrowBook(@Body() data : MembersDTO){
        return this.MembersService.create(data);
    }
}
