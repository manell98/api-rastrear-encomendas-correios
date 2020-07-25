import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("codigos_rastreio")
export class CodigosRastreioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    created_At: Date;

    @Column()
    updated_At: Date;
}
