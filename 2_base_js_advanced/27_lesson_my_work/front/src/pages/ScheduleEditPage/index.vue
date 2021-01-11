<template>
    <div v-if="getSchedule && getScheduleDoctor && getSchedulePatient">
        getScheduleId {{getScheduleId}}
        <br>
        date {{date}}
        <br>
        patientid {{patientid}}
        <br>
        doctorid {{doctorid}}
        <div>
            <span class="text">{{formatDate(getSchedule.date)}}</span>
            <b-field horizontal label="Select a date">
                <b-datepicker class="date-picker" v-model="date"

                    placeholder="Click to select..."
                    :locale="locale"
                    :first-day-of-week="1"
                    :min-date="minDate"
                    :max-date="maxDate">
                </b-datepicker>
            </b-field>

            <span class="text">{{getScheduleDoctor.name}}</span>

            <b-field horizontal label="Choose a doctor">
                <b-select v-model="doctorid" placeholder="Select a name">
                    <option
                        v-for="doctor in getDoctorsList"
                        :key="doctor._id"
                        :value="doctor._id"
                    >
                        {{ doctor.name }}
                    </option>
                </b-select>
            </b-field>

            <span class="text">{{getSchedulePatient.name}}</span>

            <b-field horizontal label="Choose a patient">
                <b-select v-model="patientid" placeholder="Select a name">
                    <option
                        v-for="patient in getPatientsList"
                        :key="patient._id"
                        :value="patient._id"
                    >
                        {{ patient.name }}
                    </option>
                </b-select>
            </b-field>
        </div>
        <b-button
            class="btn"
            type="is-success"
            @click="onUpd"
        >Update</b-button>
    </div>
    
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ScheduleEditPage',

        data() {
            const today = new Date()
            return {
                date: null,
                doctorid: null,
                patientid: null,
                minDate: new Date(today.getFullYear() - 0, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 0, today.getMonth() + 1, today.getDate()),
                locale: 'uk-UK',
            }
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

        methods: {
            ...mapActions('schedules', ['loadDataSchedules']),
            ...mapActions('doctors', ['loadDataDoctors']),
            ...mapActions('patients', ['loadDataPatients', 'updateSchedule']),

            onUpd() {
                this.updateSchedule({
                    scheduleid: this.getScheduleId,
                    date: this.date,
                    doctorid: this.doctorid,
                    patientid: this.patientid,
                });
                this.$router.push({ name: "schedules" });
            },

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

        created () {
            this.loadDataSchedules();
            this.loadDataDoctors();
            this.loadDataPatients();
        },
    }
</script>

<style scoped>
.text {
    margin: 0 0 0 243px;
}
.date-picker {
    width: 207px;
}
.btn {
    margin: 10px;
}
</style>