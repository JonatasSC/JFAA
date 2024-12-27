const GetVersiculo = require("../model/GetVersiculo");


class BibliaController {
    static async getVersiculo(req, res) {
        try {
            const versiculo = GetVersiculo.get();

            return res.status(200).json({
                status: "OK",
                success: 0,
                message: "Versículo retornado com sucesso.",
                versiculo: versiculo
            })

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

module.exports = BibliaController;