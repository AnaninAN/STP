<template>
  <div class="container">
    <div class="row">
      <p>{{route}}</p>
    </div>
    <div class="row">
      <div class="table col-3 mt-4">
        <div class="test__table">
          <table>
            <tr>
              <td class="test__table_td test__table_td_indent" rowspan="4"></td>
              <td class="test__table_td test__table_td_circle" colspan="2">10:00</td>
              <td class="test__table_td test__table_td_text" colspan="2" rowspan="4">kafnjsdnfjjansd
                  sdfaskdjf
              </td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>

            </tr>
            <tr>
              <td class="test__table_td test__table_td_text" colspan="2">15 Мин</td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_indent" rowspan="4"></td>
              <td class="test__table_td test__table_td_circle" colspan="2">11:15 - 12:15</td>
              <td class="test__table_td test__table_td_text" colspan="2" rowspan="4">kafnjsdnfjjansd
                  sdfaskdjf adgosjdkzmfoian
              </td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>

            </tr>
            <tr>
              <td class="test__table_td test__table_td_text" colspan="2">15 Мин</td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_indent" rowspan="4"></td>
              <td class="test__table_td test__table_td_circle" colspan="2">12:30 - 13:30</td>
              <td class="test__table_td test__table_td_text" colspan="2" rowspan="4">kafnjsdnfjjansd
                  sdfaskdjf
              </td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_text" colspan="2">35 Мин</td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_r"></td>
              <td class="test__table_td"></td>
            </tr>
            <tr>
              <td class="test__table_td test__table_td_indent" rowspan="4"></td>
              <td class="test__table_td test__table_td_circle" colspan="2">14:00 - 14:35</td>
              <td class="test__table_td test__table_td_text" colspan="2" rowspan="4">kafnjsdnfjjansd
                  sdfaskdjf adgosjdkzmfoian
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="col-6 mt-4">
        <div id="yandexmap"></div>
      </div>
      <div class="col-3 mt-4">
        <h2>Hotel de Ville</h2>
        <div>4.8 &#9733;</div>
        <h6>Административное здание</h6>
        <img src="" class="img-rounded m-x-auto d-block" alt="">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda commodi corporis cumque distinctio dolorem dolores doloribus, dolorum ducimus enim error est ex hic impedit incidunt ipsa ipsam numquam obcaecati quam quasi quisquam similique, sit, tempora tenetur ullam veniam voluptatem.</div><br>
        <div>1200 &#8381;</div><br>
        <div>5 туров с Hotel de Ville</div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PageRouteSingle',
  props: ['id'],
  data() {
    return {
      route: {},
    }
  },
  mounted() {
    fetch(`http://localhost:8888/routes/${this.id}`)
      .then((response) => response.json())
      .then((route) => {
        this.route = route;
      })
  }
}
</script>

<style lang="scss" scoped>
    #yandexmap {
        height: 100%;
        max-width: none;
    }

    .test__table {
        display: flex;
        justify-content: center;

    }
    .test__table table {
        border-collapse: collapse;
    }
    .test__table_td {
        width: 60px;
        height: 20px;
        text-align: center;
    }
    .test__table_td_r {
        border-right: 1px solid black;
    }
    .test__table_td_text {
        vertical-align: top;
    }
    .test__table_td_indent {
        width: 20px;
    }
    .test__table_td_circle {
        margin: 0 5px;
        border-radius: 20px;
        background-color: #fff;
    }
</style>