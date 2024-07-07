# Projeto

Esse projeto foi desenvolvido para o programa ONE. O Programa ONE é uma iniciativa educacional e de empregabilidade que visa capacitar indivíduos em tecnologia e conectá-los ao mercado de trabalho por meio de parcerias com empresas.

## Funcionalidades

O programa oferece uma plataforma para criptografar e descriptografar mensagens usando um método simples de codificação hexadecimal.

### Características principais:

- **Criptografar**: Transforma o texto inserido em sua representação hexadecimal.
- **Descriptografar**: Converte o texto hexadecimal de volta para o formato original.
- **Copiar para a Área de Transferência**: Permite copiar o texto descriptografado com um único clique.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

1. Clone este repositório.
2. Abra `index.html` em seu navegador.
3. Insira o texto na caixa de entrada.
4. Escolha entre criptografar ou descriptografar.
5. Copie o texto descriptografado, se necessário.

## Exemplo

Para usar a funcionalidade de criptografia:

```javascript
const textToEncrypt = "Exemplo de texto";
const encryptedText = encrypt(textToEncrypt);
console.log(encryptedText); // Saída: "45786d706c6f20646520746578746f"
