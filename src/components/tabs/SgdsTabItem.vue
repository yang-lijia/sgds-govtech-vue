
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
            _isTabItem: true // Used internally by Tab
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
        if (!this.$parent.$data._isTabs) {
            this.$destroy()
            throw new Error('You should wrap SgdsTabItem on a SgdsTabs')
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
        const vnode = createElement('div', {
            class: 'col'
        }, this.$slots.default)

        const tabContent = createElement('div', {
             directives: [{
                name: 'show',
                value: this.isActive 
            }],
            class: 'row',
            role: 'tabpanel',
        }, [vnode])
        
        return tabContent
    }

};
</script>
