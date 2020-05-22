# PokemonTeste
Este é um projeto desenvolvido a fim de demonstrar habilidades no desenvolvimento.

## IDE
Foi utilizado a IDE Visual Code para codificação.

## Tecnologia utilizada
O Sistema foi construído na linguagem TypeScript usando Angular 8. Também foi utilizado os componentes visuais do Angular Material para desenhar a tela, e o FlexLayout para desenhar o layout da aplicação.

## Sobre código
Primeiramente foi construído a estrutura para gravação de objetos na LocalStorage, através dessa estrutura é possível fazer um controle dos objetos como se fosse um banco de dados, adicionando sequências automáticas e gravando cada objeto em uma lista separada por cada Classe model como se fosse uma tabela.

Dessa forma é possível criar uma classe Dao/Dal herdando a classe Dal.

``BaralhoDal extends Dal<BaralhoModel>``

Assim é possível inserir, atualizar, obter um objeto e listar todos os objetos através da herança.

A segunda parte implementada foi o componente que lista e pesquisa os Cards na api Pokemon TCG. 
Esse componente permite fazer uma pesquisa paginada filtrando pelo nome do card.

Foi utilizado BehaviorSubject como meio de comunicação reativa entre os componentes cards CardPokemonComponent e CardBaralhoComponent.

Um outro recurso interessante, foi a utilização do Promise que permite transformar requisições Assíncronas em requisições Síncronas.

Abaixo segue o código como exemplo: 

```mark
  async removerCard(card: CardModel) {
    if (!isNullOrUndefined(card)) {
      if (<boolean>await this.confirmacaoDialogo("Confirma remover esta Carta?", "Confirmação")) {
        this.baralho.cards.splice(this.baralho.cards.indexOf(card), 1);
        this.baralhoDao.dao.atualizar(this.baralho)
      }
    }
  }

  async confirmacaoDialogo(mensagem, titulo): Promise<boolean> {
    return await new Promise<boolean>(resolve => {
      const dialogData = new ConfirmacaoDialogModel(titulo, mensagem);

      const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(dialogResult => {
        resolve(dialogResult);
      });
    });
  }
```

Por último, implementei a classe QueryParamCardUtil que assemelha a sua utilização ao padrão Builder, com a finalidade construir a parte de QueryParam da requisição rest.

Como este projeto possui apenas uma classe client ServiceProvider, criei uma classe específica para a Api 'cards', mas poderia ter criado uma classe genérica para utilizar em todas as outras Apis. 

## Conclusão

Foi construído uma aplicação simples com um design com muitas melhorias pendentes, e mesmo que o Angular crie as classes de teste de cada componente, ainda não foi implementado um teste unitário por falta de tempo.

Autor: João Paulo Medina Passos
