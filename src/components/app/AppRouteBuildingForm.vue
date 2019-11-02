<template>
  <div class="container form-container">
    <style>
    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: #C6C6C6;
    }
</style>
<form class="needs-validation" novalidate>
    <div class="container col-12 d-flex justify-content-center align-item-center">
        <div class="form-row">
            <div class="">
                <label for="validationCustom01">Интересы</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Все направления" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </div>
    </div>
    <div class="container">
            <div class="form-row">
                <div class="col-md-2 mb-2">
                    <label for="validationCustom01">Откуда</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Введите место"
                           required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-2 mb-2">
                    <label for="validationCustom02">Куда</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Введите место"
                           required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-2 mb-2">
                    <label for="validationCustom04">Прибываем</label>
                    <input type="text" class="form-control" id="validationCustom04" placeholder="01/01/2020" required>
                    <div class="invalid-feedback">
                        Please provide a valid date.
                    </div>
                </div>
                <div class="col-md-2 mb-2">
                    <label for="validationCustom05">Уезжаем</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="08/01/2020" required>
                    <div class="invalid-feedback">
                        Please provide a valid date.
                    </div>
                </div>
                <div class="col-md-2 mb-2">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Туристы</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2 mb-2">
                    <label for="validationCustom05">Бюджет</label>
                    <input type="text" class="form-control" id="validationCustom06" placeholder="введите в RUB" required>
                    <div class="invalid-feedback">
                        Please provide a valid amount.
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center align-item-center">
            <button class="btn btn-secondary" type="submit">Построить</button>
        </div>
</form>
  </div>
</template>

<script>
export default {
  name: 'AppRouteBuildingForm',
}
</script>

<style lang="scss" scoped>

</style>