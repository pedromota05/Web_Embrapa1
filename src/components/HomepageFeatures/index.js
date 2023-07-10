import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        </div>
      </div>
    </section>
  );
}

export const Testeapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CarregaBlogs();
    document.title = 'teste';
  }, []);

  const CarregaBlogs = async () => {
    const url = 'http://localhost:1337/api/embrapa-testes?populate=*';
    try {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        const data = json.data;
        console.log('API response:', data);
        setData(data);
      } else {
        throw new Error('Falha na requisição. Código de status: ' + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className='container'>
      <div className='card-container'>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className='card'>
                <img className="card-img" src={`http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`} alt="Imagem" />
                  <span className="card-description">{item.attributes.released}</span>
                  <p className="card-title">{item.attributes.title}</p>
                  <a href="#" className="card-link">Saiba Mais</a>
              </div>
            ))
          ) : (
            <p>Carregando dados...</p>
          )}
      </div>
    </div>
    </>
  );
};


export const Localization = () => {
  return(
    <>
    <footer id="footer-top" style={{backgroundImage: `url('img/sombra.png')`, marginTop: '80px'}} role="contentinfo">
      <div id="rodape-unidade"> 
        <div id="rodape-unidade-conteudo"> 
          <div className="rodape-unidade-coluna1"> 
            <h3 className="titulo-esquerda"> Embrapa Agropecuária Oeste </h3> 
          </div> 
          <div className="rodape-unidade-coluna2"> 
            <div className="conteudo-direita"> 
              <p>Rodovia BR 163, Km 253,6, Caixa Postal 449, CEP: 79804-970, Dourados, MS <br/> 
                Fone: + 55 (67) 3416-9700 |&nbsp;
                <a href="/fale-conosco" style={{lineHeight: '1.4'}}>SAC</a>
              </p> 
              <p>
                <a href="https://www.embrapa.br/group/intranet/agropecuaria-oeste">Acesso restrito</a>
              </p> 
            </div> 
          </div> 
          <div className="clear"></div> 
        </div> 
      </div>
      </footer>
    </>
  )
}

export const Footer = () => {
  return(
    <>
    <footer className="tp-rodape"> 
      <section className="tp-rodape-itens"> 
        <div> 
          <div className="tp-rodape-marca"> 
            <img src="https://www.embrapa.br/image/layout_set_logo?img_id=1343656&t=1688853612647" alt="Marca Embrapa"/> 
            <div className="tp-rodape-endereco"> 
              <p>Empresa Brasileira de Pesquisa Agropecuária</p> 
              <p>Parque Estação Biológica - PqEB, s/nº, Brasília, DF</p> 
              <p>CEP 70770-901 / Telefone (61) 3448-4433</p> 
            </div> 
          </div> 
          <div className="tp-rodape-redes-sociais"> 
            <div> Siga a Embrapa <br/> nas redes sociais </div> 
            <ul className="icons-container"> 
              <li> 
                <a href="/youtube" title="YouTube" className="icon"> 
                <span className="tp-rodape-redes-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </span> 
              </a> 
            </li> 
            <li> 
              <a href="/twitter" title="Twitter" className="icon"> 
                <span className="tp-rodape-redes-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </span> 
              </a> 
            </li> 
            <li> 
              <a href="/facebook-embrapa" title="Facebook" className="icon"> 
                <span className="tp-rodape-redes-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </span> 
              </a> 
            </li>
            <li> 
              <a href="/instagram" title="Instagram" className="icon"> 
                <span className="tp-rodape-redes-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </span> 
              </a> 
            </li> 
            <li> 
              <a href="https://br.linkedin.com/company/embrapa" title="LinkedIn" className="icon"> 
                <span className="tp-rodape-redes-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </span> 
              </a> 
            </li> 
          </ul> 
        </div> 
      </div> 
      <ul className="tp-rodape-menu"> 
        <li className="tp-rodape-menu-item"> 
          <div>Para empresas e startups</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/ativos-para-parcerias#cooperacao-com-a-embrapa">Como fazer parceria com a Embrapa</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/ativos-para-parcerias">Ativos disponíveis para parcerias</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/licenciamento">Licenciamento de tecnologias Embrapa</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/financiamentos-desafios-e-programas-de-inovacao">Financiamento, desafios e programas</a>
            </li> 
          </ul> 
        </li> 

        <li className="tp-rodape-menu-item"> 
          <div>Para produtores e técnicos</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/conteudos-tecnicos">Conteúdos técnicos</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/tecnologias">Catálogo de tecnologias</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/como-comprar-ou-ter-acesso-a-tecnologias">Como comprar ou ter acesso a tecnologias</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/cultivos-criacoes-e-sistemas-de-producao">Cultivos e criações | Sistemas de produção - Ageitec</a>
            </li> 
          </ul> 
        </li> 

        <li className="tp-rodape-menu-item"> 
          <div>Para pesquisadores e estudantes</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/publicacoes-cientificas">Publicações científicas</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/pesquisa-e-desenvolvimento/portfolios">Portfólios de projetos</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/dados-de-pesquisa">Dados de pesquisa</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/acessoainformacao/carta-de-servicos-ao-cidadao/servicos">Serviços laboratoriais e de acesso a materiais</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/seb/servicos">Serviços de bibliotecas</a>
            </li> 
          </ul> 
        </li> 

        <li className="tp-rodape-menu-item"> 
          <div>Institucional</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/sobre-a-embrapa">Sobre a Embrapa</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/dirigentes">Dirigentes</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/embrapa-no-brasil">Embrapa no Brasil</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/embrapa-em-numeros">Embrapa em números</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/atuacao-internacional">Atuação internacional</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/relacoes-institucionais">Relações institucionais</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/organograma">Organograma</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/estagios-e-concursos">Estágios e concursos</a>
            </li> 
          </ul> 
        </li> 

        <li className="tp-rodape-menu-item"> 
          <div>Atendimento</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/fale-conosco">Fale conosco (SAC)</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/acessoainformacao/servico-de-informacao-ao-cidadao-sic">Serviço de Informação ao Cidadão (SIC)</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/ouvidoria">Ouvidoria</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/codigo-de-etica">Comissão de Ética</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/comite-de-auditoria-da-embrapa">Comitê de Auditoria</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/sala-de-imprensa">Sala de imprensa</a>
            </li> 
          </ul> 
        </li> 

        <li className="tp-rodape-menu-item"> 
          <div>Transparência e serviços</div> 
          <ul> 
            <li>
              <a className="color-link-footer" href="/acessibilidade">Acessibilidade</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/mapa-do-site">Mapa do site</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/acessoainformacao/transparencia-e-prestacao-de-contas">Transparência e prestação de contas</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/documentos-institucionais-e-atos-oficiais">Documentos institucionais e atos oficiais</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/acessoainformacao/carta-de-servicos-ao-cidadao">Carta de Serviços ao Cidadão</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/sei-sistema-eletronico-de-informacoes">Acesso externo SEI</a>
            </li> 
            <li>
              <a className="color-link-footer" href="/acessoainformacao/licitacoes-e-contratos">Licitações e contratos</a>
            </li> 
          </ul> 
        </li> 
      </ul> 
    </section> 
  </footer>
    </>
  )
}

export const Footer_Bottom = () => {
  return(
    <>
    <section className="tp-roda-rodape">
      <div className="tp-rodape-rodape">
          <div className="tp-rodape-direitos"> 
            <p>Todos os direitos reservados, conforme Lei nº 9.610</p> 
          </div> 
          <div className="tp-rodape-login">
            <a className="tp-botao" href="/acesso-restrito">Acesso restrito</a> 
          </div> 
      </div>
    </section>
    </>
  )
}


// export async function getServerSideProps(context) {
//   const response = await axios.get('http://localhost:1337/api/embrapa-testes');
//   const data = await response.data;

//   return {
//     props: { users: data ?? [] },
//   };
// }

