<template>
    <div v-if="getSchedule && getSchedulePatient">
        <router-link :to="'/schedules/edit/' + getSchedule._id"><div class="edit-schedules button">Edit</div></router-link>
        <div class="patient-id">
            <span class="span-text">id: </span>
            <span><strong>{{ getSchedule._id }}</strong></span>
        </div>
        <div class="schedule-date">
            <span class="span-text">Date: </span>
            <span><strong>{{ formatDate(getSchedule.date) }}</strong></span>
        </div>
        <div class="schedule-doctor">
            <span class="span-text">Doctor: </span>
            <span><strong>{{ getScheduleDoctor.name }}</strong></span>
        </div>
        <div class="schedule-patient">
            <span class="span-text">Patient: </span>
            <span><strong>{{ getSchedulePatient.name }}</strong></span>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'SchedulePage',

        data() {
            return {
                doctorid: null,
            }
        },

        methods: {
            ...mapActions('schedules', ['loadDataSchedules']),
            ...mapActions('doctors', ['loadDataDoctors']),
            ...mapActions('patients', ['loadDataPatients']),

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
        },

        computed: {
            ...mapGetters('schedules', ['getSchedulesList']),
            ...mapGetters('doctors', ['getDoctorsList']),
            ...mapGetters('patients', ['getPatientsList']),

            getScheduleId() {
                return this.$route.params.id
            },
            getSchedule() {
                return this.getSchedulesList.find(schedule => schedule._id === this.getScheduleId)
            },
            getScheduleDoctor() {
                return this.getDoctorsList.find((doc) => doc._id===this.getSchedule.doctorid)
            },
            getSchedulePatient() {
                return this.getPatientsList.find((patient) => patient._id===this.getSchedule.patientid)
            },
        },

        created () {
            this.loadDataSchedules();
            this.loadDataDoctors();
            this.loadDataPatients();
        },
    }
</script>

<style scoped>
.button {
    margin: 10px;
}
</style>