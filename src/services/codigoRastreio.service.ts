import { ICodigoRastreio } from "../models/ICodigoRastreio";

const { rastrearEncomendas } = require('correios-brasil')

export class CodigoRastreioService {

    public async rastreiaEncomenda(body: ICodigoRastreio) {

        const codRastreio: Array<string|undefined> = [];

        codRastreio.push(body.codRastreio);

        const result = await rastrearEncomendas(codRastreio);

        return result;
    }
}
