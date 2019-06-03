export const state = {
  firstName: '',
  lastName: '',
  username: '',
  city: '',
  state: '',
  zip: null,
  agreed: false,
}

export const mutations = {
  saveForm(state, newVal) {
    state.firstName = newVal.firstName
    state.lastName = newVal.lastName
    state.username = newVal.username
    state.city = newVal.city
    state.state = newVal.state
    state.zip = newVal.zip
    state.agreed = newVal.agreed
  },
}
