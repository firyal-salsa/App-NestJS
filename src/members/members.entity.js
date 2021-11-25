import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Books } from '../books/books.entity'


@Entity()
export class Members{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:5})
    code: string;

    @Column({length:10})
    name: string;

    @OneToOne(() => Books, (Books) => 
    Books.id, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })

    @JoinColumn({ name: 'borrow1' })
    books: Books;

    @OneToOne(() => Books, (books2) => 
    Books.id, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })

    @JoinColumn({ name: 'borrow2' })
    books2: Books;

}