const banners = Array.from(document.getElementsByClassName("banner"));
const clickableBanners = Array.from(document.getElementsByClassName("banner-clickable"));

function hideOtherBanners(mainBanner) {
    banners.forEach((banner) => {
        if (banner !== mainBanner) {
            banner.style.fontSize = "0%";
            banner.style.height = "0cqh";
        }
    })
}

for (let banner of clickableBanners) {
    banner.addEventListener("click", (event) => {
        switch (banner.dataset.actionType) {
            case "GO_TO":
                banner.style.height = "100cqh";
                banners.forEach((b) => {
                    if (b !== banner) {
                        b.style.fontSize = "0%";
                        b.style.height = "0cqh";
                    }
                })
                setTimeout(() => {
                    document.location.assign(`${banner.dataset.actionArg}/`)
                }, 500);
                break;
            case "GO_BACK":
                const mainBanner = document.getElementById("banner-back");
                mainBanner.style.height = "100cqh";

                setTimeout(() => {
                    history.back();
                }, 500);
                break;
            default:
                throw Error(`unknown action type ${banner.dataset.actionType}`)
        }
    })
}
