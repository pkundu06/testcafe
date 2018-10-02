import { Selector, t } from 'testcafe';

/*
* Author: pkundu
* Description: This is HP Page objects class, User can provider all page objects here.
* if there is need to create dynamic page object/action , user can create objects here
*/

export default class SRPpageObject {
    constructor() {
        this.srpCardImage = Selector("[id='1'] img");
        this.priceFilterDesktopButton = Selector('#desktop-facet-price');
        this.minPriceDesktop = Selector('#price-input-1-list li:nth-child(2)');
        this.maxpriceTextField = Selector('#price-input-2-desktop');
        this.maxPriceDesktop = Selector('#price-input-2-list li:nth-child(3)');
        this.bedFilterDesktopButton = Selector('#desktop-facet-bedroom');
        this.bedTwoPlusDesktopFilterButton = Selector("[for='bed-2-desktop']");
        this.bathDesktopFilterButton = Selector('#desktop-facet-bathroom');
        this.bathOnePlusDesktopFilterButton = Selector("[for='bath-1-desktop']");
        this.propertyTypeDesktopButton = '#desktop-facet-property-type';
        this.houseDesktopFilterButton = Selector('#proptype-house-desktop');
        this.condoDesktopFilterButton = Selector('#proptype-town-house-desktop');
        this.srpFilterPillsSection = Selector('#srp-facet-pills-section');
        this.srpPagination2 = Selector("a[data-omtag='srp:paging:2']");
        this.srpDesktopMapButton = Selector(".affix-top [data-omtag='srp:map-view']");
        this.srpMapPin = Selector(".map-property-pin:nth-child(1)");
        this.srpMapCard = Selector(".mini-card-inner-container img");
        this.srpMapZoomInButton = Selector("[title='Zoom in']");
        this.srpMapZoomOutButton = Selector("[title='Zoom out']");
        this.srpNextPageMobileButton = Selector("[data-omtag='srp:paging:next']")
        this.srpCTALink = Selector("[id='1'] .before-contact");
    }

    async applyfilters() {
        await t.click(this.priceFilterDesktopButton);
        await t.click(this.minPriceDesktop);
        await t.click(this.maxpriceTextField);
        await t.click(this.maxPriceDesktop);
        await t.click(this.bedFilterDesktopButton);
        await t.click(this.bedTwoPlusDesktopFilterButton);
        await t.click(this.bathDesktopFilterButton);
        await t.click(this.bathOnePlusDesktopFilterButton);
        await t.click(this.propertyTypeDesktopButton);
        await t.click(this.condoDesktopFilterButton);
        await t.expect(this.srpFilterPillsSection).exists;
        await t.expect(this.srpFilterPillsSection.visible).ok();
    }
}
