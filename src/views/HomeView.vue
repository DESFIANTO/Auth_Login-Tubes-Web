<template>
  <v-container>
      <v-layout wrap style="margin-top: 150px;">
        <v-flex sm12 md6 offset-md3>
          <v-card>
            <v-col md="12">
              <v-row>
                <v-col md="12">
                  <v-text-field
                        label="Username"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                      label="Password"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>

              <v-col md="12">
                  <v-row>
                      <v-col md=12>   
                          <v-btn block color="primary">
                            Login
                        </v-btn>
                      </v-col>

                      <v-col md=12>   
                          <v-btn 
                              block color="primary"
                              @click="redirectDaftarView()"
                          >
                              Daftar
                          </v-btn>
                      </v-col> 
                      
                      <v-col md=12>
                        <p>Lupa Password ? <router-link to="lupa-password">Klik Disini</router-link> </p>
                      </v-col>
                  </v-row>
              </v-col>
          </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    methods: {
        redirectDaftarView(){
            this.$router.push('/daftar')
        } 
    }
}
</script>