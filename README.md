# Comandos git

clonar repositório git:

    git clone < servidor >

Ou pode usar remote:

    git remote add origin <servidor>

Para adicionar arquivos ao repositório git:

    git add <arquivo> ou
    git add .

Para confirmar:

    git commit -m "mensagem ou comentário sobre alteração"

Para enviar alterações para o servidor:

    git push origin master

Para criar uma branch de trabalho:

    git checkout -b <nome da ramificação>

Retornar a branch inicial

    git branch <nome>

Para remover:

    git branch -d <nome>

Para enviar o branch ao repositório remoto:

    git push origin <nome da branch>

Para atualizar o projeto, ou seja, o repositório local:

    git pull

Para mesclar/juntar alterações de outros ambientes de trabalho:

    git merge <branch>

Para pré-visualizar alterações feitas:

    git diff <branch origem> <branch de destino>
