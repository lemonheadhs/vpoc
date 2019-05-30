<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
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
                type="text"
                class="form-control"
                :class="$style['search-query']"
                placeholder="Search"
              />
              <span class="input-group-btn">
                <button :class="$style['search-button']" type="button" disabled>
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
        <div
          class="panel panel-default list-group-panel"
          :class="$style['list-group-panel']"
        >
          <div class="panel-body">
            <ul
              class="list-group list-group-header"
              :class="$style['list-group-header']"
            >
              <li
                class="list-group-item list-group-body"
                :class="$style['list-group-item']"
              >
                <div class="row">
                  <div class="col-6 text-left">Name</div>
                  <div class="col-3">Size</div>
                  <div class="col-3">Modified</div>
                </div>
              </li>
            </ul>
            <ul
              class="list-group list-group-body"
              :class="$style['list-group-body']"
            >
              <li class="list-group-item" :class="$style['list-group-item']">
                <div class="row">
                  <div class="col-6 text-left">
                    <a
                      ><span
                        class="fa fa-file"
                        :class="$style.glyphicon"
                        aria-hidden="true"
                      ></span>
                      App Icon
                    </a>
                  </div>
                  <div class="col-3">...</div>
                  <div class="col-3">...</div>
                </div>
              </li>
              <li class="list-group-item" :class="$style['list-group-item']">
                <div class="row">
                  <div class="col-6 text-left">
                    <a
                      ><span
                        class="fa fa-file"
                        :class="$style.glyphicon"
                        aria-hidden="true"
                      ></span>
                      App Icon
                    </a>
                  </div>
                  <div class="col-3">...</div>
                  <div class="col-3">...</div>
                </div>
              </li>
              <li class="list-group-item" :class="$style['list-group-item']">
                <div class="row">
                  <div class="col-6 text-left">
                    <a
                      ><span
                        class="fa fa-file"
                        :class="$style.glyphicon"
                        aria-hidden="true"
                      ></span>
                      App Icon
                    </a>
                  </div>
                  <div class="col-3">...</div>
                  <div class="col-3">...</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
.list-group-panel {
  padding-left: 15px;
  border: 1px solid #ccdbeb;
  border-radius: 0;
}
</style>
