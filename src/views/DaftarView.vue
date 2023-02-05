<template>
   <v-container>
      <v-layout wrap style="margin-top: 100px">
         <v-flex sm12 md6 offset-md3>
            <v-card>
               <v-col>
                  <v-row>
                     <v-col md="12">
                        <v-text-field
                           outline
                           label="Nama Lengkap"
                           type="text"
                        >
                        </v-text-field>
                        <v-text-field
                           outline
                           label="Email"
                           type="text"
                        >                           
                        </v-text-field>
                        <v-text-field
                           outline
                           label="Password"
                           type="Password"
                        >                           
                        </v-text-field>
                     </v-col>

                     <v-col md="12">
                        <v-raw>
                           <v-col md="12">
                              <v-btn color="primary"> Daftar </v-btn>
                           </v-col>

                           <v-col>
                             <p>Sudah Punya Akun ? <router-link to="/"> Silahkan Login </router-link></p> 
                           </v-col>
                        </v-raw>
                     </v-col>
                  </v-row>
               </v-col>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>