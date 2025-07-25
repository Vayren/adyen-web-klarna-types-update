export function filterAllowedPaymentMethods(pm) {
    return !this.length || this.indexOf(pm.type) > -1;
}

export function filterRemovedPaymentMethods(pm) {
    return !this.length || this.indexOf(pm.type) < 0;
}

export function filterEcomStoredPaymentMethods(pm) {
    return !!pm && !!pm.supportedShopperInteractions && pm.supportedShopperInteractions.includes('Ecommerce');
}

const supportedStoredPaymentMethods = [
    'scheme',
    'blik',
    'twint',
    'ach',
    'cashapp',
    'paybybank_AIS_DD',
    'payto',
    'paybybank_pix',
    'eft_directdebit_CA'
];

export function filterSupportedStoredPaymentMethods(pm) {
    return !!pm && !!pm.type && supportedStoredPaymentMethods.includes(pm.type);
}
