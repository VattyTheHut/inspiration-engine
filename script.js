var cb = new Codebird;
cb.setConsumerKey("TsgYCAP12wyp5BVAUYxc8A0e3", "RTcA3fOgyom0e2eKqffQEuDjVBDdqQ8EnHsljUatJmJoQDhW4i");
cb.setToken("714728052106924032-GnYmOx0IcrNXFuSywYya0PHbksiEEeH","8s7enrM6lNkbOoNM04q0wU5AlCXnm3m5cKFY30Vk4tdsx");

console.log("the script.js file works as well!!!")


var test = ["love quotes for him", "love quotes", "quote sad"];
var holder = [];

var params = {
    q: 'quotes'
};

function dataCaller(){
    cb.__call(
        "search_tweets",
        params,
        (reply) => {
            console.log(reply);
            holder.push(reply);
        }
    );
}



for(let i = 0; i < test.length; i++){
    console.log(test[i])
    params.q = test[i];
    dataCaller();

}
