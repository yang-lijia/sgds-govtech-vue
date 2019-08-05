<template>
    <div
        class="sgds-dropdown is-active"
        @keydown.esc="active = false"
        @mouseleave="hideIfHoverable"
    >
        <div class="sgds-dropdown-trigger">
            <button
                class="sgds-button"
                aria-haspopup="true"
                aria-controls="sgds-dropdown-menu"
                @click="toggle"
                ref="dropdownButton"
                @mouseover="displayIfHoverable"
            >
                <span>{{ text }}</span>
                <span class="icon">
                    <span :class="`sgds-icon sgds-icon-chevron-${this.active ? 'up' : 'down'}`"></span>
                </span>
            </button>
        </div>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
        >
            <div class="sgds-dropdown-menu" role="menu" ref="dropdownMenu" v-show="active">
                <div class="sgds-dropdown-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        hoverable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: false
        };
    },
    methods: {
        toggle() {
            if (!this.hoverable) {
                this.active = !this.active;
                if (this.active) {
                    document.addEventListener("click", event => {
                        if (this.$refs.dropdownButton.contains(event.target)) {
                            return;
                        }
                        if (!this.$refs.dropdownMenu.contains(event.target)) {
                            this.active = false;
                        }
                    });
                }
            }
        },
        displayIfHoverable() {
            if (this.hoverable) {
                this.active = true;
            }
        },
        hideIfHoverable() {
            if (this.hoverable) {
                this.active = false;
            }
        },
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function(el, done) {
            Velocity(el, { opacity: 1 }, { duration: 75, complete: done });
        },
        leave: function(el, done) {
            Velocity(el, { opacity: 0 }, { duration: 75, complete: done });
        }
    },
    created() {
        this.$on("dropdown-item-clicked", () => {
            this.active = false;
        });
    }
};
</script>
