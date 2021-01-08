<template>
    <div>
        <div>
            <b-field horizontal label="Name">
              <b-input type="text" v-model="name" required expanded></b-input>
            </b-field>
            <b-field horizontal label="Disease">
              <b-input type="text" v-model="disease" required expanded></b-input>
            </b-field>
        </div>
        <b-button
            type="is-success"
            :disabled="!isDataValid"
            @click="onAdd"
        >Add</b-button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: 'PatientCreatePage',

        data() {
            return {
                name: null,
                disease: null,
            }
        },

        computed: {
            isDataValid() {
                return this.name && this.disease;
            }
        },

        methods: {
            ...mapActions('patients', ['addPatient']),

            onAdd() {
                this.addPatient({
                    name: this.name,
                    disease: this.disease,
                });
                this.$router.push({ name: "patients" });
            },
        },
    }
</script>

<style scoped>

</style>