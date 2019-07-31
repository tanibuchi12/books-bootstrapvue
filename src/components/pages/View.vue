<template>
  <div>
    <b-card header-tag="card-header">
      <h3 slot="header" class="mb-0">View</h3>
      <b-card-body>
        <div>{{ name }}</div>
        <div>{{ author }}</div>
        <div>{{ publisher }}</div>
        <div>{{ publicationDate }}</div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "view",
  data() {
    return {
      name: "Book-A",
      author: "Foo",
      publisher: "HOGE",
      publicationDate: "yyyy/MM/dd"
    };
  }
};
</script>