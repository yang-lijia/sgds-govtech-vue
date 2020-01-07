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
                <sgds-tabs destroy-on-hide v-model="selectedTab" type="is-boxed" position="is-left">
                   <sgds-tab-item label="Tab 1" icon="sgds-icon sgds-icon-place">
                        <p>
                            Tab 1 content
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
                            impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
                        </p>
                        <button class="sgds-button is-primary" @click="selectedTab = 1">Go to tab 2</button>
                   </sgds-tab-item>
                   <sgds-tab-item label="Tab 2">
                        <p>
                            You can slot
                            <strong>anything</strong> you'd like here
                        </p>
                   </sgds-tab-item>
                   <sgds-tab-item label="Tab 3">
                        <p>
                            Tab 3 content
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
                            impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
                        </p>
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
        <div class="row">
            <div class="col">
                <h5>Tabs Properties</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>v-model</td>
                            <td>Index of tab to display (zero-indexed)</td>
                            <td>Number</td>
                            <td>0 by default</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Type of the tab, optional</td>
                            <td>String</td>
                            <td>is-boxed, is-toggle</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>Position of the tab, optional</td>
                            <td>String</td>
                            <td>is-centered, is-right, is-left</td>
                        </tr>
                        <tr>
                            <td>destroy-on-hide</td>
                            <td>Destroy tabitem on hide</td>
                            <td>Boolean</td>
                            <td>false by default</td>
                        </tr>
                    </tbody>
                </table>
                <h5>Tab Item Properties</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>label</td>
                            <td>Label of Tab</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>Icon of Tab</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
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
            selectedTab: 0,
            codeSample: `<!-- selectedTab defaults to 0 if unspecified -->
<sgds-tabs destroy-on-hide v-model="selectedTab" type="is-boxed" position="is-left">
    <sgds-tab-item label="Tab 1" icon="sgds-icon sgds-icon-place">
        <p>
            Tab 1 content
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
            impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
        </p>
        <button class="sgds-button is-primary" @click="selectedTab = 1">Go to tab 2</button>
    </sgds-tab-item>
    <sgds-tab-item label="Tab 2">
        <p>
            You can slot
            <strong>anything</strong> you'd like here
        </p>
    </sgds-tab-item>
    <sgds-tab-item label="Tab 3">
        <p>
            Tab 3 content
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt enim illo
            impedit libero, temporibus veritatis. Deserunt, fugit quasi! Voluptates!
        </p>
    </sgds-tab-item>
</sgds-tabs>`
        };
    }
};
</script>
