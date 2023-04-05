window.addEventListener("load", () => {
    document.querySelector(".section:first-of-type").style.backgroundPositionY =
        "0";
    window.addEventListener("scroll", function () {
        var yOffset = window.pageYOffset;
        document
            .querySelectorAll(".section")
            .forEach(function (section, index) {
                var offset = yOffset - section.offsetTop;
                section.style.backgroundPositionY = -offset * 0.25 + "px";
            });
    });
});
