class Noticia{
  constructor(titulo, data_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

  mostrarNoticia(){
    return this.titulo + "\n" + this.data_publicacao + "\n" + this.resumo + "\n" + "\n" + this.texto;
  }
}

let noticia = new Noticia("Guerra da Ucrânia", "12-02-22", "Os crimes de guerra ocorridos durante a invasão da Ucrânia pela Rússia em 2022", "A guerra na Ucrânia chega nesta terça-feira (21) ao seu 27°dia. Segundo o jornal inglês The Guardian, a cidade de Mariupol foi invadida por forças russas. Mariupol é considerada estratégica pela Rússia por sua posição geográfica. Até agora, a cidade estava cercada pelas tropas invasoras.")
console.log(noticia.mostrarNoticia())
