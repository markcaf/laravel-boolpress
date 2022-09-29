window.Vue = require('vue');

// importiamo il componente App
import App from './views/App';

const app = new Vue({
    el: '#root',

    render: h => h(App) //mostriamo App all'avvio di Vue
});
