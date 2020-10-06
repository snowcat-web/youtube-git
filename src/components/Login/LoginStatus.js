var LoginStatus = function() {
    var status = localStorage.getItem("USER-APP") ? JSON.parse(localStorage.getItem("USER-APP")) : null
    return status;

};
exports.LoginStatus = LoginStatus;