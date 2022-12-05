SELECT
    nome, tipo, descricao, email, cnpj, telefone
FROM
    public."ONG"
WHERE
    UPPER(nome) LIKE UPPER({nome}) AND UPPER(tipo) LIKE UPPER({tipo})

