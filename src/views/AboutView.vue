<template>
  <v-container class="mt-5" max-width="1600"> <!-- Adjust max-width as needed -->
    <v-card class="pa-4 FormColor" max-width="1600"> <!-- Adjust max-width as needed -->
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-legend class="text-center header">Notification Details</v-legend>
            <v-divider class="my-4 hr-blurry"></v-divider>
          </v-col>

          <v-col cols="12" class="notification-group">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Notification Name"
                  placeholder="Enter Notification Name"
                  outlined
                  v-model="notificationName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Notification Description"
                  placeholder="Enter Notification Description"
                  outlined
                  v-model="notificationDesc"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Event Name"
                  placeholder="Enter Event Name"
                  outlined
                  v-model="eventName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  label="Is Active"
                  items="['True', 'False']"
                  outlined
                  v-model="isActive"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>

          <v-divider class="my-4 hr-blurry"></v-divider>

          <v-row>
            <v-col cols="12" sm="6">
              <conditions />
            </v-col>
            <v-col cols="12" sm="6">
              <addEmail />
            </v-col>
          </v-row>

          <v-divider class="my-4 hr-blurry"></v-divider>

          <v-col cols="12">
            <v-text-field
              label="Message Subject"
              outlined
              v-model="messageSubject"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Message Body"
              rows="8"
              outlined
              v-model="messageBody"
            ></v-textarea>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn color="success">Send</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import addEmail from './addEmail.vue';
import conditions from './conditions.vue';
import calendar from './Directory.vue';
export default {
  name: 'CreateMessage',
  components: {
    addEmail,
    conditions,
    calendar
  },
  data() {
    return {
      notificationName: '',
      notificationDesc: '',
      eventName: '',
      isActive: null,
      messageSubject: 'Evolv Psychotherapy Test Notification',
      messageBody: '',
    };
  },
};
</script>

<style scoped>
.FormColor {
  background-color: #ECF0F1;
  color: #212121;
  max-width: 1200px; /* Adjust max-width for the card */
  margin: 0 auto; /* Center the card */
  padding: 20px; /* Increase padding for a better look */
}

.fields {
  background-color: #f0f0f0;
  color: #212121;
}

.fields:hover {
  background-color: #e2dfb8;
}

.notification-group {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.header {
  font-weight: bold;
}

.hr-blurry {
  opacity: 0.5;
}
</style>
