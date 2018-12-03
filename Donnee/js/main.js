Vue.component('list-vehicules', {
    props: ['vehicule'],
    template: '<li>{{vehicule.titre}}</li>',
})

Vue.component('vehicule-detail'), {
    props: ['vehicule-detail'],
}

var app = new Vue({
    el: '#app',
    data: {
        vehicules: vehicules
    }
});
  