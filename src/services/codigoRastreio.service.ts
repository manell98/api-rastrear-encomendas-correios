import { ICodigoRastreio } from "../models/ICodigoRastreio";
import { getConnection } from "typeorm";
import { CodigosRastreioEntity } from "../models/CodigosRastreio.entity";
import Joi, { ValidationResult } from "@hapi/joi";

const { rastrearEncomendas } = require('correios-brasil')

export class CodigoRastreioService {

    private conexaoDb = getConnection();

    public async rastreiaEncomenda(body: ICodigoRastreio) {

        const codRastreio: Array<string|undefined> = [];

        codRastreio.push(body.codRastreio);

        const result = await rastrearEncomendas(codRastreio);

        return result;
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
