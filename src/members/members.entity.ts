import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Books } from '../books/books.entity'


@Entity()
export class Members{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:5})
    code: string;

    @Column({length:10})
    name: string;

    @OneToMany(
        () => Books,
        (books: Books) => books.borrow
      )
      @JoinColumn({ name: 'borrow1' })
      books: Books;

    @OneToMany(
      () => Books,
      (books: Books) => books.borrow
    )
    @JoinColumn({ name: 'borrow2' })
    book:Books;
  
}