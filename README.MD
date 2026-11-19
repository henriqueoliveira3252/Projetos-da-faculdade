# ⚔️ Batalha RPG

Jogo acadêmico de combate por rodadas para dois jogadores no mesmo navegador, desenvolvido com **HTML5, CSS3 e JavaScript**. Cada jogador escolhe um personagem e decide, a cada rodada, se vale mais a pena atacar, usar uma habilidade ou antecipar o golpe do adversário com uma defesa.

## Como executar e jogar

1. Abra a pasta `Projetos-da-faculdade´ e abra `index.html` no navegador. Se usar o VS Code com a extensão Live Server, clique com o botão direito em `index.html` e escolha **Open with Live Server**.
2. Clique em **Entrar na Arena**. Selecione um personagem para cada jogador e, se quiser, preencha os apelidos. Os dois podem escolher a mesma classe.
3. Confira os atributos e clique em **Iniciar Batalha**. Escolha uma ação em cada painel e clique em **Executar Rodada**.
4. Acompanhe os golpes no campo e consulte o resumo da rodada abaixo da arena. Use **Nova Batalha** para voltar à seleção.

## Páginas

| Página | Conteúdo |
| --- | --- |
| [Início](index.html) | Apresentação do jogo, resumo das regras e atalhos para a arena e o guia. |
| [Classes](classes.html) | Atributos de Nox, Íris e Bronn e descrição das habilidades de cada um. |
| [Arena](arena.html) | Seleção dos jogadores, prévia dos personagens, campo de batalha, controles e registro da rodada. |

## Personagens e habilidades

| Personagem | Classe | Vida | Ataque | Defesa | Habilidade ofensiva | Habilidade defensiva |
| --- | --- | ---: | ---: | ---: | --- | --- |
| **Nox** | Assassino | 85 | 34 | 6 | **Golpe Sombrio** soma 12 ao ataque. | **Passo Sombrio** esquiva o próximo golpe da rodada. |
| **Íris** | Mago | 100 | 30 | 8 | **Raio Arcano** considera apenas metade da defesa base do alvo, arredondada para baixo. | **Barreira Arcana** absorve até 12 pontos de dano do próximo golpe. |
| **Bronn** | Tanque | 135 | 23 | 14 | **Investida de Escudo** soma 6 ao ataque. Depois de golpear, Bronn ganha proteção de até 6 contra o próximo golpe da mesma rodada. | **Muralha** reduz pela metade o dano do próximo golpe, arredondando o resultado para baixo. |

## Regras do combate

- **Ação e iniciativa.** Cada jogador escolhe uma ação por rodada. As defesas são ativadas primeiro. Em seguida, o Jogador 1 tem a iniciativa nas rodadas ímpares e o Jogador 2 nas pares.
- **Dano.** O ataque básico causa `max(0, ataque − defesa)` de dano. As habilidades modificam os atributos usados no cálculo ou o dano recebido. Por exemplo, o Golpe Sombrio de Nox contra a Barreira Arcana de Íris causa **26 de dano** (34 de ataque + 12 do golpe − 8 de defesa − 12 da barreira). Íris passa de 100 para 74 de vida.
- **Recarga.** O ataque básico está disponível a cada rodada. As habilidades ofensiva e defensiva têm recargas independentes. Uma habilidade usada na rodada 1 fica indisponível nas rodadas 2 e 3 e volta na rodada 4.
- **Vitória.** Quando a vida de um lutador chega a zero, o duelo termina. Se ele cair no primeiro golpe da rodada, perde a oportunidade de responder.
- **Empate.** Três rodadas consecutivas sem perda de vida encerram o duelo em empate. Uma rodada com dano zera essa contagem.

## Arena e efeitos visuais

No desktop, os painéis dos jogadores ficam nas laterais e os personagens se enfrentam no centro. Cada painel mostra retrato, vida, ataque, defesa, ações e recargas. O campo exibe a rodada, a iniciativa e a contagem de rodadas seguidas sem dano.

As animações identificam as habilidades em ação. Nox deixa um rastro violeta ao avançar ou esquivar. Íris canaliza o raio no cajado e ergue uma barreira azul que reage ao impacto. Bronn avança com o escudo e levanta uma muralha para aparar o golpe.

Na vitória, o derrotado desaparece e o vencedor ocupa o centro da plataforma sob o letreiro **VITÓRIA**, acompanhado do nome do jogador. Em caso de empate, os dois permanecem na arena. A interface se adapta a telas menores e respeita a preferência de movimento reduzido do sistema.

## Estrutura do projeto

```text
Projeto-gb/
├── .vscode/
│   └── settings.json
├── img/
│   └── personagens/
│       ├── nox-corpo.svg
│       ├── iris-corpo.svg
│       └── bronn-corpo.svg
├── index.html
├── classes.html
├── arena.html
├── style.css
├── script.js
└── README.MD
```

O arquivo `style.css` define o layout, o cenário e as animações. O `script.js` reúne o catálogo de personagens, a lógica das rodadas e a atualização dos elementos da arena. As artes de corpo inteiro ficam em `img/personagens/`.

## Autores

- José Henrique Sarro dos Santos
- Carlos Henrique Pereira Miranda
