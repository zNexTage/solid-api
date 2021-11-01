# Solid API

API construida seguindo os princípios SOLID.
Foi criado o endpoint /users/ onde é realizado o "cadastro" (atualmente, o cadastro é feito no memória) de uma pessoa e é utilizado o Mailtrap para simular o envio de uma email para esse usuário.

---

# Configuração

## Dependências
1. Rode o comando: ```npm i``` para instalar todas as dependências

## Mailtrap
O mailtrap será utilizado para testar o envio de emails.

1. Crie uma conta no mailtrap;
2. Após criar a conta, crie um inbox;
3. Procure por SMTP Settings;
4. Clique em Show Credetials;
5. Anote os valores de username e password.

## Ambiente
2. Crie o arquivo .env
3. No arquivo .env, configure as variáveis: MAIL_AUTH_USER e MAIL_AUTH_PASSWORD. Essas duas variáveis são responsáveis para a configuração do transporter do nodemailer. (https://nodemailer.com/smtp/)
4. Utilize os valor copiado do mailtrap (username) para definir o valor de MAIL_AUTH_USER
5. Utilize o valor copiado do mailtrap (password) para definir o valor de MAIL_AUTH_PASSWORD
3. Rode o comando ```npm start``` para iniciar a aplicação.
4. Faça uma requisição POST com os seguintes dados: name, email e password, utilizando o formato JSON (application/json), para o endpoint http://localhost:3333/users. O usuário será cadastrado na memória e o mailtrap simulará o envio de um email (é possível consultar o envio no site do mailtrap).