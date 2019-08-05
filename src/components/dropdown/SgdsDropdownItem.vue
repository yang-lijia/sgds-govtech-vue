<template>
    <component
        :is="this.href ? 'a' : 'div'"
        :href="href"
        class="sgds-dropdown-item"
        @click="handleClick"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String
        }
    },
    methods: {
        handleClick() {
            this.$emit("click");
            if (this.href) {
                this.$parent.$emit("dropdown-item-clicked"); // Close the dropdown
            }
        }
    }
};
</script>
