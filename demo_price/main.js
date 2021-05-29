function execute(pjp, sessionService, i18NService) {
    var PriceValue = Java.type("de.hybris.platform.util.PriceValue");
    var PriceInformation = Java.type("de.hybris.platform.jalo.order.price.PriceInformation");
                               
    currentCurrency = i18NService.getCurrentCurrency();
    
    print(currentCurrency.getIsocode());
    
    if (currentCurrency.getIsocode().equals("EUR"))
    {
        print("Already EUR"); 
        return pjp.proceed();
    }
    else
    {
        currencyEUR = i18NService.getCurrency("EUR")
        i18NService.setCurrentCurrency(currencyEUR);
        prices = pjp.proceed();
        print("prices before" + prices);
        i18NService.setCurrentCurrency(currentCurrency);
        
        for(var i=0; i<prices.length; i++){
            priceValue = prices[i].getPrice(); 
            currency = priceValue.getCurrencyIso();
            if (currency.equals("EUR"))
            {
                priceEUR = Math.round(priceValue.getValue()*100)/100;
                print("Price in EUR: " + priceEUR);
                priceUSD = priceEUR * getRateEUR2USD();
                print("Price in USD: " + priceUSD);
                priceValueEUR = new PriceValue("EUR", priceEUR, true);
                prices[i] = new PriceInformation(prices[i].getQualifiers(), priceValueEUR);
            }
        }        
    }
    return prices;
};

function getRateEUR2USD()
{
    var RestTemplate = Java.type("org.springframework.web.client.RestTemplate");
    var String = Java.type("java.lang.String");

    restTemplate = new RestTemplate();
    response = restTemplate.getForEntity("https://free.currconv.com/api/v7/convert?apiKey=ff3585281f3b69cfe486&q=EUR_USD&compact=y", String.class);
    print(response.getBody());
    body = JSON.parse(response.getBody());
    rate = body.EUR_USD.val;
    return rate;
};

exports.execute = execute;