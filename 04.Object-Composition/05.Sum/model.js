function getModel() {

    let input1, input2, result;

    function init(selector1, selector2, selector3) {
        input1 = $(selector1);
        input2 = $(selector2);
        result = $(selector3);
    }

    function add() {
        result.val(Number(input1.val()) + Number(input2.val()));
    }

    function subtract() {
        result.val(Number(input1.val() - Number(input2.val())));
    }


    return {init, add, subtract};
}