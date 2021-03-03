#nivers-familia

Um robô simples em NodeJS para alerta de aniversários em um canal do Telegram.

[![License: mit](https://img.shields.io/badge/License-mit-yellow.svg)](https://github.com/diegoqueres/nivers-familia/blob/main/LICENSE)
# 👋 Bem Vindo ao Projeto Robô de Alerta de Aniversários no Telegram
> 👋 *Welcome to Telegram Birthday Alert Robot Project*

![Preview](https://i.ibb.co/qp28HKb/birthday-telegram.png)

Um robô simples em NodeJS no Heroku para alerta de aniversários em um canal do Telegram.

*A simple robot in NodeJS on Heroku for birthdays alert on a Telegram channel.*


## 🏠 Como funciona
> 🏠 *How it works*
1. Faça o clone do projeto (*Clone the project*)
2. Instale as dependencias (*Install dependencies*)
```bash
npm install
```

Nós utilizamos o [Heroku](https://www.heroku.com/) para hospedar o banco de dados (Heroku Postgres Addon) e controlar o envio das notificações ao Telegram (Heroku Scheduler Addon). (*We chose [Heroku](https://www.heroku.com/) to host the database (Heroku Postgres Addon) and control the sending of notifications to Telegram (Heroku Scheduler Addon).*)

Após criar sua conta no Heroku e instalar o [CLI](https://devcenter.heroku.com/articles/heroku-cli) em seu computador: (*After creating your Heroku account and install [CLI](https://devcenter.heroku.com/articles/heroku-cli) in your computer:*)

3. Crie um novo app em New->Create New App (*Create a new app in New->Create New App*)
  
**Heroku Postgres Addon**
  - Vá para (*Go to*) Settings -> Reveal Config Vars -> DATABASE_URL 
  - Para manusear o banco de dados utilizamos (*To handle the database we chose*) [DB Eaver](https://dbeaver.io/)
  - Copie o valor da chave DATABASE_URL onde estão todos os dados para conectar no banco de dados com o **DBEaver** (*Copy the value of the DATABASE_URL key where you may find all the data to connect to the database with **DBEaver** *)
    - Dados para conexão no DBEaver estão nessa ordem: (*Data for conection to DBEaver are sorted as:*) postgres:// **user : password @ host : port / database**
  - Crie as tabelas (*Create tables*)
  ```sql
  CREATE TABLE public.nivers (
    id smallserial NOT NULL,
    nome varchar(40) NOT NULL,
    aniversario date NULL,
    CONSTRAINT nivers_pkey PRIMARY KEY (id)
  );
  ```
  - Preencha os dados das colunas **nome** (*string*) e **aniversario** (*YYYY/MM/DD*) (*Fill in the data for the columns **nome** (name) and **aniversario** (birthday format *YYYY/MM/DD*)*)

**Heroku Scheduler Addon**
  - Clique em **Add Job**
  - Schedule: *Every day at 11:30 AM*
  - Run Command: *node alert.js*

4. Crie o canal no Telegram, leia a primeira parte deste artigo (*Create a channel on Telegram, read the first part of this article*) http://diegoqueres.net/ti/nodejs/postagens-em-grupos-canais-do-telegram-usando-nodejs/
  - Salve o **Token do Bot** e o **ID do Canal** (*Save the **Bot Token** and **Channel ID***)

5. Vá novamente para (*Go again to*) Heroku -> Settings -> Reveal Config Vars, e adicione as seguintes variáveis (*and add the following variables*)
  - BOT_TOKEN: **Token do Bot** (***Bot Token***)
  - TELEGRAM_CHANNEL: **ID do Canal** (***Channel ID***)

6. No terminal (VSCode por exemplo) digite os seguintes comandos: (*On the terminal (VSCode for instance) type the following commands:*)
  - heroku login
  - cd my-project
  - git init
  - heroku git:remote -a heroku-app-name
  - git add .
  - git commit -am "make it better"
  - git push heroku master

7. Você deve receber notificações em seu Canal do Telegram todos os dias que houver aniversários. (*You should get notifications on your Telegram Channel every day which has birthdays.*)


---
---

## 🤝 Contribuições
> 🤝 *Contributing*

Contribuições, problemas e solicitações de funcionalidades são bem-vindas!

*Contributions, issues and feature requests are welcome!*

## ⭐️ Mostre seu apoio
> ⭐️ *Show your support*

Dê uma estrela se esse projecto te ajudou!

*Give a star if this project helped you!*

## 📝 Licença
> 📝 *License*

Este projeto é licenciado pela [MIT](https://github.com/diegoqueres/nivers-familia/blob/main/LICENSE)

*This project is [MIT](https://github.com/diegoqueres/nivers-familia/blob/main/LICENSE) licensed.*
