<template lang="pug">
    button.works__item.works__item--add(
                @click="addNewWorkGroup"
            )
        .btn-container
            .btn-container__add(
                @click="addNewWorkGroup"
            )
                .btn-container__add-button +
                .btn-container__add-title Добавить #[span.span-block] работу
</template>

<script>
export default {
    methods: {
        addNewWorkGroup() {
            this.$emit('addNewWorkGroup');
        }
    }
}
</script>
