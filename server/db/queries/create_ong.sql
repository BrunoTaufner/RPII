
INSERT INTO
    public."ONG"
    (cnpj, nome, descricao, tipo, telefone, email, senha)
VALUES
    ('{cnpj}', '{nome}', '{descricao}', '{tipo}', '{telefone}', '{email}', '{senha}')
;

INSERT INTO
    public."Endereco"
    (cep, pais, estado, cidade, bairro, logradouro)
VALUES
    ('{endereco_cep}', 'Brasil', 'São Paulo', 'São Paulo', 'Lapa', 'Rua')
;

INSERT INTO
    public."Unidade"
    (id_ong, cep, numero, complemento)
VALUES
    (
        (
            SELECT id_ong FROM
                public."ONG"
            WHERE
               cnpj='{cnpj}' AND nome='{nome}' AND descricao='{descricao}' AND tipo='{tipo}' AND telefone='{telefone}' AND email='{email}'
        ),
        '{endereco_cep}',
        '{endereco_num}',
        '{endereco_complemento}'
    )
