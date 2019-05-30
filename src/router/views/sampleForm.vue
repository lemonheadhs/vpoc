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
    <h1>Sample Form</h1>

    <Div class="container">
      <div class="col-md-8">
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                id="validationCustom01"
                type="text"
                class="form-control"
                placeholder="First name"
                value="Mark"
                required
              />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                id="validationCustom02"
                type="text"
                class="form-control"
                placeholder="Last name"
                value="Otto"
                required
              />
              <div class="valid-feedback">
                Looks good!
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
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
              <input
                id="validationCustom03"
                type="text"
                class="form-control"
                placeholder="City"
                required
              />
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom04">State</label>
              <input
                id="validationCustom04"
                type="text"
                class="form-control"
                placeholder="State"
                required
              />
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationCustom05">Zip</label>
              <input
                id="validationCustom05"
                type="text"
                class="form-control"
                placeholder="Zip"
                required
              />
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                id="invalidCheck"
                class="form-check-input"
                type="checkbox"
                value=""
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    </Div>
  </Layout>
</template>
