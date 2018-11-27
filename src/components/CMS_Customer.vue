<template>
  <v-container fluid fill-height pa-0>
    <v-layout row wrap align-content-start>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            Customer
            <v-spacer></v-spacer>
          </v-card-title>
          <v-flex xs12>
            <v-data-table :headers="customerTableHeader" :items="customers" class="">
              <template slot="items" slot-scope="props">
                <tr @click="getRecommendProperty(props.item.ID)">
                  <td>{{ props.item.ID }}</td>
                  <td>{{ props.item.CustomerName }}</td>
                  <td>{{ props.item.PhoneNumber }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            Recommend Property
            <v-spacer></v-spacer>
          </v-card-title>
          <v-flex xs12>
            <v-data-table :headers="propertyTableHeader" :items="propertys" class="">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.DistrictName }}</td>
                <td>{{ props.item.EstateName }}</td>
                <td>{{ props.item.Block }}</td>
                <td>{{ props.item.Floor }}</td>
                <td>{{ props.item.Flat }}</td>
                <td>{{ props.item.GrossFloorArea }}</td>
                <td>{{ props.item.NumberOfBedrooms }}</td>
                <td>
                  <v-checkbox v-model="props.item.CarParkProvided" readonly></v-checkbox>
                </td>
                <td>{{ props.item.SellingPrice }}</td>
                <td>{{ props.item.RentalPrice }}</td>
              </template>
            </v-data-table>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
import axios from "axios";

export default {
  name: "customer",
  data() {
    return {
      customers: [],
      customerTableHeader: [
        { text: "ID", sortable: false, value: "ID" },
        { text: "Name", sortable: false, value: "CustomerName" },
        { text: "PhoneNumber", sortable: false, value: "PhoneNumber" }
      ],
      propertys: [],
      propertyTableHeader: [
        { text: "District", sortable: false, value: "DistrictName" },
        { text: "Estate", sortable: false, value: "EstateName" },
        { text: "Block", sortable: false, value: "Block" },
        { text: "Floor", sortable: false, value: "Floor" },
        { text: "Flat", sortable: false, value: "Flat" },
        { text: "Gross Floor Area", sortable: false, value: "GrossFloorArea" },
        { text: "No of Bedroom", sortable: false, value: "NumberOfBedrooms" },
        { text: "Provide Car Park", sortable: false, value: "CarParkProvided" },
        { text: "Selling Price", sortable: false, value: "SellingPrice" },
        { text: "Rental Price", sortable: false, value: "RentalPrice" }
      ]
    };
  },
  methods: {
    getCustomer: function() {
      let self = this;
      axios({
        url: "/data/get-customer",
        method: "get",
        responseType: "json"
      }).then(function(response) {
        self.customers = response.data;
      });
    },
    getRecommendProperty: function(customerID) {
      let self = this;
      axios({
        url: `/data/get-recommend-property/${customerID}`,
        method: "get",
        responseType: "json"
      }).then(function(response) {
        self.propertys = response.data
      });
    }
  },
  mounted: function() {
    this.getCustomer();
  }
};
</script>
