const sqlite3 = require('sqlite3').verbose()
const { open } = require('sqlite')

class SqliteConnection {
  static async connect () {
    try {
      const connection = await open({
        filename: 'C:/Users/jonatas.conceicao/Downloads/JFAA.sqlite',
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
