<template>
  <div>
    <v-app>
      <v-toolbar class="background" fixed style="height:80px;">
            
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              :src="require('../../assets/images/govcon_logo.png')"
              transition="scale-transition"
              width="300"
              style="float:left;color:white;" />

        <v-spacer></v-spacer>

        <v-toolbar-items class="d-none d-md-block" style="width:60%;padding-top: 10px;">
          
            <div class="container topBotomBordersOut">
              <a to="/link"> HOME</a>
              <a>ABOUT</a>
              <a>WASH 100</a>
              <a> ADVERTISE</a>

               <v-text-field
                prepend-inner-icon="mdi-magnify"
                label="Search"
                outlined
                dense
                dark
                style="width:30%;height:40px;float:right;margin-top:-9px;border:solid gray;"
              ></v-text-field>

            </div>

        </v-toolbar-items>



            <v-menu bottom left :close-on-content-click="false" v-model="menu" >


              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="d-md-none"
                  dark
                  v-bind="attrs"
                  @click="menu = false"
                  v-if="menu == true"
                >
                 <v-icon>mdi-menu</v-icon>
                </v-btn>

                <v-btn
                  v-else
                  class="d-md-none"
                  dark
                  v-bind="attrs"
                  @click="menu = true"
                >
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>


              <v-list style="width:250px;margin-top:35px;">

                  <v-list-item @click="menu = false"> 
                    <v-list-item-title style="cursor:pointer;">Home</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="menu = false">
                    <v-list-item-title style="cursor:pointer;">About</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="menu = false">
                    <v-list-item-title style="cursor:pointer;">Wash 100</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="menu = false">
                    <v-list-item-title style="cursor:pointer;">Advertise</v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-title style="cursor:pointer;">
                        
                        <v-text-field
                          prepend-inner-icon="mdi-magnify"
                          label="Search"
                          outlined
                          dense
                          style="height:40px;"
                        ></v-text-field>

                    </v-list-item-title>
                  </v-list-item>

              </v-list>



            </v-menu>
          


        <!-- <v-menu>  

            


            <template v-slot:activator="{ on: menu, attrs }">
                <v-btn
                  class="d-md-none"
                  dark
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                >
                 <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>



          <v-list style="width:200px;">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Wash 100</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Advertise</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                  
                  <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    outlined
                    dense
                    dark
                    style="width:30%;height:40px;float:right;margin-top:-9px;border:solid gray;"
                  ></v-text-field>

              </v-list-item-title>
            </v-list-item>


          </v-list>
          
        </v-menu> -->


      </v-toolbar>





      <div class="background1">

            <v-row no-gutters class="mt-5">
              <v-col cols="12" sm="12" md="6">

                <v-card
                  class="m-6"
                  outlined
                  tile
                  style="opacity:0.7;background-color:black;padding:60px;"
                >

                  <center style="color:white;">
                    <img :src="require('../../assets/images/logonewgif.gif')" style="width:70%;padding:7px;margin:0px;"><br>
                    NOVEMBER 12, 2021
                  </center>

                </v-card>

              </v-col>

              <v-col cols="12" sm="12" md="6">

                <v-card
                  class="pa-2"
                  outlined
                  tile
                  style="background-color: rgb(0,26,50,0.9);color:white;"
                >
                     
                  <p style="text-align:justify;padding:3px;">
                    <b>About GovCon Index</b><br>
                    The Government Contracting (GovCon) industry includes some of the worlds largest and most prestigious firms. The Executive Mosaic GovCon Index is a composite index of thirty firms within the sector. The index measures the performance of the GovCon industry through changes in the aggregate price of component stocks.<br>
                    <b><i>Note: Stock prices are delayed by 20 minutes</i></b>
                  </p>

                  <a href="#" class="fa fa-facebook" style="color:white;"></a>
                  <a href="#" class="fa fa-twitter" style="color:white;"></a>
                  <a href="#" class="fa fa-linkedin" style="color:white;"></a>
                  <a href="#" class="fa fa-pinterest" style="color:white;"></a>

                </v-card>
              </v-col>
            </v-row>  




            <v-row no-gutters class="mt-3">

              <v-col cols="12" sm="12" md="6" style="padding:5px;">

                <v-card
                  class="mx-auto overflow-hidden"
                >
                  
                  <div style="text-align:center;font-weight:bold; padding:10px;font-size:28px;color:white;background-color: rgb(14,60,74);">
                      Companies Performance

                      <v-btn
                        fab
                        dark
                        small
                        class="float-right"
                        @click="companyModal = true"
                        color="indigo">
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                      </v-btn>

                  </div>

                  <v-data-table
                    :headers="headers"
                    :items="companies"
                    item-key="name"
                    class="elevation-1"
                    style="color:black;"
                  >
                    <!-- <template #header.symbol="{ header }">
                      <b style="color:black;font-size:13px;">{{ header.text }}</b>
                    </template> -->

                    <template #header.company="{ header }">
                      <b style="color:black;font-size:13px;">{{ header.text }}</b>
                    </template>

                    <template #header.price="{ header }">
                      <b style="color:black;font-size:13px;">{{ header.text }}</b>
                    </template>


                    <template #header.net="{ header }">
                      <b style="color:black;font-size:13px;">{{ header.text }}</b>
                    </template>


                    <template #header.change="{ header }">
                      <b style="color:black;font-size:13px;">{{ header.text }}</b>
                    </template>




                    <template #item.company="{item}">
                          <b style="font-size:15px;text-transform: capitalize;"> {{ item.company }} </b>
                    </template>



                    <template #item.price="{item}">
                          <b v-if="item.price < 0" style="color:red;font-size:15px;">
                            {{ item.price }}
                          </b>

                          <b v-else style="font-size:15px;">
                            +{{ item.price }}
                          </b>
                    </template>


                    <template #item.net="{item}">
                          <b v-if="item.net < 0" style="color:red;font-size:15px;">
                            {{ item.net }}
                          </b>

                          <b v-else style="font-size:15px;">
                            +{{ item.net }}
                          </b>
                    </template>


                    <template #item.change="{item}">
                          <b v-if="item.change < 0" style="color:red;font-size:15px;">
                            {{ item.change }}%
                          </b>

                          <b v-else style="font-size:15px;">
                            +{{ item.change }}%
                          </b>
                    </template>


                  </v-data-table>

                </v-card> 

              </v-col>



              

              <v-col cols="12" sm="12" md="6" style="padding:5px;">

                <v-card
                  class="mx-auto overflow-hidden">
                  
                  <div style="text-align:center;font-weight:bold; padding:10px;padding-bottom: 0px;font-size:28px;color:white;background-color: rgb(0,102,153);">
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
                          style="width: 50%;">
                          
                            <template v-slot:prepend-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Select All
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-divider class="mt-2"></v-divider>
                            </template>

                        </v-select>

                      </center>

                  </div>

                    

                    <v-row no-gutters style="color:white;">

                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(0,67,94);padding:15px;">
                              <center>
                                  Index <br>
                                  <b v-if="select.price < 0" style="font-size:30px;color:red;">
                                    {{ parseFloat(select.price).toFixed(2) }}
                                  </b>

                                  <b v-else style="font-size:30px;">
                                    {{ parseFloat(select.price).toFixed(2) }}
                                  </b>
                              </center>
                          </v-col>    


                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(36,73,102);padding:15px;">
                              <center>
                                  Net Change <br>
                                  <b v-if="select.net < 0" style="font-size:30px;color:red;">
                                    {{ parseFloat(select.net).toFixed(2) }}
                                  </b>

                                  <b v-else style="font-size:30px;">
                                    +{{ parseFloat(select.net).toFixed(2) }}
                                  </b>
                              </center>
                          </v-col>


                          <v-col cols="12" sm="12" md="4" style="background-color:rgb(0,67,94);padding:15px;">
                              <center>
                                  % Change <br>
                                  <b v-if="select.change < 0" style="font-size:30px;color:red;">
                                    {{ parseFloat(select.change).toFixed(2) }}%
                                  </b>

                                  <b v-else style="font-size:30px;">
                                    +{{ parseFloat(select.change).toFixed(2) }}%
                                  </b>
                              </center>
                          </v-col>    

                  </v-row>



                </v-card>  










                <v-card class="mx-auto mb-6 overflow-hidden mt-5">
                  
                  <div style="text-align:center;font-weight:bold; padding:10px;font-size:28px;color:white;background-color: rgb(0,102,153);">
                      GovCon Index Performance Graph
                  </div>

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
                      
                      <template v-slot:label="item">
                        ${{ item.value }}
                      </template>

                </v-card> 

              </v-col>




            </v-row>


       

      </div>


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
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Current Price*"
                          v-model="data.price"
                          type="number"
                          step="0.01" 
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Net change*"
                          v-model="data.net"
                          type="number"
                          step="0.01" 
                          required
                        ></v-text-field>
                      </v-col>


                      <v-col cols="12">
                        <v-text-field
                          label="Change*"
                          v-model="data.change"
                          type="number"
                          step="0.01" 
                          required
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



      <v-footer height="auto" dark class="py-5">
        <v-layout justify-center row wrap>
          <v-flex py-3 px-3 text-xs-center style="color:white;font-size:13px;">

            &copy;2015 — <strong>GovCon Exec</strong>

              <div class="float-right" style="color:white;font-size:13px;">
                <a style="color:white;">Authors</a>
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
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },


  data() {
    return {

      chartData: {

        labels: [
          'Index',
          'Net Change',
          'Change',
        ],

        datasets: [
          {
            label: 'No Company Selected',
            backgroundColor: 'black',
            data: [0,0,0],
          },
        ]

      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },

      menu: false,

      companies: [],

      headers: [
        //{ text: 'Symbol', value: 'symbol' },
        { text: 'Company', value: 'company' },
        { text: '$ Current Price', value: 'price' },
        { text: '$ Net Change', value: 'net' },
        { text: '$ Change', value: 'change' },
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
                    }
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
                        'Index',
                        'Net Change',
                        'Change',
                      ],

                      datasets: this.companies,

                  };

                  this.getAvarage();

              }

          } else {

            this.chartData = {
                  labels: [
                    'Index',
                    'Net Change',
                    'Change',
                  ],

                  datasets: [
                    {
                      label: this.select.company,
                      backgroundColor: this.select.color,
                      data: [this.select.price , this.select.net , this.select.change],
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
        this.data.data = [this.data.price,this.data.net,this.data.change];
        this.companies.push(this.data);
        this.selectData.push(this.data);
        this.companyModal = false;
        this.data = {};

        if (this.select.company == 'All Companies') {

            this.chartData = {

                labels: [
                  'Index',
                  'Net Change',
                  'Change',
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
          console.log(parseFloat(arr[index].change));
        }
        
        
        console.log(arr.length);
        this.select.price = price/arr.length;
        this.select.net = net/arr.length;
        this.select.change = change/arr.length;

    }


  }
};
</script>




<style type="text/css">
  
  .background {
    background-image: url("../../assets/images/header.jpg");
  }


  .background1 {
    background-image: url("../../assets/images/background2.jpeg");
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
      font-size: 30px;
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