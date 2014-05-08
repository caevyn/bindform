module.exports = function bindform(View) {
    View.directive('bind-form', function (value, el, view) {
        var attr = this.attr;
        el.value = value;
    
        el.addEventListener('blur', function () {
            var binding = this.attributes[attr].value.replace(/[\{\}]/g,"");
            view.set(binding, this.value);
        });
    });
}