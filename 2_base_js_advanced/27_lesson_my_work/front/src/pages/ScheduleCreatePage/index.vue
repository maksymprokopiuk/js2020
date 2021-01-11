<template>
    <div>
        <div>
            <b-field horizontal label="Select a date">
            <b-datepicker class="date-picker" v-model="date"
                
                placeholder="Click to select..."
                :locale="locale"
                :first-day-of-week="1"
                :min-date="minDate"
                :max-date="maxDate">
            </b-datepicker>
        </b-field>
            <!-- <b-field horizontal label="Date">
              <b-input type="text" v-model="date" placeholder="YYYY/MM/DD" required expanded></b-input>
            </b-field> -->

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
            class="create-btn"
            type="is-success"
            :disabled="!isDataValid"
            @click="onAdd"
        >Add</b-button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'ScheduleCreatePage',

        data() {
            const today = new Date()
            return {
                date: null,
                doctorid: null,
                patientid: null,

                // datePicker: new Date(),
                minDate: new Date(today.getFullYear() - 0, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 0, today.getMonth() + 1, today.getDate()),
                locale: 'uk-UK',
            }
        },

        computed: {
            ...mapGetters('doctors', ['getDoctorsList']),
            ...mapGetters('patients', ['getPatientsList']),

            isDataValid() {
                return this.date && this.doctorid && this.patientid;
            },
        },

        methods: {
            ...mapActions('schedules', ['addSchedule']),
            ...mapActions('doctors', ['loadDataDoctors']),
            ...mapActions('patients', ['loadDataPatients']),

            onAdd() {
                this.addSchedule({
                    date: this.date,
                    doctorid: this.doctorid,
                    patientid: this.patientid,
                });
                this.$router.push({ name: "schedules" });
            },
        },

        created () {
            this.loadDataDoctors();
            this.loadDataPatients();
        },
    }
</script>

<style scoped>
.date-picker {
    width: 207px;
}
.create-btn {
    margin: 10px;
}
</style>