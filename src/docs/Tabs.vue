<template>
    <div>
        <div class="row">
            <div class="col">
                <h2>Tabs</h2>
                <p>
                    Tabs are navigation elements that let users navigate between related content that are grouped together.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-tabs type="is-boxed" position="is-left">
                   <sgds-tab-item label="Tab 1" icon="sgds-icon sgds-icon-place">
                        <div class="col">
                            <h5>Tab 1 Content</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
                                impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
                            </p>
                        </div>
                   </sgds-tab-item>
                   <sgds-tab-item label="Tab 2">
                        <p>
                            You can slot
                            <strong>anything</strong> you'd like here
                        </p>
                   </sgds-tab-item>
                   <sgds-tab-item label="Tab 3">
                        <div class="col">
                            <h5>Tab 3 Content</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
                                impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
                            </p>
                        </div>
                   </sgds-tab-item>
                </sgds-tabs>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-accordion title="Show code">
                    <pre v-highlightjs="codeSample" class="code-highlight"><code class="html"></code></pre>
                </sgds-accordion>
            </div>
        </div>
    </div>
</template>

<script>
import {
    SgdsTabs,
    SgdsTabItem,
    SgdsAccordion
} from "../rollupExport";

export default {
    components: {
        SgdsTabs: SgdsTabs,
        SgdsTabItem: SgdsTabItem,
        SgdsAccordion: SgdsAccordion
    },
    data() {
        return {
            codeSample: `<sgds-tabs>
    <sgds-tab-item>
        <p>
            You can slot
            <strong>anything</strong> you'd like here
        </p>
    </sgds-tab-item>
</sgds-tabs>`
        };
    }
};
</script>
