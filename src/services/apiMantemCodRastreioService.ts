import { CodigosRastreioEntity } from "../models/CodigosRastreio.entity";
import { getConnection } from "typeorm";
import { ICodigoRastreio } from "../models/ICodigoRastreio";
import Joi, { ValidationResult } from "@hapi/joi";

export class ApiMantemCodRastreioService {

    private conexaoDb = getConnection();

    public async buscaCodRastreioPorId(id: number) {

        const result = await this.conexaoDb.manager.findOne(CodigosRastreioEntity, id);

        if(result) { return result; }

        return [];
    }

    public async salvaCodRastreio(body: any) {

        const obj = new CodigosRastreioEntity();

        const resultadoValidacao = this.validarCamposCreate(body);

        if (!resultadoValidacao.error) {

            obj.codigo = body.codRastreio;
            obj.created_At = new Date();
            obj.updated_At = new Date();

            const result = await this.conexaoDb.manager.save(obj);

            return result;
        }

        return "O CAMPO CÓDIGO É OBRIGATÓRIO E DEVE SER UMA STRING";
    }

    private validarCamposCreate(body: ICodigoRastreio): ValidationResult {

        const userSchema = Joi.object({
            codRastreio: Joi.string().required(),
        });

        return userSchema.validate(body);
    }
}
