<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="css/form.css" rel="stylesheet">
  <title>Wikiposa</title>

</head>

<body>
  <div class="wrapper">
    <?php include 'header.php'; ?>
    <?php include 'sidebar.php'; ?>
    <?php include 'footer.php'; ?>
    <main>
      <div class="conteudo">
        <h1>Formulário de contato</h1>
        <form class="formulario" id="formulario1">
          <fieldset>

            <label for="nome1">Nome:</label>
            <input type="text" id="nome1" name="nome">
            <label for="email1">E-mail:</label>
            <input type="email" id="email1" name="email">
            <label for="dnasc1">Data de nascimento: </label>
            <input type="date" id="dnasc1" name="dnasc">
            <label for="tel1">Telefone:</label>
            <input type="tel" id="tel1" name="tel">
            <label for="assunto1">Assunto:</label>
            <select id="assunto1" name="assunto">
              <option value="imagem">Enviar imagem</option>
              <option value="reclamacao">Enviar reclamação ou crítica</option>
              <option value="sugestao">Enviar sugestão</option>
              <option value="incorreto">Reportar dado incorreto</option>
            </select>
            <label for="imagens1">Envie sua imagem</label>
            <input type="file" name="imagens" id="imagens1">
            <label for="mensagem1">Escreva sua mensagem:</label>
            <textarea name="mensagem" id="mensagem1" form="formulario1"></textarea>
            <input class="botao" type="submit" name="enviar" id="enviar1">
          </fieldset>
        </form>
      </div>
    </main>
  </div>
</body>
</html>