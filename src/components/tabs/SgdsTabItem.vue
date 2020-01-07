
<script>
export default {
    props: {
        label: {
            type: String
        },
        icon: {
            type: String
        }
    },
    data() {
        return {
            isActive: false,
            IsTabItem: true // Used internally by Tab
        }
    },
    methods: {
        activate() {
            this.isActive = true
        },
        deactivate(){
            this.isActive = false
        }
    },
    created() {
        if (!this.$parent.$data.IsTabs) {
            this.$destroy()
            throw new Error('You should wrap SgdsTabItem in a SgdsTabs component.')
        }
        this.$parent.refreshSlots()
    },
    beforeDestroy() {
        this.$parent.refreshSlots()
    },
    render(createElement) {
        // if destroy apply v-if
        if (this.$parent.destroyOnHide) {
            if (!this.isActive) {
                return
            }
        }
        const tabContent = createElement('div', {
            directives: [{
                name: 'show',
                value: this.isActive 
            }],
            role: 'tabpanel',
        }, this.$slots.default)
        
        return tabContent
    }

};
</script>
