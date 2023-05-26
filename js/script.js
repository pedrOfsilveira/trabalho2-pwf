function addstuff() {
  $('.wrapper').append('<header><a href="index.html"><img class="logo" alt="logo do site Wikiposa" src="img/logo.png"></a><a class="sobre" href="sobre.html"><p>sobre nós</p></a></header>');

  $('.wrapper').append('<footer><div class="footer_centro"><a href="index.html"><img class="rodalogo" src="img/logo.png" alt="logo rodapé"></a><div class="textoroda"><a href="#">Início</a> <a href="sobre.html">Sobre nós</a> <br></div><p class="copy">© Wikiposa</p></div></footer>'); 

  $('<aside></aside>').appendTo('.wrapper');
 
  $('<nav></nav>').appendTo('aside');
  $('<div class="botao" id="botao_raposa"> <a href="feneco.html"> <p> Raposa do Mês </p> </a> </div> <img class="raposa_mes" alt="imagem da raposa do mês" src="img/feneco_raposadomes.png">').appendTo('nav');
 
  $('<div class="menu_botao" id="botao_especie"></div>').appendTo('nav');
  
  $('<input id="especies" class="botao" type="checkbox"><label for="especies" class="lbl-botao">espécies </label>').appendTo('#botao_especie');
  
  $('<div class="fundo_botao"> <div class="conteudo_interior"> <a href="feneco.html"> <p> zerda </p> </a> <a href="veloz.html"> <p> velox </p> </a> <a href="vermelha.html"> <p> vulpes </p> </a> <a href="artico.html"> <p> lagopus </p> </a> <a href="afega.html"> <p> cana </p> </a> <a href="ana.html"> <p> macrotis </p> </a> <a href="himalaia.html"> <p> ferrilata </p> </a> <a href="estepes.html"> <p> corsac </p> </a> <a href="cabo.html"> <p> chama </p> </a> <a href="bengala.html"> <p> bengalensis </p> </a> <a href="ruppell.html"> <p> rueppellii </p> </a> <a href="palida.html"> <p> pallida </p> </a> </div> </div> </div>'
  ).appendTo('#botao_especie');
  
  $('<div class="menu_botao" id="botao_artigo"> <input id="artigos" class="botao" type="checkbox"> <label for="artigos" class="lbl-botao">artigos </label> <div class="fundo_botao"> <div class="conteudo_interior"> <a href="mitologias.html"> <p> Raposas na mitologia </p> </a> <a href="domesticas.html"> <p> Raposas domésticas </p> </a> </div> </div> </div>').appendTo('nav');
  
  $('<div class="botao" id="botao_faq"> <a href="faq.html"> <p> faq </p> </a> </div> <div class="botao" id="botao_galeria"> <a href="galeria.html"> <p> galeria </p> </a> </div>').appendTo('nav');
}


window.onload = addstuff;