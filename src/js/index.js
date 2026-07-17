const previousPage = localStorage.getItem("previous_page");

if (previousPage !== null) {
    const banners = document.getElementsByClassName("banner");
    const previousBanner = document.getElementById(`banner-${previousPage}`);

    if (previousBanner !== null) {
        const previousBannerStyle = getComputedStyle(previousBanner);
        const finalTransitionDuration = previousBannerStyle.transitionDuration;
        const finalHeight = previousBannerStyle.height;

        previousBanner.style.transitionDuration = "0ms";
        previousBanner.style.height = "100cqh";

        for (let banner of banners) {
            if (banner !== previousBanner) {
                const bannerStyle = getComputedStyle(banner);
                const finalTransitionDuration = bannerStyle.transitionDuration;
                const finalHeight = bannerStyle.height;
                banner.style.transitionDuration = "0ms";
                banner.style.height = "0cqh";

                setTimeout(() => {
                    banner.style.transitionDuration = finalTransitionDuration;
                    banner.style.height = finalHeight;
                }, 500);
            }
        }

        setTimeout(() => {
            previousBanner.style.transitionDuration = finalTransitionDuration;
            previousBanner.style.height = finalHeight;
        }, 500);
    }
}

localStorage.removeItem("previous_page")
