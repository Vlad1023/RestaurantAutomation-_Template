<template>
  <v-container>
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
            <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                <v-tab v-for="i in tabs" :key="i">
                    <v-icon large>{{ i.icon }}</v-icon>
                    <div class="caption py-1">{{ i.name }}</div>
                </v-tab>
                <v-tab-item>
                    <v-card class="px-4">
                        <v-card-text>
                            <v-form ref="loginForm" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                        <v-btn x-large block :disabled="!valid" color="success" @click="pushToAdmin">
                                          Login 
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    pushToAdmin() {
      this.$store.commit('enableLogged');
      this.$store.commit('clearOrders');
      this.$router.push('admin');
      this.$swal('Admin panel', 'You`ve logged as admin', 'success');
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Login", icon:"mdi-account"}
    ],
    valid: true,
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
  
  }
</script>
<style scoped src="./Login.css"></style>