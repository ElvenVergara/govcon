<template>
  <div>
    <v-app style="background-color:rgb(237,237,237);">
      <v-toolbar fixed style="height:100px;">
            
            <v-img
              alt="Vuetify Logo"
              class="shrink  my-2"
              :src="require('../../assets/images/govcon_logo.png')"
              transition="scale-transition"
              width="290"
              style="color:white;" />

              <v-spacer></v-spacer>
            <v-btn
              color="primary"
              small
              dark
              @click="loginModal = true"
            >
              <v-icon>mdi-login</v-icon> &nbsp; Log-in
            </v-btn>

      </v-toolbar>


    <div class="pr-5" style="background-color:rgb(17, 64, 110);">

      <v-row
        align="center"
        justify="center">
        <v-col cols="12" md="6" sm="12">
            <v-tabs
              v-model="tab"
              background-color="rgb(17, 64, 110)"
              style="float:left;margin-top:3px;"
              color="white"
              dark
              grow
              height="40"
              slider-size="3">
              <v-tab style="padding:0px;color:white;">
                <b>Home</b>
              </v-tab>

              <v-tab style="padding:0px;color:white;">
                <b>About</b>
              </v-tab>

              <v-tab style="padding:0px;color:white;">
                <b>Wash100</b>
              </v-tab>

              <v-tab style="padding:0px;color:white;">
                <b>Advertise</b>
              </v-tab>

            </v-tabs>

        </v-col>

        <v-col cols="12" md="6" sm="12" class="pr-0">

            <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Search"
            background-color="white"
            color="black"
            outlined
            dense
            style="float:right;margin-top:5px;margin-bottom:5px;height:40px;"
           ></v-text-field>
          
        </v-col>
      </v-row>
      
    </div>

      
        
          






  <v-parallax class="background1" style="height:95%;">
    <v-row
      align="center"
      justify="center"
      
    >
      <v-col cols="12" md="6" sm="12">

        <div style="margin-top:-10px;">
          <p style="text-align:justify;padding:20px;" transition="slide-x-transition">
            <b style="font-size:30px;font-family: century;">About GovCon Index</b><br>
            The Government Contracting (GovCon) industry includes some of the worlds largest and most prestigious firms. The Executive Mosaic GovCon Index is a composite index of thirty firms within the sector. The index measures the performance of the GovCon industry through changes in the aggregate price of component stocks.<br>
            <b><i>Note: Stock prices are delayed by 20 minutes</i></b>
          </p>
        </div>

      </v-col>

      <v-col cols="12" md="6" sm="12">

        
      </v-col>
    </v-row>
  </v-parallax>

  

  <v-card
  elevation="2"
  outlined class="mt-3">

    <v-row>
      <v-col cols="12" md="8" sm="12" >

          <v-carousel :show-arrows="false" :continuous="true" :cycle="true" style="margin:20px;margin-bottom:10px;width:96%;">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>

          <v-card
            class="mr-2"
            style="margin:20px;margin-bottom:10px;margin-top:10px;padding:5px;padding-left:10px;font-size:20px;"
            outlined>

              <b>RELATED ARTICLES</b>

          </v-card>



          <v-card
            class="mr-1"
            style="margin:20px;margin-top:10px;padding:5px;padding-left:10px;"
            outlined>

              <v-row
                align="center"
                justify="center"
                
              >
                <v-col cols="12" md="4" sm="12" style="padding:0px;padding-left:5px;">

                  <center>
                    <v-img
                      alt="Vuetify Logo"
                      :src="require('../../assets/images/5.jpg')"
                      transition="scale-transition"
                      width="300"
                      style="color:white;margin-left:5px;" />
                  </center>

                </v-col>



                <v-col cols="12" md="8" sm="12" >

                    <div>
                      <p style="text-align:justify;font-size:13px;padding:10px;">
                        <b>INSIGHTS</b><br>
                        <a href="https://www.investopedia.com/investing/how-interest-rates-affect-stock-market/" target="_blank" style="text-decoration:none;font-size:16px;"><b>How Interest Rates Affect The Stock Market</b></a><br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
                      </p>
                    </div>
                    
                </v-col>
              </v-row>

              <v-row
                align="center"
                justify="center"
                
              >
                <v-col cols="12" md="4" sm="12" style="padding:0px;padding-left:5px;">

                  <center>
                    <v-img
                      alt="Vuetify Logo"
                      :src="require('../../assets/images/1.jpg')"
                      transition="scale-transition"
                      width="300"
                      style="color:white;margin-left:5px;" />
                  </center>

                </v-col>



                <v-col cols="12" md="8" sm="12" >

                    <div>
                      <p style="text-align:justify;font-size:13px;padding:10px;">
                        <b>INVESTING</b><br>
                        <a href="https://www.investopedia.com/terms/w/wealtheffect.asp" target="_blank" style="text-decoration:none;font-size:16px;"><b>Wealth Effect</b></a><br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
                      </p>
                    </div>
                    
                </v-col>
              </v-row>


              <v-row
                align="center"
                justify="center"
                
              >
                <v-col cols="12" md="4" sm="12" style="padding:0px;padding-left:5px;">
                  <center>
                    <v-img
                      alt="Vuetify Logo"
                      :src="require('../../assets/images/4.jpg')"
                      transition="scale-transition"
                      width="300"
                      style="color:white;margin-left:5px;" />
                  </center>
                </v-col>



                <v-col cols="12" md="8" sm="12" >

                    <div>
                      <p style="text-align:justify;font-size:13px;padding:10px;">
                        <b>FINANCIAL ADVISOR</b><br>
                        <a href="https://www.investopedia.com/articles/fa-profession/092416/5-traits-successful-financial-advisors-have.asp" target="_blank" style="text-decoration:none;font-size:16px;"><b>Advising FAs: How To Explain Stocks to a Client</b></a><br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
                      </p>
                    </div>
                    
                </v-col>
              </v-row>


              <v-row
                align="center"
                justify="center"
                
              >
                <v-col cols="12" md="4" sm="12" style="padding:0px;padding-left:5px;">

                  <center>
                    <v-img
                      alt="Vuetify Logo"
                      :src="require('../../assets/images/2.jpg')"
                      transition="scale-transition"
                      width="300"
                      style="color:white;margin-left:5px;" />
                  </center>

                </v-col>



                <v-col cols="12" md="8" sm="12" >

                    <div>
                      <p style="text-align:justify;font-size:13px;padding:10px;">
                        <b>INSIGHTS</b><br>
                        <a href="https://www.nerdwallet.com/article/investing/what-is-the-stock-market" target="_blank" style="text-decoration:none;font-size:16px;"><b>A Breakdown on How the Stock Market Works</b></a><br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
                      </p>
                    </div>
                    
                </v-col>
              </v-row>

          </v-card>



      </v-col>

      <v-col cols="12" md="4" sm="12" class="p-0 mt-4">

          <v-card
            class="mr-2"
            outlined>
                
                <div>
                    <b style="font-size:20px;margin:10px;">Market Data</b>

                    <v-btn
                      dark
                      x-small
                      style=""
                      @click="companyModal = true"
                      style="float:right;margin-top:5px;margin-right:5px;"
                      color="indigo">
                      <v-icon dark>
                        mdi-plus
                      </v-icon>
                    </v-btn>


                </div>

                <hr>
                  <v-card
                  class="mx-auto overflow-hidden">
                  
                  <div style="text-align:center;font-weight:bold;padding-bottom: 0px;font-size:20px;color:white;background-color: rgb(0,102,153);margin-top:5px;">
                      GovCon Index Daily Performance

                      <center>
                        <v-select
                          :items="selectData"
                          item-text="company"
                          item-value="company"
                          label="Filter Companies"
                          v-model="select"
                          solo
                          dense
                          return-object
                          style="width: 60%;height:50px;">
                          
                            <template v-slot:prepend-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Select All
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </template>

                        </v-select>

                      </center>

                  </div>

                    

                    <v-row no-gutters style="color:white;">

                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(0,67,94);padding:15px;font-size:12px;">
                              <center>
                                  Index <br>
                                  <b v-if="select.price < 0" style="font-size:20px;color:red;">
                                    {{ parseFloat(select.price).toFixed(2) }}
                                  </b>

                                  <b v-else style="font-size:20px;">
                                    {{ parseFloat(select.price).toFixed(2) }}
                                  </b>
                              </center>
                          </v-col>    


                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(36,73,102);padding:15px;font-size:12px;">
                              <center>
                                  Net Change <br>
                                  <b v-if="select.net < 0" style="font-size:20px;color:red;">
                                    {{ parseFloat(select.net).toFixed(2) }}
                                  </b>

                                  <b v-else style="font-size:20px;">
                                    +{{ parseFloat(select.net).toFixed(2) }}
                                  </b>
                              </center>
                          </v-col>


                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(0,67,94);padding:15px;font-size:12px;">
                              <center>
                                  % Change <br>
                                  <b v-if="select.change < 0" style="font-size:20px;color:red;">
                                    {{ parseFloat(select.change).toFixed(2) }}%
                                  </b>

                                  <b v-else style="font-size:20px;">
                                    +{{ parseFloat(select.change).toFixed(2) }}%
                                  </b>
                              </center>
                          </v-col>    

                  </v-row>



                </v-card>


                      <LineChartGenerator
                        :chart-options="chartOptions"
                        :chart-data="chartData"
                        :chart-id="chartId"
                        :dataset-id-key="datasetIdKey"
                        :plugins="plugins"
                        :css-classes="cssClasses"
                        :styles="styles"
                        :width="width"
                        :height="height"
                      />



                      <v-card
                        class="mx-auto mt-2 overflow-hidden"
                      >
                        
                      <v-simple-table dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left" style="color:black;font-size:17px;">
                                  <b>Company</b>
                                </th>
                                <th class="text-left" style="color:black;font-size:17px;">
                                  <b>Price</b>
                                </th>
                                <th class="text-left" style="color:black;font-size:17px;">
                                  <b>Net</b>
                                </th>
                                <th class="text-left" style="color:black;font-size:17px;">
                                  <b>Change</b>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in companies" @click="select = item" style="cursor:pointer;">

                                <td>{{ item.company }}</td>

                                <td>
                                    <b v-if="item.price < 0" style="color:red;font-size:15px;">
                                      {{ item.price }}
                                    </b>

                                    <b v-else style="font-size:15px;">
                                      +{{ item.price }}
                                    </b>
                                </td>

                                <td>
                                  <b v-if="item.net < 0" style="color:red;font-size:15px;">
                                    {{ item.net }}
                                  </b>

                                  <b v-else style="font-size:15px;">
                                    +{{ item.net }}
                                  </b>
                                </td>

                                <td>
                                  <b v-if="item.change < 0" style="color:red;font-size:15px;">
                                    {{ item.change }}%
                                  </b>

                                  <b v-else style="font-size:15px;">
                                    +{{ item.change }}%
                                  </b>
                                </td>


                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>

                      </v-card>

          </v-card>


          <v-card
            style="margin-top:10px;margin-right:10px;padding:5px;padding-left:10px;font-size:20px;"
            outlined>

              <b>Top News</b>

              <hr><br>
              <center>
                <a href="https://ph.news.yahoo.com/serbia-inks-200-million-deal-114316777.html" target="_blank" style="text-decoration:none;font-size:15px;">
                <v-img
                  alt="Vuetify Logo"
                  :src="require('../../assets/images/6.png')"
                  transition="scale-transition"
                  width="300"
                  style="color:white;margin-left:5px;" />

                  <b>Serbia inks $200 million deal with Stellantis to produce electric cars</b></a>
              </center>
             <br>
              <center>
               <a href="https://ph.news.yahoo.com/disinformation-board-tackle-russia-migrant-115737111.html" target="_blank" style="text-decoration:none;font-size:15px;">
                <v-img
                  alt="Vuetify Logo"
                  :src="require('../../assets/images/7.png')"
                  transition="scale-transition"
                  width="300"
                  style="color:white;margin-left:5px;" />

                 <b>Disinformation board to tackle Russia, migrant smugglers</b></a>
              </center>
              <br>

          </v-card>

        
      </v-col>
    </v-row>
  </v-card>


  






      
      <v-row justify="center">
        <v-dialog
          v-model="companyModal"
          max-width="400px"
        >
          <v-card>

            <form @submit.prevent="addData">
            <v-card-title>
              <span class="text-h5">Add Data</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                  <!-- <v-col cols="12">
                    <v-text-field
                      label="Symbol*"
                      v-model="data.symbol"
                      required
                    ></v-text-field>
                  </v-col> -->
                  <v-col cols="12">
                    <v-text-field
                      label="Company*"
                      v-model="data.company"
                      type="text"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Current Price*"
                      v-model="data.price"
                      type="number"
                      step="0.01" 
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Net change*"
                      v-model="data.net"
                      type="number"
                      step="0.01" 
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>


                  <v-col cols="12">
                    <v-text-field
                      label="Change*"
                      v-model="data.change"
                      type="number"
                      step="0.01" 
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>

                </v-row>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="companyModal = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
              >
                Save
              </v-btn>
            </v-card-actions>
            </form>
          </v-card>
        </v-dialog>
      </v-row>


      


      <v-row justify="center">
        <v-dialog
          v-model="loginModal"
          max-width="400px"
        >
          <v-card>

            <form @submit.prevent="addSignin">
            <v-card-title>
              <span class="text-h5">Add Data</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                  <!-- <v-col cols="12">
                    <v-text-field
                      label="Symbol*"
                      v-model="data.symbol"
                      required
                    ></v-text-field>
                  </v-col> -->
                  <v-col cols="12">
                    <v-text-field
                      label="Username*"
                      v-model="username"
                      type="text"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      v-model="password"
                      type="password"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                </v-row>
              <small>*indicates required field</small>

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="loginModal = false"
              >
                Close
              </v-btn>
              <v-btn
                color="primary"
                text
                type="submit"
              >
                Log-in
              </v-btn>
            </v-card-actions>
            </form>
          </v-card>
        </v-dialog>
      </v-row>






      <v-footer height="auto" dark class="py-5">
        <v-layout justify-center row wrap>
          <v-flex py-3 px-3 text-xs-center style="color:white;font-size:13px;">

            &copy;2015 — <strong>GovCon Exec</strong>

              <div class="float-right" style="color:white;font-size:13px;">

                <a href="#" class="fa fa-facebook" style="color:white;width:40px;"></a>
                <a href="#" class="fa fa-twitter" style="color:white;width:40px;"></a>
                <a href="#" class="fa fa-linkedin" style="color:white;width:40px;"></a>
                <a href="#" class="fa fa-pinterest" style="color:white;width:40px;"></a>

                <a style="color:white;" class="ml-5 text-white">Authors</a>
                <a style="color:white;" class="mx-3 text-white">Sitemap</a>
                <a style="color:white;" class="mr-3">Contact Us</a>
              </div>

          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>





<script>

import { Line as LineChartGenerator } from 'vue-chartjs/legacy';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'


ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  components: {
    LineChartGenerator
  },

  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },


  data() {
    return {  

      loginModal: false,

      items: [
        {
          src: require('../../assets/images/5.jpg'),
        },
        {
          src: require('../../assets/images/1.jpg'),
        },
        {
          src: require('../../assets/images/2.jpg'),
        },
        {
          src: require('../../assets/images/4.jpg'),
        },
      ],


      chartData: {

        labels: [
          'January',
          'Febuary',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],

        datasets: [
          {
            label: 'No Company Selected',
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 3,
            data: [43,34,23,32,34.34, 23.3, 34.34, 6, 55, 34, 11, 34],
          },

        ]

      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },

      menu: false,

      companies: [
        
          {

            label: 'XLY0',
            company: 'XLY0',
            price: -23.3,
            net:33.2,
            change: 41.21,
            backgroundColor: 'green',
            color: 'green',
            borderColor: 'green',
            borderWidth: 3,
            data: [43,34,23,32,34.34, 23.3, 34.34, 6, 55, 34, 11, 34],

          },

          {

            label: 'DJI',
            company: 'DJI',
            price: 23.3,
            net: -33.2,
            change: 41.21,
            backgroundColor: 'red',
            color: 'red',
            borderColor: 'red',
            borderWidth: 3,
            data: [34.34, 6, 55, 34, 11, 34, 43, 34, 23,32,34.34, 23.3],

          },


          {

            label: 'NKY',
            company: 'NKY',
            price: 23.3,
            net:33.2,
            change: 41.21,
            backgroundColor: 'orange',
            color: 'orange',
            borderColor: 'orange',
            borderWidth: 3,
            data: [43,34,23, 6, 55, 34, 11, 34,32,34.34, 23.3, 34.34],

          },


          {

            label: 'DAX',
            company: 'DAX',
            price: -23.3,
            net:33.2,
            change: 41.21,
            backgroundColor: 'blue',
            color: 'blue',
            borderColor: 'blue',
            borderWidth: 3,
            data: [43,34,23,32, 34.34, 6, 55, 34, 11,34.34, 23.3, 34],

          },


          {

            label: 'SPX',
            company: 'SPX',
            price: -23.3,
            net:33.2,
            change: -41.21,
            backgroundColor: 'brown',
            color: 'brown',
            borderColor: 'brown',
            borderWidth: 3,
            data: [43,34,23, 34, 11, 34,32,34.34, 23.3, 34.34, 6, 55],

          },



          {

            label: 'UK',
            company: 'UK',
            price: -23.3,
            net: -33.2,
            change: -41.21,
            backgroundColor: 'purple',
            color: 'purple',
            borderColor: 'purple',
            borderWidth: 3,
            data: [43,34,23, 55, 34, 11, 34,32,34.34, 23.3, 34.34, 6],

          },
      ],

    
      companyModal: false,
      data: {},

      selectData: [
                    {
                      company: 'All Companies',
                      color: 'black',
                      price: '0.00',
                      net: '0.00',
                      change: '0.00',
                    },

                    {

                        label: 'XLY0',
                        company: 'XLY0',
                        price: -23.3,
                        net:33.2,
                        change: 41.21,
                        backgroundColor: 'green',
                        color: 'green',
                        borderColor: 'green',
                        borderWidth: 3,
                        data: [43,34,23,32,34.34, 23.3, 34.34, 6, 55, 34, 11, 34],

                    },

                    {

                      label: 'DJI',
                      company: 'DJI',
                      price: 23.3,
                      net: -33.2,
                      change: 41.21,
                      backgroundColor: 'red',
                      color: 'red',
                      borderColor: 'red',
                      borderWidth: 3,
                      data: [34.34, 6, 55, 34, 11, 34, 43, 34, 23,32,34.34, 23.3],

                    },


                    {

                      label: 'NKY',
                      company: 'NKY',
                      price: 23.3,
                      net:33.2,
                      change: 41.21,
                      backgroundColor: 'orange',
                      color: 'orange',
                      borderColor: 'orange',
                      borderWidth: 3,
                      data: [43,34,23, 6, 55, 34, 11, 34,32,34.34, 23.3, 34.34],

                    },


                    {

                      label: 'DAX',
                      company: 'DAX',
                      price: -23.3,
                      net:33.2,
                      change: 41.21,
                      backgroundColor: 'blue',
                      color: 'blue',
                      borderColor: 'blue',
                      borderWidth: 3,
                      data: [43,34,23,32, 34.34, 6, 55, 34, 11,34.34, 23.3, 34],

                    },


                    {

                      label: 'SPX',
                      company: 'SPX',
                      price: -23.3,
                      net:33.2,
                      change: -41.21,
                      backgroundColor: 'brown',
                      color: 'brown',
                      borderColor: 'brown',
                      borderWidth: 3,
                      data: [43,34,23, 34, 11, 34,32,34.34, 23.3, 34.34, 6, 55],

                    },


                    {

                      label: 'UK',
                      company: 'UK',
                      price: -23.3,
                      net: -33.2,
                      change: -41.21,
                      backgroundColor: 'purple',
                      color: 'purple',
                      borderColor: 'purple',
                      borderWidth: 3,
                      data: [43,34,23, 55, 34, 11, 34,32,34.34, 23.3, 34.34, 6],

                    },


                  ],

      select: {company: 'All asd',
                color: 'black',
                price: '0.00',
                net: '0.00',
                change: '0.00'},

    };
  },




  watch:{

      'select.company'(){

          if (this.select.company == 'All Companies') {

              if (this.companies.length != 0) {

                  this.chartData = {

                      labels: [
                        'January',
                        'Febuary',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                      ],

                      datasets: this.companies,

                  };

                  this.getAvarage();

              }

          } else {

            this.chartData = {
                  labels: [
                    'January',
                    'Febuary',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ],

                  datasets: [
                    {
                      label: this.select.company,
                      backgroundColor: this.select.color,
                      borderColor: this.select.color,
                      borderWidth: 3,
                      data: this.select.data,
                    },
                  ],

                };   

          }

      }

  },

  methods: {
    menuItems() {
      return this.menu;
    },

    setColor(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      return "#"+randomColor;
    },

    addData(){

        let color = this.setColor();
        this.data.label = this.data.company;
        this.data.backgroundColor = color;
        this.data.color = color;
        this.data.borderColor = color;
        this.data.borderWidth = 3;

        let tempData = [];
        for (var i = 0; i < 12; i++) {
          tempData[i] = Math.floor(Math.random() * 101);
        }

        this.data.data = tempData;
        this.companies.push(this.data);
        this.selectData.push(this.data);
        this.companyModal = false;
        this.data = {};



        if (this.select.company == 'All Companies') {

            this.chartData = {

                labels: [
                    'January',
                    'Febuary',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ],

                datasets: this.companies,

            };

            this.getAvarage();

        }
        
    },


    getAvarage(){

        let arr = this.companies;
        let price = 0;
        let net = 0;
        let change = 0;

        for (let index = 0; index < arr.length; index++) {
          price = price + parseFloat(arr[index].price);
          net = net + parseFloat(arr[index].net);
          change = change + parseFloat(arr[index].change);
        }
        
        this.select.price = price/arr.length;
        this.select.net = net/arr.length;
        this.select.change = change/arr.length;

    },

    addSignin(){

        alert('Database Error!')

    }


  }
};
</script>




<style type="text/css">
  
  .background {
    background-image: url("../../assets/images/header.jpg");
  }


  .background1 {
    background-image: url("../../assets/images/background3.png");
    background-position: center;
    background-size: cover;
  }




  div.container
  {
      margin: 0 auto;
      text-align: center;
      background-color: rgb(30,30,30,0.7);
  }


  div.container a
  {
      color: #FFF;
      text-decoration: none;
      font: 20px;
      margin: 0px 10px;
      padding: 5px 5px;
      position: relative;
      z-index: 0;
      cursor: pointer;
  }


   /* Top and Bottom borders go out */
    div.topBotomBordersOut a:before, div.topBotomBordersOut a:after
    {
        position: absolute;
        left: 0px;
        width: 100%;
        height: 2px;
        background: white;
        content: "";
        opacity: 0;
        transition: all 0.3s;
    }

    div.topBotomBordersOut a:before
    {
        top: 0px;
        transform: translateY(10px);
    }

    div.topBotomBordersOut a:after
    {
        bottom: 0px;
        transform: translateY(-10px);
    }

    div.topBotomBordersOut a:hover:before, div.topBotomBordersOut a:hover:after
    {
        opacity: 1;
        transform: translateY(0px);
    }


    .fa {
      padding: 10px;
      width: 60px;
      font-size: 15px;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
    }


    .fa-facebook {
      background: #3B5998;
      color: white;
    }

    .fa-twitter {
      background: #55ACEE;
      color: white;
    }

    .fa-linkedin {
      background: #007bb5;
      color: white;
    }


    .fa-pinterest {
      background: #cb2027;
      color: white;
    }


</style>