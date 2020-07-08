<template>
  <Curriculum />
</template>

<script>
export default {
  name: 'app',
  components: {
    Curriculum: () => import('@/components/Curriculum'),
  }
}
</script>

<style lang="scss">
  html,body{margin:0;padding:0}

  body{

    background-color:#e6e6e6;
  }

  @media print {

    @page {

      margin:0cm;
      padding:0cm;
    }

    body{

      header{
        padding:0.15cm 0!important;

        h1{
          font-weight: bold;
          font-size:.5cm!important;
        }

        h2{
          font-size:.4cm!important;
        }
      }

      >section{

        margin:0!important;

        main{

          aside{

            section{

              margin-bottom:0.05cm!important;

              h1{
                margin:.5cm 0px .05cm 0px!important;
              }

              ul{

                li{

                  margin-bottom:0.05cm!important;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
