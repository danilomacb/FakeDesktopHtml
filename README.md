# Fake Desktop HTML Mockup

Mockup de desktop em HTML, CSS e JS puro projetado para rodar em tela cheia (F11).

## Alternar entre Modo Desktop e Modo App

- **Modo Desktop (padrão):** Exibe o papel de parede esticado e os ícones na tela.
- **Modo App:** Oculta os ícones e ajusta a imagem de fundo para preencher perfeitamente o espaço acima da barra de tarefas, simulando um aplicativo aberto.

Abra o **Console do Navegador (F12)** e use os comandos abaixo:

```javascript
// Ativar Modo App com a imagem de um aplicativo:
setAppMode(true, './Caminho/Para/Sua/Imagem.png')

// Desativar Modo App (voltar ao Desktop):
setAppMode(false)

// Alternar dinamicamente entre os dois modos:
toggleAppMode('./Caminho/Para/Sua/Imagem.png')
```
