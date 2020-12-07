<template>
  <div class="main_component">
      <button class="login_btn btn">
          <span>로그인</span>
      </button>

      <div class="content_box">
          <div class="filter_box">
              <form class="sort_box">
                  <input type="radio" id="up" name="sort" value="up">
                  <label for="up">오름차순</label>
                  <input type="radio" id="down" name="sort" value="down">
                  <label for="down">내림차순</label>
              </form>
              <button class="filter_btn">
                  <span>필터</span>
              </button>
          </div>

          <div class="list_box box_border">
              <div class="category_box">
                  <span class="category_name">category_name</span>
                  <span class="contents_id">contents_id</span>
              </div>

              <div class="user_info_box">
                  <span class="user_id">user_id</span>
                  <span class="created_at">create_at(YYYY-MM-dd)</span>
              </div>

              <div class="title_cont_box padding_right_8per">
                  <h3 class="title">Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title </h3>
                  <span class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents</span>
              </div>

              <button class="go_sub_btn">go subpage</button>
          </div>

          <div class="sponsored_box box_border">
              <span class="sponsored">sponsored</span>
              <div class="conts_box">
                  <img src="http://placehold.it/310x179" alt="">
                  <div class="title_cont_box">
                      <span class="title">Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title </span>
                      <span class="contents">contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>