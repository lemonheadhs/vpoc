<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import { required, maxLength, integer } from 'vuelidate/lib/validators'
import { mapState, mapMutations } from 'vuex'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      zip: 0,
      agreed: false,
    }
  },
  validations: {
    firstName: {
      required,
      maxLength: maxLength(20),
    },
    lastName: {
      required,
      maxLength: maxLength(20),
    },
    username: {
      required,
      maxLength: maxLength(20),
    },
    city: {
      //
    },
    state: {
      //
    },
    zip: {
      integer,
    },
    agreed: {
      mustBeTrue: (value) => value === true,
    },
  },
  ...mapState('sampleForm', {
    created(state) {
      this.firstName = state.firstName
      this.lastName = state.lastName
      this.username = state.username
      this.city = state.city
      this.state = state.state
      this.zip = state.zip
      this.agreed = state.agreed
    },
  }),
  methods: {
    ...mapMutations({ saveForm: 'sampleForm/saveForm' }),
    save() {
      if (this.$v.$invalid) {
        return
      }
      this.saveForm({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        city: this.city,
        state: this.state,
        zip: this.zip,
        agreed: this.agreed,
      })
    },
  },
}
</script>

<template>
  <Layout>
    <h1>Sample Form</h1>

    <Div class="container">
      <div class="col-md-8">
        <form class="needs-validation" novalidate nosubmit>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01" :class="$style.required"
                >First name</label
              >
              <input
                id="validationCustom01"
                v-model.trim="$v.firstName.$model"
                type="text"
                class="form-control"
                placeholder="First name"
                :class="{
                  'is-invalid': $v.firstName.$invalid && $v.firstName.$dirty,
                }"
              />
              <div v-if="!$v.firstName.required" class="invalid-feedback">
                Required.
              </div>
              <div v-if="!$v.firstName.maxLength" class="invalid-feedback">
                Length should less then 20.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02" :class="$style.required"
                >Last name</label
              >
              <input
                id="validationCustom02"
                v-model.trim="$v.lastName.$model"
                type="text"
                class="form-control"
                placeholder="Last name"
                :class="{
                  'is-invalid': $v.lastName.$invalid && $v.lastName.$dirty,
                }"
              />
              <div v-if="!$v.lastName.required" class="invalid-feedback">
                Required.
              </div>
              <div v-if="!$v.lastName.maxLength" class="invalid-feedback">
                Length should less then 20.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustomUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span id="inputGroupPrepend" class="input-group-text">@</span>
                </div>
                <input
                  id="validationCustomUsername"
                  v-model.trim="$v.username.$model"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  :class="{
                    'is-invalid': $v.username.$invalid && $v.username.$dirty,
                  }"
                />
                <div v-if="!$v.username.required" class="invalid-feedback">
                  Required.
                </div>
                <div v-if="!$v.username.maxLength" class="invalid-feedback">
                  Length should less then 20.
                </div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
              <input
                id="validationCustom03"
                v-model.trim="$v.city.$model"
                type="text"
                class="form-control"
                placeholder="City"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom04">State</label>
              <input
                id="validationCustom04"
                v-model.trim="$v.state.$model"
                type="text"
                class="form-control"
                placeholder="State"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">Zip</label>
              <input
                id="validationCustom05"
                v-model.trim="$v.zip.$model"
                type="text"
                class="form-control"
                placeholder="Zip"
                :class="{ 'is-invalid': $v.zip.$invalid && $v.zip.$dirty }"
              />
              <div v-if="$v.zip.$invalid" class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                id="invalidCheck"
                v-model="$v.agreed.$model"
                class="form-check-input"
                type="checkbox"
                :class="{
                  'is-invalid': $v.agreed.$invalid && $v.agreed.$dirty,
                }"
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div v-if="$v.agreed.$invalid" class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            :disabled="$v.$invalid"
            @click="save"
            >Submit form</button
          >
        </form>
      </div>
    </Div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.required::after {
  color: red;
  content: '*';
}
</style>
