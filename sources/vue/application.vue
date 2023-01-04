<script>
import input from './controls/input.vue';
import button from './controls/button.vue';
export default {
    'name': 'i-application',
    'data': function () {
        return {

        };
    },
    'components': {
        'i-input': input,
        'i-button': button
    }
};
</script>
<template>
    <header class="layout-header"/>
    <main class="layout-content">
        <i-button>
            Отправить
        </i-button>
        <i-input ref="input" title="qwe" style="margin-top: 20px;"/>
    </main>
    <footer class="layout-footer">

    </footer>
</template>