// Define a custom filter called "currency". 
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        // Define the model properties. The view will loop
        // through the services array and genreate a li
        // element for every one of its items.
        services: [
            {
                name: 'Trash Can',
                price: 299,
                active:false
            },{
                name: 'Bank Account',
                price: 1299,
                active:false
            },{
                name: 'Sunglasses',
                price: 599,
                active:false
            },{
                name: 'Spoon',
                price: 399,
                active:false
            },{
                name: 'Headphones',
                price: 1.99,
                active:false
            },{
                name: 'Plastic Wrap',
                price: 2999,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

           return total;
        }
    }
});