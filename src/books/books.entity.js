import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:10})
    code: string;

    @Column({length:50})
    title: string;

    @Column({length:30})
    author: string;

    @Column()
    stock: number;
}