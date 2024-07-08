<template>
    <v-app>
      <!-- Main content -->
      <v-main>
        <v-container>
       
  
          <v-row>
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="contacts"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Email List</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.action`]="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="viewMessage(item.message)"
                    color="primary"
                  >mdi-eye</v-icon>
                  <v-icon
                    small
                    @click="deleteEmailField(item)"
                    color="red"
                  >mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
  
    data() {
      return {
        drawer: false,
        headers: [
          { text: 'Recipients', value: 'name' },
          { text: 'Message', value: 'message' },
          { text: 'Date Sent', value: 'date' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        contacts: [
          { id: 1, name: 'Simon Ryles', email: 'simon@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2024-06-01' },
          { id: 2, name: 'Marion Walker', email: 'marion@example.com', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '2024-06-02' },
          { id: 3, name: 'John Doe', email: 'john@example.com', message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', date: '2024-06-03' },
          { id: 4, name: 'Jane Smith', email: 'jane@example.com', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', date: '2024-06-04' },
          // Add more contacts as needed
        ],
      };
    },
  
    methods: {
      viewMessage(message) {
        alert('Message: ' + message);
      },
      deleteEmailField(contact) {
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    margin-top: 20px;
    background-color: #eee;
  }
  .project-list-table {
    border-collapse: separate;
    border-spacing: 0 8px; /* Decrease the space between rows */
    width: 100%; /* Ensure the table takes up the full width of the container */
  }
  .project-list-table tr {
    background-color: #fff;
  }
  .table-nowrap td, .table-nowrap th {
    white-space: nowrap;
  }
  .table-borderless>:not(caption)>*>* {
    border-bottom-width: 0;
  }
  .table>:not(caption)>*>* {
    padding: 0.5rem 1rem; /* Decrease padding for smaller rows */
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  .me-2 {
    margin-right: 0.5rem!important;
  }
  a {
    color: #3b76e1;
    text-decoration: none;
  }
  .badge-soft-danger {
    color: #f56e6e !important;
    background-color: rgba(245, 110, 110, 0.1);
  }
  .badge-soft-success {
    color: #63ad6f !important;
    background-color: rgba(99, 173, 111, 0.1);
  }
  .badge-soft-primary {
    color: #3b76e1 !important;
    background-color: rgba(59, 118, 225, 0.1);
  }
  .badge-soft-info {
    color: #57c9eb !important;
    background-color: rgba(87, 201, 235, 0.1);
  }
  .avatar-title {
    align-items: center;
    background-color: #3b76e1;
    color: #fff;
    display: flex;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
  .bg-soft-primary {
    background-color: rgba(59, 118, 225, 0.25)!important;
  }
  .pagination {
    justify-content: flex-start; /* Align pagination links to the left */
  } 
  .item-hover:hover{
    background-color: #e0e0e0;
  }
  </style>
  