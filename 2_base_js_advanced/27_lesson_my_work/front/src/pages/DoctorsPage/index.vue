<template>
    <div>
        <a href="/doctors/add">Add doctor </a>
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
            ...mapGetters(['getDoctorsList'])
        },

        methods: {
            ...mapActions(['loadData'])
        },

        created () {
            this.loadData();
        },
    }
</script>

<style scoped>
.doctors {
    display: flex;
    flex-wrap: wrap;
}
</style>