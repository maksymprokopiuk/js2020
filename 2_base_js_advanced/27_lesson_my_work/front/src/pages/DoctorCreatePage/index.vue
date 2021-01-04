<template>
    <div>
        <div>
            <b-field horizontal label="Name">
              <b-input type="text" v-model="name" required expanded></b-input>
            </b-field>
            <b-field horizontal label="Specialisation">
              <b-input type="text" v-model="specialisation" required expanded></b-input>
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
        name: 'DoctorCreatePage',

        data() {
            return {
                name: null,
                specialisation: null,
            }
        },

        computed: {
            isDataValid() {
                return this.name && this.specialisation;
            }
        },

        methods: {
            ...mapActions(['addDoctor']),

            onAdd() {
                this.addDoctor({
                    name: this.name,
                    specialisation: this.specialisation,
                });
    },
        },
    }
</script>

<style scoped>

</style>