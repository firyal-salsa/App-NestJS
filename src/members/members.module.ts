import { Module } from '@nestjs/common';
import { Members } from './members.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
    imports: [TypeOrmModule.forFeature([Members])
],
    controllers: [MembersController],
    providers: [MembersService],

})
export class MembersModule { }
