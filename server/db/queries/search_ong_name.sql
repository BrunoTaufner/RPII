SELECT
    "ONG".nome, "ONG".tipo, "ONG".descricao, "ONG".email, "ONG".cnpj, "ONG".telefone
FROM
    public."ONG"
WHERE
    UPPER("ONG".nome) LIKE UPPER({nome})
