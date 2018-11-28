<template>
  <v-container fluid fill-height pa-0>
    <v-layout row wrap align-content-start>
      <v-flex xs12>
        <v-card>
          <v-layout justify-space-between>
            <v-flex xs4>
              <v-select :items="districts" label="District" item-text="Name" item-value="ID" v-model="selectedDistrict" v-on:change="getEstate()"></v-select>
            </v-flex>
            <v-flex xs4>
              <v-select :items="estates" label="Estate" item-text="Name" item-value="ID" v-model="selectedEstate" v-on:change="getProperty()"></v-select>
            </v-flex>
          </v-layout>
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
                <td>{{ props.item.OwnerName }}</td>
                <td>{{ props.item.OwnerPhoneNumber }}</td>
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
  name: "property-searching",
  data() {
    return {
      districts: [],
      selectedDistrict: null,
      estates: [],
      selectedEstate: null,
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
        { text: "Rental Price", sortable: false, value: "RentalPrice" },
        { text: "Owner Name", sortable: false, value: "OwnerName" },
        { text: "Owner Tel", sortable: false, value: "OwnerPhoneNumber" }
      ]
    };
  },
  methods: {
    getDistrict: function () {
      let self = this;
      axios({
        url: "/data/get-district",
        method: "get",
        responseType: "json"
      }).then(function (response) {
        self.districts = response.data;
      });
    },
    getEstate: function () {
      let self = this;
      axios({
        url: `/data/get-estate/${this.selectedDistrict}`,
        method: "get",
        responseType: "json"
      }).then(function (response) {
        self.estates = response.data;
      });
    },
    getProperty: function () {
      let self = this;
      axios({
        url: `/data/get-property-by-estate/${this.selectedEstate}`,
        method: "get",
        responseType: "json"
      }).then(function (response) {
        self.propertys = response.data;
      });
    }
  },
  mounted: function () {
    this.getDistrict();
  }
};
</script>
