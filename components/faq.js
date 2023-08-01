customElements.define('faq-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="faq-menu">
                <div class="faq-menu-header"></div>
                <div class="faq-menu-body">
                    <div class="fml">
                        <ul>
                            <li><a href="how-do-real-estate-commissions-work.html#commissions">How Do Real Estate Commissions Work?</a></li>
                            <li><a href="why-do-i-need-a-realtor.html#why-realtor">Why Do I Need a Realtor?</a></li>            
                            <li><a href="what-is-a-cma.html#cma">What is a CMA?</a></li>
                            <li><a href="how-should-i-price-my-home.html#price">How Should I Price my Home?</a></li>
                        </ul>
                    </div>
                    <div class="fmm">
                        <ul>                            
                            <li><a href="what-is-curb-appeal.html#curb">What is Curb Appeal and Why Does it Matter?</a><li>      
                            <li><a href="how-do-i-prepare-for-an-open-house.html#open">How Do I Prepare for an Open House?</a></li>
                            <li><a href="how-do-i-sell-in-a-buyers-market.html#sell">How Do I Sell My Home in a Buyer's Market?</a></li>
                            <li><a href="what-is-a-short-sale.html#short">What is a Short Sale?</a></li> 
                        </ul>
                    </div>
                    <div class="fmr">         
                        <ul>
                            <li><a href="should-i-trust-online-home-value-estimates.html#online">Should I Trust Online Home Value Estimates?</a></li> 
                            <li><a href="cma-vs-appraisals.html#appraisals">CMA VS Appraisals</a></li> 
                            <li><a href="why-might-similar-homes-have-different-values.html#value">Why Might Similar Homes Have Different Values?</a><li> 
                        </ul>
                    </div>
                </div>               
            </div>
        `;
    }
});