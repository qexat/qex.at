const retractingBanners = document.getElementsByClassName("banner-retracting");
const homeText = Array.from("← HOME");

for (let banner of retractingBanners) {
    banner.style.height = "calc(100cqh / 3)";
    banner.innerHTML = "← HOME";
}

const pathParts = document.location.pathname.split("/").filter((s) => s);
const pageName = pathParts[pathParts.length - 1];

localStorage.setItem("previous_page", pageName);
