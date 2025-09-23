const SqliteConnection = require("../services/database/connection");

class GetVersiculoAleatorioFirstTestament {
	static async get() {
		const conn = await SqliteConnection.connect();
		try {
			const query = `
                    SELECT
                      t.id AS testament, 
                      b.name AS book_name,
                      v.chapter,
                      v.verse,
                      v.text
                      FROM verse v
                      JOIN book b ON b.book_reference_id = v.book_id 
                      JOIN testament t ON b.testament_reference_id = t.id
                      WHERE t.id = 1
                      ORDER BY RANDOM() LIMIT 1;`;
			const rows = await conn.get(query);
			return rows;
		} catch (error) {
			console.error("Erro ao buscar versículo. ", error);
		} finally {
			await SqliteConnection.close(conn);
		}
	}
}

module.exports = GetVersiculoAleatorioFirstTestament;
