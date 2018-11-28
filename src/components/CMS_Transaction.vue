<template>
  <v-container fluid fill-height pa-0>
    <v-layout row wrap align-content-start>
      <v-flex xs12>
        <v-card>
          <v-flex xs12>
            <v-data-table :headers="transactionTableHeader" :items="transaction" class="">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.Ref }}</td>
                <td>{{ props.item.Type }}</td>
                <td>{{ props.item.Date }}</td>
                <td>{{ props.item.SoldPrice }}</td>
                <td>{{ props.item.RentalPrice }}</td>
                <td>{{ props.item.Commission }}</td>
                <td>{{ props.item.DistrictName }}</td>
                <td>{{ props.item.EstateName }}</td>
                <td>{{ props.item.Block }}</td>
                <td>{{ props.item.Floor }}</td>
                <td>{{ props.item.Flat }}</td>
                <td>{{ props.item.AgentName }}</td>
              </template>
            </v-data-table>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      transaction: [],
      transactionTableHeader: [
        { text: "Ref ", sortable: false, value: "Ref " },
        { text: "Type ", sortable: false, value: "Type " },
        { text: "Date ", sortable: false, value: "Date " },
        { text: "SoldPrice ", sortable: false, value: "SoldPrice " },
        { text: "RentalPrice ", sortable: false, value: "RentalPrice " },
        { text: "Commission ", sortable: false, value: "Commission " },
        { text: "DistrictName ", sortable: false, value: "DistrictName " },
        { text: "EstateName ", sortable: false, value: "EstateName " },
        { text: "Block ", sortable: false, value: "Block " },
        { text: "Floor ", sortable: false, value: "Floor " },
        { text: "Flat ", sortable: false, value: "Flat " },
        { text: "AgentName ", sortable: false, value: "AgentName " }
      ]
    };
  },
  methods: {
    getTransaction: function () {
      let self = this;
      axios({
        url: `/data/get-transaction-by-branch/${this.$route.params.ID}`,
        method: "get",
        responseType: "json"
      }).then(function (response) {
        self.transaction = response.data;
      });
    }
  },
  mounted: function () {
    this.getTransaction();
  }
};
</script>
