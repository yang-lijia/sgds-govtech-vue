import SgdsAccordion from './components/accordion/SgdsAccordion.vue';
import SgdsAccordionSet from "./components/accordion/SgdsAccordionSet.vue";
import SgdsDropdown from './components/dropdown/SgdsDropdown.vue';
import SgdsDropdownItem from './components/dropdown/SgdsDropdownItem.vue';
import SgdsDropdownDivider from './components/dropdown/SgdsDropdownDivider.vue';
import SgdsTabs from './components/tabs/SgdsTabs.vue';
import SgdsTabItem from './components/tabs/SgdsTabItem.vue';

const Components = {
    SgdsAccordion,
    SgdsAccordionSet,
    SgdsDropdown,
    SgdsDropdownItem,
    SgdsDropdownDivider,
    SgdsTabs,
    SgdsTabItem
};

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
    install.installed = true;
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export components
export {
    SgdsAccordion,
    SgdsAccordionSet,
    SgdsDropdown,
    SgdsDropdownItem,
    SgdsDropdownDivider,
    SgdsTabs,
    SgdsTabItem
};

export default Components;