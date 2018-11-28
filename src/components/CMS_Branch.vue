<template>
  <v-container fluid fill-height pa-0>
    <v-layout row wrap align-content-start>
      <v-flex xs12>
        <v-card>
          <v-flex xs12>
            <v-data-table :headers="branchTableHeader" :items="branch" class="">
              <template slot="items" slot-scope="props">
                <router-link tag="tr" :to="{ name: 'CMS_Transaction', params: { ID: props.item.ID }}">
                  <td>{{ props.item.ID }}</td>
                  <td>{{ props.item.Name }}</td>
                  <td>{{ props.item.District }}</td>
                  <td>{{ props.item.Address }}</td>
                  <td>{{ props.item.ManagerName }}</td>
                  <td class="justify-center layout px-0">
                    <router-link tag="v-icon" small class="mr-2" :to="{ name: 'CMS_Transaction', params: { ID: props.item.ID }}">
                      assignment
                    </router-link>
                  </td>
                </router-link>
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
      branch: [],
      branchTableHeader: [
        { text: "ID", sortable: false, value: "ID" },
        { text: "Name", sortable: false, value: "Name" },
        { text: "District", sortable: false, value: "District" },
        { text: "Address", sortable: false, value: "Address" },
        { text: "ManagerName", sortable: false, value: "ManagerName" },
        { text: 'Actions', value: 'name', sortable: false }
      ]
    }
  },
  methods: {
    getBranch: function () {
      let self = this;
      axios({
        url: `/data/get-branch`,
        method: "get",
        responseType: "json"
      }).then(function (response) {
        self.branch = response.data;
      });
    }
  },
  mounted: function () {
    this.getBranch()
  }
}
</script>
