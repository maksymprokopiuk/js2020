<template>
    <div>
        <router-link :to="'/schedules/' + id">

            <div v-if="scheduleDate && getScheduleDoctor && getSchedulePatient" class="schedule-element">

              <router-link to="/schedules">
                <div class="delete-schedule" @click="onDelete">X</div>
              </router-link>
              
              <div class="schedule-date">
                <span class="schedule-date-text">Scheduled date of the visit: </span>
                <span><strong>{{ formatDate(scheduleDate) }}</strong></span>
              </div>
              
              <div class="schedule-doctor">
                <span class="schedule-doctor-text">Doctor: </span>
                <span><strong>{{ getScheduleDoctor.name }}</strong></span>
              </div>

              <div class="schedule-patient">
                <span class="schedule-patient-text">Patient: </span>
                <span><strong>{{ getSchedulePatient.name }}</strong></span>
              </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'ScheduleElement',

        props: {
            id: {
                type: String,
                default: 'no id'
            },
            scheduleDate: {
                type: String,
                default: 'no schedule date'
            },
            scheduleDoctor: {
                type: String,
                default: 'no schedule doctor'
            },
            schedulePatient: {
                type: String,
                default: 'no schedule patient'
            },
            getDoctorsList: {
                type: Array,
                default: ()=>[]
            },
            getPatientsList: {
                type: Array,
                default: ()=>[]
            },
        },

        computed: {
            getScheduleDoctor() {
                return this.getDoctorsList.find((doc) => doc._id===this.scheduleDoctor)
            },
            getSchedulePatient() {
                return this.getPatientsList.find((patient) => patient._id===this.schedulePatient)
            },
        },

        methods: {
            ...mapActions('schedules', ['deleteSchedule']),

            formatDate(date) {
                var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;

                return [year, month, day].join('-');
            },
            
            onDelete() {
                this.deleteSchedule({
                    id: this.id
                })
            },
        },
    }
</script>

<style scoped>
.schedule-element {
  border: 1px solid rgba(0, 128, 0, 0.1);
  margin: 10px;
  padding: 10px;
  display: inline-block;
  width: 420px;
  position: relative;
}
.schedule-date {
    display: flex;
}
.schedule-date-text, .schedule-doctor-text, .schedule-patient-text {
    color: grey;
    font-size: 12px;
    display: inline-block;
    width: 160px;
}
.delete-schedule {
  display: none;
  position: absolute;
  top: 5px;
  right: 5px;
  /* border: 1px solid #000; */
  background-color: red;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
}
.schedule-element:hover {
  border: 1px solid green;
}
.schedule-element:hover .delete-schedule {
  display: block;
}
</style>