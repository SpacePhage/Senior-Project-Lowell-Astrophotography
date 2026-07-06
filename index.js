$(document).ready(function () {

    $("#themeToggle").on("click", function () {

        $("body").toggleClass("light-mode");

        let icon = $(this).find("i");

        if ($("body").hasClass("light-mode")) {

            icon.removeClass("fa-moon").addClass("fa-sun");

        } else {

            icon.removeClass("fa-sun").addClass("fa-moon");

        }

    });

});