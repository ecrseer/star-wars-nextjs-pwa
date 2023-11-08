import { swapi } from "../../../api";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, makeStyles, Paper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 0.2fr))",
    gridGap: "10px",
    justifyContent: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const MovieList = ({ setPNoFilme }) => {
  const classes = useStyles();

  const [dados, setDados] = useState([]);
  const [todosFilmes, setTodosFilmes] = useState([]);
  const [isLendoInfo, setLendoInfo] = useState(false);

  /* quando movieList for montado/inicializado
       a funcao acessarFilmes faz uma requisicao 
       pelo axios */

  useEffect(() => {
    acessarFilmes();
  }, []);

  /* elemento que será renderizado dentro do botão
    pra mostrar informacoes do filme selecionado;
    só aparece se ´isLendoInfo` for verdadeiro */
  const FilmeInfo = ({ filmeSele }) => {
    return (
      <>
        <br />
        diretor: {filmeSele.director}
        <br />
        produtor: {filmeSele.producer}
        <br />
        numero do filme: {filmeSele.episode_id}
        <br />
        data de lançamento: {filmeSele.release_date}
      </>
    );
  };
  function stringify(x) {
    console.log(Object.prototype.toString.call(x));
  }

  async function acessarFilmes() {
    try {
      /* recebendo asincronimente
              o json da api(swapi) */
      const { data } = await swapi.get("/films?page=1");

      /* gambiarra: quando um filme for desselecionado/
            desclicado a variavel/state `todosFilmes`
            re-alimentará a variavel/state `dados`                
              */
      setDados(data.results);
      setTodosFilmes(data.results);
    } catch (error) {
      /* trycatch:se a api/internet estiver indisponivel 
            não quero que o app quebre */
      console.log(error);
    }
  }

  /* metodo executado sempre que um filme for clicado
        recebe um objeto com os dados do filme 
        que esta atualmente sendo mapeado no return
     */
  async function mostrarInfo(FilmeBtnInfo) {
    /* se no momento que o botao acionou essa 
      funcao ele era um botao que estava com 
      informacoes do filme sendo lidas
      os dados mapeados retornarao ao estado inicial      
       */
    if (isLendoInfo) {
      setLendoInfo(false);
      setDados(todosFilmes);
    } else {
      /* se no momento que o botao nao estava com 
            informacoes do filme entao o filme mapeado
            do respectivo botao sera passado como parametro
            e filtrado dentre todos os filmes armazenados em 
            `dados` */
      let filmeSelecionado = dados.filter((filme) => filme == FilmeBtnInfo);

      /* agora os dados mapearao somente esse filme filtrado */
      setDados(filmeSelecionado);
      setLendoInfo(true);
      /* todos os personagens do filme clicado serao 
            passados como array pra funcao que armazena no
            state `arrPersonagensNoFilme` do `index.js` que
            é componente pai e enviará para a lista de 
            personagens `PeopleList.js` */
      setPNoFilme(FilmeBtnInfo.characters);
    }
  }

  return (
    <div>
      <Paper>-----Clique em um filme para saber os personagens------</Paper>
      {/* grupo de botoes material ui */}
      <ButtonGroup
        orientation="horizontal"
        color="primary"
        aria-label="horizontal contained primary button group"
        variant="text"
        className={classes.root}
      >
        {/* operador ternario que mapeia o state
        `dados` se a swapi tiver populado ele.
        se nao tiver exibira uma div vazia
       */}
        {dados ? (
          dados.map((filme) => (
            <Button
              onClick={() => {
                mostrarInfo(filme);
              }}
              key={filme.episode_id}
            >
              Filme:{filme.title}
              {/* isLendoInfo é ligado/desligado no metodo
                mostrarInfo, aqui é usado outro operador ternario
                para decidir se deve ser renderizado
                 as informacoes do filme                 */}
              {isLendoInfo ? (
                <FilmeInfo filmeSele={filme} />
              ) : (
                <>
                  <br />
                  Clique para mais informacoes
                </>
              )}
            </Button>
          ))
        ) : (
          <>
            <Skeleton variant="rect" width={218} height={118} />
            <Skeleton variant="rect" width={218} height={118} />
            <Skeleton variant="rect" width={218} height={118} />
            <Skeleton variant="rect" width={218} height={118} />
          </>
        )}
      </ButtonGroup>
    </div>
  );
};

export default MovieList;
