import axios from 'axios'

export const state = {
  titlePortion: '',
  totalCount: 0,
  pageSize: 20,
  pageIndex: 0,
  currentPage: [],
}

export const mutations = {
  updateWithSearchResult(
    state,
    // eslint-disable-next-line camelcase
    { num_results, results },
    titlePortion,
    pageIndex
  ) {
    state.titlePortion = titlePortion
    state.pageIndex = pageIndex
    // eslint-disable-next-line camelcase
    state.totalCount = num_results
    state.currentPage = results.forEach((book) => {
      return {
        title: book.title,
        author: book.author,
        publisher: book.publisher,
      }
    })
  },
}

const bestSellerHistoryBaseUrl =
  'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=BQfEIBRSvOpksrcWmVbNd1NqqTx3m7uq'

let assembleSearchUrl = ({ titlePortion, pageIndex }) =>
  `${bestSellerHistoryBaseUrl}&title=${titlePortion}&offset=${pageIndex * 20}`

export const actions = {
  async searchTitle({ state, commit }, title) {
    let searchUrl = assembleSearchUrl({
      titlePortion: title || '',
      pageIndex: 0,
    })
    let result = await axios.get(searchUrl).then((resp) => resp.data)

    commit('updateWithSearchResult', result, title, 0)
  },
  async goToPage({ state, commit }, index) {
    if (index < 0 || Math.ceil(state.totalCount / 20) < index) {
      return
    }
    let searchUrl = assembleSearchUrl({
      titlePortion: state.titlePortion,
      pageIndex: index,
    })
    let result = await axios.get(searchUrl).then((resp) => resp.data)

    commit('updateWithSearchResult', result, state.titlePortion, index)
  },
}
