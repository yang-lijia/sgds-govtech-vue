# sgds-govtech-vue
Vue components powered by sgds. Inspired by bootstrap-vue

## Installation
```
npm install sgds-govtech-vue sgds-govtech --save
```
## Usage
```
//In your main.js file

import 'sgds-govtech/sass/sgds.scss' //styling
import 'sgds-govtech-vue';

```
## Components 
Coming soon: Nav, Tabs, Dropdown, Language Selector
### Accordion
Example
```
<sgds-accordion>
  <sgds-accordion-set title="Header 1">
    Content 1
  </sgds-accordion-set>
  <sgds-accordion-set title="Header 2" :visible="true">
    Set visible to true to show the page content
  </sgds-accordion-set>
  <sgds-accordion-set title="Header 3">
    Content 3
  </sgds-accordion-set>
</sgds-accordion>
```

### Dropdown
Example
```
<sgds-dropdown>
  <sgds-dropdown-item href="#">Item 1</sgds-dropdown-item>
  <sgds-dropdown-item href="#">Item 2</sgds-dropdown-item>
  <sgds-dropdown-item href="#">Item 3</sgds-dropdown-item>
  <sgds-dropdown-divider></sgds-dropdown-divider>
  <sgds-dropdown-item href="#">Item 4</sgds-dropdown-item>
</sgds-dropdown>
```
#### <sgds-dropdown>
##### Properties
| Property  | Type | Default Value |
| ------------- | ------------- | ------------- |
|  text | String  | Select a value |
| hoverable  | Boolean  | false |
#####Events
| Event  | Arguments | Description |
| ------------- | ------------- | ------------- |
| toggle  |   | Emitted when dropdown is clicked |

#### <sgds-dropdown-item>
##### Properties
| Property  | Type | Default Value |
| ------------- | ------------- | ------------- |
|  href | String  |  |
| rel  | String  |  |
| target  | String  | _self |
| active  | Boolean  | false |
#####Events
| Event  | Arguments | Description |
| ------------- | ------------- | ------------- |
| click  |   | Emitted when item is clicked |