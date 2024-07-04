<template>
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="email"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Data Table Example</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark @click="openDialog">Add New Item</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="saveItem">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        dialogTitle: '',
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false }
        ],
        users: [
          { name: 'John Doe', email: 'john.doe@example.com' },
          { name: 'Jane Smith', email: 'jane.smith@example.com' },
          { name: 'Jim Brown', email: 'jim.brown@example.com' }
        ],
        editedItem: {
          name: '',
          email: ''
        },
        editedIndex: -1
      };
    },
    methods: {
      openDialog() {
        this.dialogTitle = 'Add New Item';
        this.editedItem = { name: '', email: '' };
        this.dialog = true;
      },
      editItem(item) {
        this.editedIndex = this.users.indexOf(item);
        this.editedItem = { ...item };
        this.dialogTitle = 'Edit Item';
        this.dialog = true;
      },
      deleteItem(item) {
        const index = this.users.indexOf(item);
        if (confirm('Are you sure you want to delete this item?')) {
          this.users.splice(index, 1);
        }
      },
      closeDialog() {
        this.dialog = false;
        this.editedItem = { name: '', email: '' };
        this.editedIndex = -1;
      },
      saveItem() {
        if (this.editedIndex > -1) {
          // Edit existing item
          Object.assign(this.users[this.editedIndex], this.editedItem);
        } else {
          // Add new item
          this.users.push({ ...this.editedItem });
        }
        this.closeDialog();
      }
    }
  };
  </script>
  
  <style scoped>
  .elevation-1 {
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
  }
  </style>
  