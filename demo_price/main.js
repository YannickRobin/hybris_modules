function execute(pjp) {
    currentCurrency = i18NService.getCurrentCurrency();
    print(currentCurrency);
    
    startTime = new Date().getTime();
    ret = pjp.proceed();
    endTime = new Date().getTime();
    print('Method demoPrice ' + pjp.getSignature().toShortString() + ' took ' + (endTime - startTime) + ' ms'); 
    return ret; 
};

exports.execute = execute;