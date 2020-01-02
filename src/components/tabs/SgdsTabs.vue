<template>
    <div>
        <div class="sgds-tabs" :class="mainClasses">
            <ul class="no-margin" role="tablist">
                <li
                    v-for="(tabItem, index) in tabItems"
                    :key="index"
                    :class="{ 'is-active': activeTab === index }">
                    <a @click="tabClick(index)">
                        <i class="sgds-icon padding--right--sm" :class="tabItem.icon"></i>{{ tabItem.label }}
                    </a>
                </li>
            </ul>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SgdsTabs',
    props: {
        value: Number,
        type: String,
        position: String,
        destroyOnHide: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            activeTab: this.value || 0,
            defaultSlots: [],
            isTransitioning: false,
            _isTabs: true
        }
    },
    computed: {
        mainClasses() {
            return [
                this.type,
                this.position
            ]
        },
        tabItems() {
            return this.defaultSlots
                .filter((vnode) =>
                    vnode.componentInstance &&
                    vnode.componentInstance.$data &&
                    vnode.componentInstance.$data._isTabItem)
                .map((vnode) => vnode.componentInstance)
        }
    },
    watch: {
        /**
        * When v-model is changed set the new active tab.
        */
        value(value) {
            this.changeTab(value)
        },
        /**
        * When tab-items are updated, set active one.
        */
        tabItems() {
            if (this.activeTab < this.tabItems.length) {
                this.tabItems[this.activeTab].isActive = true
            }
        }
    },
    methods: {
        refreshSlots() {
            this.defaultSlots = this.$slots.default
        },
        /**
        * Change the active tab and emit change event.
        */
        changeTab(newIndex) {
            if (this.activeTab === newIndex || this.tabItems[newIndex] === undefined) return
            if (this.activeTab < this.tabItems.length) {
                this.tabItems[this.activeTab].deactivate(this.activeTab, newIndex)
            }
            this.tabItems[newIndex].activate(this.activeTab, newIndex)
            this.activeTab = newIndex
            this.$emit('change', newIndex)
        },
        /**
        * Tab click listener, emit input event and change active tab.
        */
        tabClick(value) {
            if (this.activeTab === value) return
            this.$emit('input', value)
            this.changeTab(value)
        }
    },
    mounted() {
        if (this.activeTab < this.tabItems.length) {
            this.tabItems[this.activeTab].isActive = true
        }
        this.refreshSlots()
    }
}
</script>