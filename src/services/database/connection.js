const sqlite3 = require('sqlite3').verbose()
const { open } = require('sqlite')
require("dotenv").config();

class SqliteConnection {
  static async connect () {
    try {
      const connection = await open({
        filename: process.env.BD_PATH,
        driver: sqlite3.Database
      })
      console.log('conectado ao banco SQLite')
      return connection
    } catch (error) {
      console.error('Erro ao conectar ao banco SQLite', error)
      return null
    }
  }

  static async close (connection) {
    if (connection) {
      try {
        await connection.close()
        console.log('Conexão com o banco SQLite fechada')
      } catch (error) {
        console.error('Erro ao fechar conexão com o banco SQLite', error)
      }
    }
  }
}

module.exports = SqliteConnection
