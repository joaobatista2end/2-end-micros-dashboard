module.exports = {
    root: true,  // Indica que esta é a configuração raiz e não deve procurar configurações acima desta
    env: {
      node: true,  // Define o ambiente do Node.js
    },
    extends: [
      'plugin:vue/vue3-essential',  // Regras essenciais para Vue 3
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',  // Utiliza o parser Babel para suportar as últimas features JS
      requireConfigFile: false,  // Desativa a necessidade de um arquivo de configuração Babel separado
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',  // Permite console.log em dev, mas avisa em produção
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',  // Permite debugger em dev, mas avisa em produção
      'vue/multi-word-component-names': 'off',  // Desativa a regra que exige nomes de componentes com mais de uma palavra
      // Adicione ou modifique outras regras conforme necessário
    },
  };