<template>
    <div>
        <b-button class="add-doctor" @click="onAddDoctor">Add doctor</b-button>
        <div class="doctors">
            <!-- <a href="">Add doctor</a> -->
            <doctor-element
                v-for="doctor in getDoctorsList"
                :key="doctor._id"
                :id="doctor._id"
                :name="doctor.name"
                :specialisation="doctor.specialisation"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import DoctorElement from "@/components/DoctorElement";

    export default {
        name: 'DoctorsPage',

        components: {
            DoctorElement,
        },

        computed: {
            ...mapGetters('doctors', ['getDoctorsList'])
        },

        methods: {
            ...mapActions('doctors', ['loadDataDoctors']),

            onAddDoctor() {
                this.$router.push({name:'doctoradd'})
            }
        },

        created () {
            this.loadDataDoctors();
        },
    }
</script>

<style scoped>
.doctors {
    display: flex;
    flex-wrap: wrap;
}
.add-doctor {
    margin: 10px 0 0 10px;
}
</style>