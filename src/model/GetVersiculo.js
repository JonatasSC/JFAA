const SqliteConnection = require('../services/database/connection')

class GetVersiculo {
  static async get () {
    const conn = await SqliteConnection.connect()
    try {
      const query = `SELECT * FROM verse WHERE id = 1;`;
      const [rows] = await conn.get(query)
      await SqliteConnection.close(conn)
      return rows
    } catch (error) {
      console.error('Erro ao buscar versículo. ', error)
      await SqliteConnection.close(conn)
    }
  }
}

module.exports = GetVersiculo