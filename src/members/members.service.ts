import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Members } from './members.entity'
import { MembersDTO } from './members.dto';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Members)
        private membersRepository: Repository<Members>
    ) { }

    async showAll(){
        return await this.membersRepository.find({ relations: ['books'] });
    }

    async create (data: MembersDTO){
        const MembersNew = await this.membersRepository.create(data)
        await this.membersRepository.save(MembersNew)
        return MembersNew
    }
}
