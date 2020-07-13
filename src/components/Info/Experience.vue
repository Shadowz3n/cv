<template>
  <aside>
    <section>
      <h1>EXPERIÊNCIA</h1>

      <ul class="jobs">
        <li v-for="(job, index) in jobs" v-bind:key="index">
          <b v-html="job.title"></b>
          <span v-html="job.subTitle"></span>
          <p v-html="job.description"></p>
        </li>
      </ul>
    </section>

    <section>
      <h1>EDUCAÇÃO</h1>

      <ul class="education">
        <li v-for="(edu, index) in education" v-bind:key="index">
          <b v-html="edu.title"></b>
          <span v-html="edu.info"></span>
          <p v-html="edu.where"></p>
        </li>
      </ul>
    </section>

    <section>
      <h1>COMPLEMENTOS</h1>

      <ul class="complements">
        <li v-html="complement" v-for="(complement, index) in complements" v-bind:key="index"></li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: "experience",
  data: () => ({
    jobs: [
      {
        title: "FullStack Developer · Purple Cow",
        subTitle: "Jul 2017 - Dez 2019",
        description:
          "Implantação de uma reforma na área de tecnologia, migrando os projetos para tecnologias emergentes e boas práticas de desenvolvimento. Assim como testes de vulnerabilidade e segurança em projetos internos e externos. Desenvolvimento de projetos voltados a campanhas publicitárias e ferramentas de uso interno da empresa.",
      },
      {
        title: "Technology Director · Adman Criativa",
        subTitle: "Jan 2014 - Abr 2017",
        description:
          "Atuando no desenvolvimento, gerenciamento e segurança dos projetos em sistemas, portais, landing pages, email marketings e banners animados com o foco em campanhas publicitárias. Cuidando também da parte de segurança da informação e testes de vulnerabilidade em servidores de clientes.",
      },
      {
        title: "FullStack Developer · Rolemak",
        subTitle: "Jun 2011 - Out 2013",
        description:
          "Desenvolvimento do sistema próprio da empresa Rolemak, tratando-se de um gerenciador de páginas web como um CMS, atuando com frameworks avançados em PHP e Javascript como Kohana e jQuery.",
      },
      {
        title: "FullStack Developer · Resoluti",
        subTitle: "Jan 2009 - Ago 2009",
        description:
          "Desenvolvimento de sistemas e ferramentas com foco em Gestão de TI e Infraestrutura, implementando soluções tecnológicas em PHP para pequenas e médias empresas.",
      },
    ],
    education: [
      {
        title: "CyberSecurity",
        info: "Fev 2019 - Cursando",
        where: "FIAP",
      },
    ],
    complements: [
      "Git",
      "Docker",
      "Scrum",
      "Cloudflare",
      "Workers",
      "Workers KV",
      "AWS",
      "Actix",
      "Firebase",
      "Linux",
      "Machine Learning",
      "Laravel",
      "CodeIgniter",
      "Flask",
      "Wordpress",
      "PhoneGap",
      "WooCommerce",
      "Magento 1.x",
      "Magento 2.x",
      "TypeScript",
      "ES6",
      "Vuex",
      "React Native",
      "Redux",
      "Vuetify",
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "WebAssembly",
      "Gatsby",
    ],
  }),
};
</script>

<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  padding: 0.52cm 0 0;
  align-items: flex-start;
  justify-content: flex-start;

  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 1cm;

    h1 {
      font-family: Raleway, sans-serif;
      font-size: 0.32cm;
      font-weight: 800;
      letter-spacing: 0.02cm;
      margin: 0 0 0.5cm 0;
    }

    ul.jobs {
      list-style: none;
      font-size: 0.32cm;
      line-height: 1.3;
      display: flex;
      flex-direction: column;
      padding: 0px;
      margin: 0px;

      li {
        border-bottom: 1px solid #d3d4d6;
        margin-bottom: 0.42cm;
        padding-bottom: 0.42cm;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        b {
          font-weight: 700;
          width: 100%;
        }

        span {
          font-size: 0.95em;
          margin-bottom: 0.17em;
        }

        p {
          color: #444;
          padding: 0px;
          margin: 0px;
        }
      }
    }

    ul.education {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0px;
      padding: 0px;

      li {
        display: flex;
        flex-direction: column;

        b {
          font-weight: 700;
          width: 100%;
          font-size: 0.32cm;
          line-height: 1.3;
        }

        span {
          font-size: 0.3cm;
          margin-bottom: 0.17em;
          line-height: 1.3;
        }

        p {
          color: #444444;
          font-size: 0.32cm;
          line-height: 1.3;
          margin: 0px;
          padding: 0px;
        }
      }
    }

    ul.complements {
      display: flex;
      list-style: none;
      margin: 0px;
      padding: 0px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 0.32cm;
        line-height: 1.3;
        margin: 0 0.31cm 0.31cm 0;
        transition: transform 0.3s ease;
        cursor: default;
      }
    }
  }
}

@media (max-width: 768px) {
  aside {
    width: 8cm;
  }
}
</style>