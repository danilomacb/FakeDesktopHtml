# Fake Desktop HTML Mockup

Mockup de desktop em HTML, CSS e JS puro projetado para rodar em tela cheia (F11).

## Alternar entre Modo Desktop e Modo App

- **Modo Desktop (padrão):** Exibe o papel de parede esticado e os ícones na tela.
- **Modo App:** Oculta os ícones e ajusta a imagem de fundo para preencher perfeitamente o espaço acima da barra de tarefas, simulando um aplicativo aberto.

**Clique no botão da porta** (o ícone mais à esquerda na barra de tarefas) para alternar entre os dois modos.

## Trocar a imagem de fundo

Use as **setas do teclado** para percorrer as imagens da pasta `Wallpaper/`:

- **→ / ↓:** próxima imagem
- **← / ↑:** imagem anterior

Para adicionar novas imagens ao ciclo, coloque-as na pasta `Wallpaper/` e inclua o caminho no array `wallpapers` em `script.js`.

## Controle via Console (opcional)

Também é possível controlar o modo pelo **Console do Navegador (F12)**:

```javascript
// Ativar Modo App com a imagem de um aplicativo:
setAppMode(true, './Wallpaper/FakeDiscord.png')

// Desativar Modo App (voltar ao Desktop):
setAppMode(false)

// Alternar dinamicamente entre os dois modos:
toggleAppMode('./Caminho/Para/Sua/Imagem.png')
```
