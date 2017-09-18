angular.module('app').service('mainServ', function($http){

    var cb = new Codebird;
    cb.setConsumerKey("TsgYCAP12wyp5BVAUYxc8A0e3", "RTcA3fOgyom0e2eKqffQEuDjVBDdqQ8EnHsljUatJmJoQDhW4i");
    cb.setToken("714728052106924032-GnYmOx0IcrNXFuSywYya0PHbksiEEeH","8s7enrM6lNkbOoNM04q0wU5AlCXnm3m5cKFY30Vk4tdsx");

    var test = [];
    var holder = [];

    var params = {
        q: 'quotes'
    };

    this.dataCaller = data =>{
        test.push(data);
        params.q = data;
        cb.__call(
            "search_tweets",
            params,
            (reply) => {
                holder.push({reply});
            }
        );
    }

    this.moveholder = () => {
        return holder;
    }


    this.sendContact = data => {
        return $http.post('/postContact', data);
    }
})