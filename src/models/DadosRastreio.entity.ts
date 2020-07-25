import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("dadosrastreio")
export class DadosRastreioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    local: string;

    @Column()
    status: string;

    @Column()
    data: number;

    @Column()
    origem: number;

    @Column()
    destino: number;

    @Column()
    created_At: Date;

    @Column()
    updated_At: Date;
}
