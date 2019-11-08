<template>
  <v-app id="inspire">
    <v-content>
      <v-snackbar
        v-model="snackbar"
        :color="color"
        :timeout="3000"
        :top="true"
      >
        {{ text }}
        <v-btn
          dark
          text
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </v-snackbar>

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Tela de login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" label="E-mail" name="login" type="text" />
                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="login()" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    snackbar: false,
    color: "success",
    text: "",
    email: "",
    password: ""
  }),
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password
      }
      const url = `${process.env.VUE_APP_BACK_URL}/login`
      try {
        await this.axios.post(url, payload)
        this.text = "Login realizado com sucesso!"
        this.color = "success"
        this.snackbar = true  
      } catch (error) {
        this.text = "Dados de login incorreto"
        this.color = "error"
        this.snackbar = true  
      }
      
    }
  }
};
</script>