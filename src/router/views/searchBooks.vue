<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import { mapState, mapActions } from 'vuex'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data: function() {
    return {
      searchStr: '',
    }
  },
  computed: {
    ...mapState('search', {
      totalCount: (state) => state.totalCount,
      currentIndex: (state) => state.pageIndex,
      bookList: (state) => state.currentPage,
    }),
  },
  ...mapState('search', {
    created(state) {
      this.searchStr = state.titlePortion
    },
  }),
  methods: {
    ...mapActions('search', ['searchTitle', 'goToPage']),
  },
}
</script>

<template>
  <Layout>
    <h1>Search Book</h1>

    <div :class="$style.container">
      <div class="row">
        <div class="col-12"><h2>Text Box Search icon</h2></div>
        <div class="col-12">
          <div :class="$style['custom-search-input']">
            <div class="input-group">
              <input
                v-model.trim="searchStr"
                type="text"
                class="form-control"
                :class="$style['search-query']"
                placeholder="Search"
                @keyup.enter="searchTitle(searchStr)"
              />
              <span class="input-group-btn">
                <button
                  :class="$style['search-button']"
                  type="button"
                  @click="searchTitle(searchStr)"
                >
                  <span class="fa fa-search"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="panel panel-default list-group-panel">
          <div
            class="panel-body"
            style="background-color: white"
            :class="$style['panel-body']"
          >
            <ul
              class="list-group list-group-header"
              :class="$style['list-group-header']"
            >
              <li
                class="list-group-item list-group-body"
                :class="$style['list-group-item']"
              >
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-5 text-left">Title</div>
                  <div class="col-3">Author</div>
                  <div class="col-3">Publisher</div>
                </div>
              </li>
            </ul>
            <ul
              class="list-group list-group-body"
              :class="$style['list-group-body']"
            >
              <li
                v-for="(book, i) in bookList"
                :key="book.title"
                class="list-group-item"
                :class="$style['list-group-item']"
              >
                <div class="row">
                  <div class="col-1">{{ 1 + i + 20 * currentIndex }}</div>
                  <div class="col-5 text-left">
                    <a
                      ><span
                        class="fa fa-file"
                        :class="$style.glyphicon"
                        aria-hidden="true"
                      ></span>
                      {{ book.title }}
                    </a>
                  </div>
                  <div class="col-3">{{ book.author }}</div>
                  <div class="col-3">{{ book.publisher }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentIndex <= 0 }">
          <a
            class="page-link"
            type="button"
            @click="gotToPage(currentIndex - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          :class="{ disabled: Math.ceil(totalCount / 20) <= currentIndex + 1 }"
        >
          <a class="page-link" type="button" @click="goToPage(currentIndex + 1)"
            >Next</a
          >
        </li>
        <span style="padding-left: 15px;padding-top:10px"
          >Total: {{ totalCount }}</span
        >
      </ul>
    </nav>
  </Layout>
</template>

<style lang="scss" module>
.container {
  padding: 10px 10% 45px;
  text-align: center;

  .custom-search-input {
    padding: 0;
    margin: 0;
    margin-top: 10px;

    .search-query {
      width: 100%;
      padding-right: 3px;
      padding-left: 15px;

      /* IE7-8 doesn't have border-radius, so don't indent the padding */
      margin-bottom: 0;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 0;
    }
    .search-query:focus {
      z-index: 0;
    }

    .search-button {
      position: absolute;
      right: 0;
      z-index: 2;

      /** belows styles are working good */
      padding: 2px 5px;
      margin-top: 7px;

      /* IE7-8 doesn't have border-radius, so don't indent the padding */
      margin-bottom: 0;
      color: #d9230f;
      cursor: unset;
      background: none;
      border: 0;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }
  }
}

.list-group-item {
  padding-left: 0;
  border: 0;
  border-color: rgba(37, 40, 43, 0.1);
  border-top: 1px solid;
}
.list-group-item:first-child {
  border: 0;
}
.list-group-item a {
  color: #2895f1;
  text-decoration: none;
  cursor: pointer;
}
.list-group-header {
  padding: 0;
  margin: 0;
}
.glyphicon {
  font-size: 25px;
  vertical-align: middle;
}
.panel-body {
  padding-left: 15px;
  border: 1px solid #ccdbeb;
  border-radius: 0;
}
</style>
