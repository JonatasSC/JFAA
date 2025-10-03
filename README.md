# BIBLE VERSES API
## API para gerar versículos bíblicos aleatórios

Esta API fornece versículos bíblicos aleatórios a partir de um banco de dados SQLite.

---

## 📋 Pré-requisitos

- Node.js 22.18.0
- npm 10.9.3
- Docker (opcional)

**Dica:** Use [mise](https://mise.jdx.dev/) para gerenciar as versões automaticamente:
```bash
mise install
```

---

## 🚀 Instalação e Uso

### **Opção 1: Executar localmente**

1. Clone o repositório:
```bash
git clone git@github.com:JonatasSC/JFAA.git
cd JFAA
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
BD_PATH=./JFAA.sqlite
PORT=3004
```

4. Execute a aplicação:
```bash
npm start
```

5. Acesse o endpoint:
```
http://localhost:3004/jfaa/biblia/versiculo/aleatorio
```

---

### **Opção 2: Executar com Docker**

1. Build da imagem:
```bash
docker build -t jfaa .
```

2. Execute o container:
```bash
docker run -e BD_PATH=/JFAA/JFAA.sqlite -e PORT=3004 -p 3004:3004 jfaa
```

3. Acesse o endpoint:
```
http://localhost:3004/jfaa/biblia/versiculo/aleatorio
```

---

## ⚙️ Variáveis de Ambiente

| Variável | Descrição | Valor Padrão |
|----------|-----------|--------------|
| `BD_PATH` | Caminho para o banco de dados SQLite | `./JFAA.sqlite` |
| `PORT` | Porta onde a aplicação será executada | `3004` |

**Importante:** Certifique-se de configurar essas variáveis tanto no arquivo `.env` (local) quanto ao executar o Docker.

---

## 📚 Sobre o Banco de Dados

O banco de dados SQLite com os versículos bíblicos já está incluído no repositório (`JFAA.sqlite`).

Fonte original: [damarals/biblias](https://github.com/damarals/biblias)

---

## 🔗 Endpoints Disponíveis

### Rotas da Aplicação

- `GET /` - Página inicial com versículo aleatório

### API - Versículos Bíblicos

- `GET /jfaa/biblia/versiculo/aleatorio` - Retorna um versículo bíblico aleatório de toda a Bíblia
- `GET /jfaa/biblia/versiculo/aleatorio/first-testament` - Retorna um versículo aleatório do Antigo Testamento
- `GET /jfaa/biblia/versiculo/aleatorio/second-testament` - Retorna um versículo aleatório do Novo Testamento

**Formato de resposta:**
```json
{
  "versiculo": {
    "book_name": "João",
    "chapter": 3,
    "verse": 16,
    "text": "Porque Deus amou o mundo de tal maneira..."
  }
}
```
