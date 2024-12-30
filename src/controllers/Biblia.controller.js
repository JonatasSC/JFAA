const GetVersiculoAleatorio = require('../model/GetVersiculoAleatorio')
const GetVersiculoAleatorioFirstTestament = require('../model/GetVersiculoAleatorioFirstTestament')

class BibliaController {
  static async getVersiculoAleatorio(req, res) {
    try {
      const versiculo = await GetVersiculoAleatorio.get()

      if (!versiculo) {
        return res.status(404).json({
          status: 'NOT FOUND',
          success: 0,
          message: 'Versículo não encontrado.',
          versiculo: null
        })
      }
      return res.status(200).json({
        status: 'OK',
        success: 1,
        message: 'Versículo retornado com sucesso.',
        versiculo: versiculo
      })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

  static async getVersiculoAleatorioFirstTestament(req, res) {
    try {
      const versiculo = await GetVersiculoAleatorioFirstTestament.get()

      if (!versiculo) {
        return res.status(404).json({
          status: 'NOT FOUND',
          success: 0,
          message: 'Versículo não encontrado.',
          versiculo: null
        })
      }
      return res.status(200).json({
        status: 'OK',
        success: 1,
        message: 'Versículo retornado com sucesso.',
        versiculo: versiculo
      })
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  }

}



module.exports = BibliaController
