<template>
  <div>
    <b-card header-tag="card-header">
      <h3 slot="header" class="mb-0">Index</h3>
      <b-card-body>
        <b-row>
          <b-col md="6">
            <b-form-group
              label-cols-sm="3"
              description="for ID, BookName and Author."
              label="Filter"
            >
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter=''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- <b-col md="6">
        <b-form-group label-cols-sm="3" label="Book Name">
          <b-form-input v-model="text" placeholder="Application architecture design pattern"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label-cols-sm="3" label="Author">
          <b-form-input v-model="text" placeholder="Kenya Saito"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col offset-md="10" class="text-right">
        <b-button variant="primary">Search</b-button>
          </b-col>-->
        </b-row>
        <b-table bordered striped hover :items="items" :fields="fields" :filter="filter">
          <template slot="action" slot-scope="data">
            <b-button v-bind:href="'/books/'+data.item.id" size="sm">View</b-button>
          </template>
        </b-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Book Name", sortable: true },
        { key: "author", label: "Author", sortable: true },
        { key: "action", label: "Detail" }
      ],
      items: [
        { id: 1, name: "Book-A", author: "Foo" },
        { id: 2, name: "Book-B", author: "Bar" }
      ],
      filter: null
    };
  }
};
</script>
