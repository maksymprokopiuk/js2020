<template>
    <div v-if="getSchedulesList && getDoctorsList && getPatientsList">
        <b-button class="add-schedule" @click="onAddSchedule">Add schedule</b-button>
        <div class="schedules">
            <schedule-element
                v-for="item of getSchedulesList"
                :key="item._id"
                :id="item._id"
                :scheduleDate="item.date"
                :scheduleDoctor="item.doctorid"
                :schedulePatient="item.patientid"

                :getDoctorsList="getDoctorsList"
                :getPatientsList="getPatientsList"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import ScheduleElement from "@/components/ScheduleElement";
    
    export default {
        name: 'SchedulesPage',

        components: {
            ScheduleElement,
        },

        computed: {
            ...mapGetters('schedules', ['getSchedulesList']),
            ...mapGetters('doctors', ['getDoctorsList']),
            ...mapGetters('patients', ['getPatientsList']),
        },

        methods: {
            ...mapActions('schedules', ['loadDataSchedules']),
            ...mapActions('doctors', ['loadDataDoctors']),
            ...mapActions('patients', ['loadDataPatients']),

            onAddSchedule() {
                this.$router.push({name:'scheduleadd'})
            }
        },

        created () {
            this.loadDataSchedules();
            this.loadDataDoctors();
            this.loadDataPatients();
        },
    }
</script>

<style scoped>
.schedules {
    display: flex;
    flex-wrap: wrap;
}
.add-schedule {
    margin: 10px 0 0 10px;
}
</style>