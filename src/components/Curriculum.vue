<template>
  <section>
    <header>
      <h1 v-html="name"></h1>
      <h2 v-html="skill"></h2>
    </header>
    <main>
      <Profile />
      <Experience />
    </main>
  </section>
</template>

<script>
export default {
  name: 'curriculum',
  components:{
    Profile: () => import('@/components/Info/Profile.vue'),
    Experience: () => import('@/components/Info/Experience.vue')
  },
  data: () => ({
    name: 'HENRIQUE BISSOLI',
    skill: 'FULLSTACK DEVELOPER & PENTESTER'
  })
}
</script>

<style scoped lang="scss">
  section{
    font-family:Raleway,sans-serif;
    background-color:white;
    width:21cm;
    min-height:29.7cm;
    margin:1cm auto;
    border:1px solid #d3d3d3;
    overflow:hidden;
    box-shadow:0 0 5px rgba(0,0,0,.1);
    display:flex;
    flex-direction:column;

    header{
      padding:1.52cm 0;

      h1{
        font-family:Raleway,sans-serif;
        font-weight:300;
        color:#484848;
        font-size:.81cm;
        margin:0px 0px .28cm 0px;
        text-align:center;
      }

      h2{
        color:#8c8c8c;
        font-size:.41cm;
        font-family:Raleway,sans-serif;
        font-weight:300;
        text-align:center;
        margin:0px;
      }
    }

    main{
      display:flex;
      justify-content:flex-start;
      flex-grow:1;
      padding:0 1cm 1cm;
      align-items:stretch;
    }
  }

  @media(max-width: 768px){
    section{
      width:100%;
      min-height:auto;
      flex-wrap:wrap;

      header{
        font-size:6vw;

        h1{
          margin:0px 0px 3vw 0px;
        }

        h2{
          font-size:3.3vw;
        }
      }

      main{
        flex-wrap:wrap;
        padding:0 4vw 4vw;
        justify-content:center;
      }
    }
  }
</style>
