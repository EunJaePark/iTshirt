<template>
  <div class="modal_component">
      <div class="modal_box">
        <h3>필터</h3>
        <form action="">
          <ul>
            <li>
              <input type="checkbox" id="category_name1" name="filter" value="category_name1">
              <label for="category_name1">category_name1</label>
            </li>
            <li>
              <input type="checkbox" id="category_name2" name="filter" value="category_name2">
              <label for="category_name2">category_name2</label>
            </li>
            <li>
              <input type="checkbox" id="category_name3" name="filter" value="category_name3">
              <label for="category_name3">category_name3</label>
            </li>
          </ul>

          <button class="btn">
            <span>저장하기</span>
          </button>
        </form>

        <button class="close_btn">
          <span>✕</span>
        </button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>