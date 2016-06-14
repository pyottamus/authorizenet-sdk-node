'use strict';

var utils = require('./utils.js');

var logger = require('./logger.js').logger;

class CustomerProfileIdType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileIdType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerProfileIdType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { return this.customerAddressId; }
}

module.exports.CustomerProfileIdType = CustomerProfileIdType;

class CreditCardMaskedType {
	constructor(obj) {
		logger.debug('Enter CreditCardMaskedType constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
			if(('cardType' in obj) && (obj.cardType != null)) { this.setCardType(obj.cardType); }
			if(('cardArt' in obj) && (obj.cardArt != null)) { this.setCardArt(new CardArt(obj.cardArt)); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardType(null);
			this.setCardArt(null);
		}
		logger.debug('Exit CreditCardMaskedType constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { return this.expirationDate; }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType() { return this.cardType; }
	setCardArt(p_cardArt) { this.cardArt = p_cardArt; }
	getCardArt() { return this.cardArt; }
}

module.exports.CreditCardMaskedType = CreditCardMaskedType;

class ARBGetSubscriptionListSorting {
	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionListSorting constructor');
		if(arguments.length == 1) {
			if(('orderBy' in obj) && (obj.orderBy != null)) { this.setOrderBy(obj.orderBy); }
			if(('orderDescending' in obj) && (obj.orderDescending != null)) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit ARBGetSubscriptionListSorting constructor');
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy() { return this.orderBy; }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending() { return this.orderDescending; }
}

module.exports.ARBGetSubscriptionListSorting = ARBGetSubscriptionListSorting;

class KeyValue {
	constructor(obj) {
		logger.debug('Enter KeyValue constructor');
		if(arguments.length == 1) {
			if(('Encoding' in obj) && (obj.Encoding != null)) { this.setEncoding(obj.Encoding); }
			if(('EncryptionAlgorithm' in obj) && (obj.EncryptionAlgorithm != null)) { this.setEncryptionAlgorithm(obj.EncryptionAlgorithm); }
			if(('Scheme' in obj) && (obj.Scheme != null)) { this.setScheme(new KeyManagementScheme(obj.Scheme)); }
		}
		else {
			this.setEncoding(null);
			this.setEncryptionAlgorithm(null);
			this.setScheme(null);
		}
		logger.debug('Exit KeyValue constructor');
	}

	setEncoding(p_Encoding) { this.Encoding = p_Encoding; }
	getEncoding() { return this.Encoding; }
	setEncryptionAlgorithm(p_EncryptionAlgorithm) { this.EncryptionAlgorithm = p_EncryptionAlgorithm; }
	getEncryptionAlgorithm() { return this.EncryptionAlgorithm; }
	setScheme(p_Scheme) { this.Scheme = p_Scheme; }
	getScheme() { return this.Scheme; }
}

module.exports.KeyValue = KeyValue;

class CreditCardTrackType {
	constructor(obj) {
		logger.debug('Enter CreditCardTrackType constructor');
		if(arguments.length == 1) {
			if(('track1' in obj) && (obj.track1 != null)) { this.setTrack1(obj.track1); }
			if(('track2' in obj) && (obj.track2 != null)) { this.setTrack2(obj.track2); }
		}
		else {
			this.setTrack1(null);
			this.setTrack2(null);
		}
		logger.debug('Exit CreditCardTrackType constructor');
	}

	setTrack1(p_track1) { this.track1 = p_track1; }
	getTrack1() { return this.track1; }
	setTrack2(p_track2) { this.track2 = p_track2; }
	getTrack2() { return this.track2; }
}

module.exports.CreditCardTrackType = CreditCardTrackType;

class ImpersonationAuthenticationType {
	constructor(obj) {
		logger.debug('Enter ImpersonationAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('partnerLoginId' in obj) && (obj.partnerLoginId != null)) { this.setPartnerLoginId(obj.partnerLoginId); }
			if(('partnerTransactionKey' in obj) && (obj.partnerTransactionKey != null)) { this.setPartnerTransactionKey(obj.partnerTransactionKey); }
		}
		else {
			this.setPartnerLoginId(null);
			this.setPartnerTransactionKey(null);
		}
		logger.debug('Exit ImpersonationAuthenticationType constructor');
	}

	setPartnerLoginId(p_partnerLoginId) { this.partnerLoginId = p_partnerLoginId; }
	getPartnerLoginId() { return this.partnerLoginId; }
	setPartnerTransactionKey(p_partnerTransactionKey) { this.partnerTransactionKey = p_partnerTransactionKey; }
	getPartnerTransactionKey() { return this.partnerTransactionKey; }
}

module.exports.ImpersonationAuthenticationType = ImpersonationAuthenticationType;

class PaymentScheduleType {
	constructor(obj) {
		logger.debug('Enter PaymentScheduleType constructor');
		if(arguments.length == 1) {
			if(('interval' in obj) && (obj.interval != null)) { this.setInterval(new PaymentScheduleType.Interval(obj.interval)); }
			if(('startDate' in obj) && (obj.startDate != null)) { this.setStartDate(obj.startDate); }
			if(('totalOccurrences' in obj) && (obj.totalOccurrences != null)) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(('trialOccurrences' in obj) && (obj.trialOccurrences != null)) { this.setTrialOccurrences(obj.trialOccurrences); }
		}
		else {
			this.setInterval(null);
			this.setStartDate(null);
			this.setTotalOccurrences(null);
			this.setTrialOccurrences(null);
		}
		logger.debug('Exit PaymentScheduleType constructor');
	}

	setInterval(p_interval) { this.interval = p_interval; }
	getInterval() { return this.interval; }
	setStartDate(p_startDate) { this.startDate = p_startDate; }
	getStartDate() { return this.startDate; }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences() { return this.totalOccurrences; }
	setTrialOccurrences(p_trialOccurrences) { this.trialOccurrences = p_trialOccurrences; }
	getTrialOccurrences() { return this.trialOccurrences; }
}

module.exports.PaymentScheduleType = PaymentScheduleType;

class TransactionDetailsType {
	constructor(obj) {
		logger.debug('Enter TransactionDetailsType constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('refTransId' in obj) && (obj.refTransId != null)) { this.setRefTransId(obj.refTransId); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('submitTimeUTC' in obj) && (obj.submitTimeUTC != null)) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(('submitTimeLocal' in obj) && (obj.submitTimeLocal != null)) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(('transactionType' in obj) && (obj.transactionType != null)) { this.setTransactionType(obj.transactionType); }
			if(('transactionStatus' in obj) && (obj.transactionStatus != null)) { this.setTransactionStatus(obj.transactionStatus); }
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('responseReasonCode' in obj) && (obj.responseReasonCode != null)) { this.setResponseReasonCode(obj.responseReasonCode); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(('responseReasonDescription' in obj) && (obj.responseReasonDescription != null)) { this.setResponseReasonDescription(obj.responseReasonDescription); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('AVSResponse' in obj) && (obj.AVSResponse != null)) { this.setAVSResponse(obj.AVSResponse); }
			if(('cardCodeResponse' in obj) && (obj.cardCodeResponse != null)) { this.setCardCodeResponse(obj.cardCodeResponse); }
			if(('CAVVResponse' in obj) && (obj.CAVVResponse != null)) { this.setCAVVResponse(obj.CAVVResponse); }
			if(('FDSFilterAction' in obj) && (obj.FDSFilterAction != null)) { this.setFDSFilterAction(obj.FDSFilterAction); }
			if(('FDSFilters' in obj) && (obj.FDSFilters != null)) { this.setFDSFilters(new ArrayOfFDSFilter(obj.FDSFilters)); }
			if(('batch' in obj) && (obj.batch != null)) { this.setBatch(new BatchDetailsType(obj.batch)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('authAmount' in obj) && (obj.authAmount != null)) { this.setAuthAmount(obj.authAmount); }
			if(('settleAmount' in obj) && (obj.settleAmount != null)) { this.setSettleAmount(obj.settleAmount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(('lineItems' in obj) && (obj.lineItems != null)) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(('prepaidBalanceRemaining' in obj) && (obj.prepaidBalanceRemaining != null)) { this.setPrepaidBalanceRemaining(obj.prepaidBalanceRemaining); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('recurringBilling' in obj) && (obj.recurringBilling != null)) { this.setRecurringBilling(obj.recurringBilling); }
			if(('customerIP' in obj) && (obj.customerIP != null)) { this.setCustomerIP(obj.customerIP); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('entryMode' in obj) && (obj.entryMode != null)) { this.setEntryMode(obj.entryMode); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('customerSignature' in obj) && (obj.customerSignature != null)) { this.setCustomerSignature(obj.customerSignature); }
			if(('returnedItems' in obj) && (obj.returnedItems != null)) { this.setReturnedItems(new ArrayOfReturnedItem(obj.returnedItems)); }
			if(('solution' in obj) && (obj.solution != null)) { this.setSolution(new SolutionType(obj.solution)); }
			if(('emvDetails' in obj) && (obj.emvDetails != null)) { this.setEmvDetails(new TransactionDetailsType.EmvDetails(obj.emvDetails)); }
		}
		else {
			this.setTransId(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionType(null);
			this.setTransactionStatus(null);
			this.setResponseCode(null);
			this.setResponseReasonCode(null);
			this.setSubscription(null);
			this.setResponseReasonDescription(null);
			this.setAuthCode(null);
			this.setAVSResponse(null);
			this.setCardCodeResponse(null);
			this.setCAVVResponse(null);
			this.setFDSFilterAction(null);
			this.setFDSFilters(null);
			this.setBatch(null);
			this.setOrder(null);
			this.setRequestedAmount(null);
			this.setAuthAmount(null);
			this.setSettleAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
			this.setPrepaidBalanceRemaining(null);
			this.setTaxExempt(null);
			this.setPayment(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setRecurringBilling(null);
			this.setCustomerIP(null);
			this.setProduct(null);
			this.setEntryMode(null);
			this.setMarketType(null);
			this.setMobileDeviceId(null);
			this.setCustomerSignature(null);
			this.setReturnedItems(null);
			this.setSolution(null);
			this.setEmvDetails(null);
		}
		logger.debug('Exit TransactionDetailsType constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId() { return this.refTransId; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { return this.splitTenderId; }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC() { return this.submitTimeUTC; }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal() { return this.submitTimeLocal; }
	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType() { return this.transactionType; }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus() { return this.transactionStatus; }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { return this.responseCode; }
	setResponseReasonCode(p_responseReasonCode) { this.responseReasonCode = p_responseReasonCode; }
	getResponseReasonCode() { return this.responseReasonCode; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { return this.subscription; }
	setResponseReasonDescription(p_responseReasonDescription) { this.responseReasonDescription = p_responseReasonDescription; }
	getResponseReasonDescription() { return this.responseReasonDescription; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { return this.authCode; }
	setAVSResponse(p_AVSResponse) { this.AVSResponse = p_AVSResponse; }
	getAVSResponse() { return this.AVSResponse; }
	setCardCodeResponse(p_cardCodeResponse) { this.cardCodeResponse = p_cardCodeResponse; }
	getCardCodeResponse() { return this.cardCodeResponse; }
	setCAVVResponse(p_CAVVResponse) { this.CAVVResponse = p_CAVVResponse; }
	getCAVVResponse() { return this.CAVVResponse; }
	setFDSFilterAction(p_FDSFilterAction) { this.FDSFilterAction = p_FDSFilterAction; }
	getFDSFilterAction() { return this.FDSFilterAction; }
	setFDSFilters(p_FDSFilters) { this.FDSFilters = p_FDSFilters; }
	getFDSFilters() { return this.FDSFilters; }
	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { return this.batch; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { return this.requestedAmount; }
	setAuthAmount(p_authAmount) { this.authAmount = p_authAmount; }
	getAuthAmount() { return this.authAmount; }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount() { return this.settleAmount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { return this.tax; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { return this.shipping; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { return this.duty; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { return this.lineItems; }
	setPrepaidBalanceRemaining(p_prepaidBalanceRemaining) { this.prepaidBalanceRemaining = p_prepaidBalanceRemaining; }
	getPrepaidBalanceRemaining() { return this.prepaidBalanceRemaining; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { return this.taxExempt; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { return this.shipTo; }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling() { return this.recurringBilling; }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP() { return this.customerIP; }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { return this.product; }
	setEntryMode(p_entryMode) { this.entryMode = p_entryMode; }
	getEntryMode() { return this.entryMode; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { return this.marketType; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { return this.mobileDeviceId; }
	setCustomerSignature(p_customerSignature) { this.customerSignature = p_customerSignature; }
	getCustomerSignature() { return this.customerSignature; }
	setReturnedItems(p_returnedItems) { this.returnedItems = p_returnedItems; }
	getReturnedItems() { return this.returnedItems; }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution() { return this.solution; }
	setEmvDetails(p_emvDetails) { this.emvDetails = p_emvDetails; }
	getEmvDetails() { return this.emvDetails; }
}

module.exports.TransactionDetailsType = TransactionDetailsType;

class ReturnedItemType {
	constructor(obj) {
		logger.debug('Enter ReturnedItemType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('dateUTC' in obj) && (obj.dateUTC != null)) { this.setDateUTC(obj.dateUTC); }
			if(('dateLocal' in obj) && (obj.dateLocal != null)) { this.setDateLocal(obj.dateLocal); }
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setId(null);
			this.setDateUTC(null);
			this.setDateLocal(null);
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit ReturnedItemType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setDateUTC(p_dateUTC) { this.dateUTC = p_dateUTC; }
	getDateUTC() { return this.dateUTC; }
	setDateLocal(p_dateLocal) { this.dateLocal = p_dateLocal; }
	getDateLocal() { return this.dateLocal; }
	setCode(p_code) { this.code = p_code; }
	getCode() { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
}

module.exports.ReturnedItemType = ReturnedItemType;

class EnumCollection {
	constructor(obj) {
		logger.debug('Enter EnumCollection constructor');
		if(arguments.length == 1) {
			if(('customerProfileSummaryType' in obj) && (obj.customerProfileSummaryType != null)) { this.setCustomerProfileSummaryType(new CustomerProfileSummaryType(obj.customerProfileSummaryType)); }
			if(('paymentSimpleType' in obj) && (obj.paymentSimpleType != null)) { this.setPaymentSimpleType(new PaymentSimpleType(obj.paymentSimpleType)); }
			if(('accountTypeEnum' in obj) && (obj.accountTypeEnum != null)) { this.setAccountTypeEnum(obj.accountTypeEnum); }
			if(('cardTypeEnum' in obj) && (obj.cardTypeEnum != null)) { this.setCardTypeEnum(obj.cardTypeEnum); }
			if(('FDSFilterActionEnum' in obj) && (obj.FDSFilterActionEnum != null)) { this.setFDSFilterActionEnum(obj.FDSFilterActionEnum); }
			if(('permissionsEnum' in obj) && (obj.permissionsEnum != null)) { this.setPermissionsEnum(obj.permissionsEnum); }
			if(('settingNameEnum' in obj) && (obj.settingNameEnum != null)) { this.setSettingNameEnum(obj.settingNameEnum); }
			if(('settlementStateEnum' in obj) && (obj.settlementStateEnum != null)) { this.setSettlementStateEnum(obj.settlementStateEnum); }
			if(('transactionStatusEnum' in obj) && (obj.transactionStatusEnum != null)) { this.setTransactionStatusEnum(obj.transactionStatusEnum); }
			if(('transactionTypeEnum' in obj) && (obj.transactionTypeEnum != null)) { this.setTransactionTypeEnum(obj.transactionTypeEnum); }
		}
		else {
			this.setCustomerProfileSummaryType(null);
			this.setPaymentSimpleType(null);
			this.setAccountTypeEnum(null);
			this.setCardTypeEnum(null);
			this.setFDSFilterActionEnum(null);
			this.setPermissionsEnum(null);
			this.setSettingNameEnum(null);
			this.setSettlementStateEnum(null);
			this.setTransactionStatusEnum(null);
			this.setTransactionTypeEnum(null);
		}
		logger.debug('Exit EnumCollection constructor');
	}

	setCustomerProfileSummaryType(p_customerProfileSummaryType) { this.customerProfileSummaryType = p_customerProfileSummaryType; }
	getCustomerProfileSummaryType() { return this.customerProfileSummaryType; }
	setPaymentSimpleType(p_paymentSimpleType) { this.paymentSimpleType = p_paymentSimpleType; }
	getPaymentSimpleType() { return this.paymentSimpleType; }
	setAccountTypeEnum(p_accountTypeEnum) { this.accountTypeEnum = p_accountTypeEnum; }
	getAccountTypeEnum() { return this.accountTypeEnum; }
	setCardTypeEnum(p_cardTypeEnum) { this.cardTypeEnum = p_cardTypeEnum; }
	getCardTypeEnum() { return this.cardTypeEnum; }
	setFDSFilterActionEnum(p_FDSFilterActionEnum) { this.FDSFilterActionEnum = p_FDSFilterActionEnum; }
	getFDSFilterActionEnum() { return this.FDSFilterActionEnum; }
	setPermissionsEnum(p_permissionsEnum) { this.permissionsEnum = p_permissionsEnum; }
	getPermissionsEnum() { return this.permissionsEnum; }
	setSettingNameEnum(p_settingNameEnum) { this.settingNameEnum = p_settingNameEnum; }
	getSettingNameEnum() { return this.settingNameEnum; }
	setSettlementStateEnum(p_settlementStateEnum) { this.settlementStateEnum = p_settlementStateEnum; }
	getSettlementStateEnum() { return this.settlementStateEnum; }
	setTransactionStatusEnum(p_transactionStatusEnum) { this.transactionStatusEnum = p_transactionStatusEnum; }
	getTransactionStatusEnum() { return this.transactionStatusEnum; }
	setTransactionTypeEnum(p_transactionTypeEnum) { this.transactionTypeEnum = p_transactionTypeEnum; }
	getTransactionTypeEnum() { return this.transactionTypeEnum; }
}

module.exports.EnumCollection = EnumCollection;

class DriversLicenseType {
	constructor(obj) {
		logger.debug('Enter DriversLicenseType constructor');
		if(arguments.length == 1) {
			if(('number' in obj) && (obj.number != null)) { this.setNumber(obj.number); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('dateOfBirth' in obj) && (obj.dateOfBirth != null)) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseType constructor');
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber() { return this.number; }
	setState(p_state) { this.state = p_state; }
	getState() { return this.state; }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth() { return this.dateOfBirth; }
}

module.exports.DriversLicenseType = DriversLicenseType;

class PaymentProfile {
	constructor(obj) {
		logger.debug('Enter PaymentProfile constructor');
		if(arguments.length == 1) {
			if(('paymentProfileId' in obj) && (obj.paymentProfileId != null)) { this.setPaymentProfileId(obj.paymentProfileId); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
		}
		else {
			this.setPaymentProfileId(null);
			this.setCardCode(null);
		}
		logger.debug('Exit PaymentProfile constructor');
	}

	setPaymentProfileId(p_paymentProfileId) { this.paymentProfileId = p_paymentProfileId; }
	getPaymentProfileId() { return this.paymentProfileId; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { return this.cardCode; }
}

module.exports.PaymentProfile = PaymentProfile;

class ProfileTransVoidType {
	constructor(obj) {
		logger.debug('Enter ProfileTransVoidType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransVoidType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { return this.customerShippingAddressId; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
}

module.exports.ProfileTransVoidType = ProfileTransVoidType;

class UserField {
	constructor(obj) {
		logger.debug('Enter UserField constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('value' in obj) && (obj.value != null)) { this.setValue(obj.value); }
		}
		else {
			this.setName(null);
			this.setValue(null);
		}
		logger.debug('Exit UserField constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setValue(p_value) { this.value = p_value; }
	getValue() { return this.value; }
}

module.exports.UserField = UserField;

class OrderType {
	constructor(obj) {
		logger.debug('Enter OrderType constructor');
		if(arguments.length == 1) {
			if(('invoiceNumber' in obj) && (obj.invoiceNumber != null)) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setInvoiceNumber(null);
			this.setDescription(null);
		}
		logger.debug('Exit OrderType constructor');
	}

	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber() { return this.invoiceNumber; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
}

module.exports.OrderType = OrderType;

class CustomerProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileBaseType constructor');
		if(arguments.length == 1) {
			if(('merchantCustomerId' in obj) && (obj.merchantCustomerId != null)) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
		}
		else {
			this.setMerchantCustomerId(null);
			this.setDescription(null);
			this.setEmail(null);
		}
		logger.debug('Exit CustomerProfileBaseType constructor');
	}

	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId() { return this.merchantCustomerId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { return this.email; }
}

module.exports.CustomerProfileBaseType = CustomerProfileBaseType;

class EncryptedTrackDataType {
	constructor(obj) {
		logger.debug('Enter EncryptedTrackDataType constructor');
		if(arguments.length == 1) {
			if(('FormOfPayment' in obj) && (obj.FormOfPayment != null)) { this.setFormOfPayment(new KeyBlock(obj.FormOfPayment)); }
		}
		else {
			this.setFormOfPayment(null);
		}
		logger.debug('Exit EncryptedTrackDataType constructor');
	}

	setFormOfPayment(p_FormOfPayment) { this.FormOfPayment = p_FormOfPayment; }
	getFormOfPayment() { return this.FormOfPayment; }
}

module.exports.EncryptedTrackDataType = EncryptedTrackDataType;

class BatchStatisticType {
	constructor(obj) {
		logger.debug('Enter BatchStatisticType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('chargeAmount' in obj) && (obj.chargeAmount != null)) { this.setChargeAmount(obj.chargeAmount); }
			if(('chargeCount' in obj) && (obj.chargeCount != null)) { this.setChargeCount(obj.chargeCount); }
			if(('refundAmount' in obj) && (obj.refundAmount != null)) { this.setRefundAmount(obj.refundAmount); }
			if(('refundCount' in obj) && (obj.refundCount != null)) { this.setRefundCount(obj.refundCount); }
			if(('voidCount' in obj) && (obj.voidCount != null)) { this.setVoidCount(obj.voidCount); }
			if(('declineCount' in obj) && (obj.declineCount != null)) { this.setDeclineCount(obj.declineCount); }
			if(('errorCount' in obj) && (obj.errorCount != null)) { this.setErrorCount(obj.errorCount); }
			if(('returnedItemAmount' in obj) && (obj.returnedItemAmount != null)) { this.setReturnedItemAmount(obj.returnedItemAmount); }
			if(('returnedItemCount' in obj) && (obj.returnedItemCount != null)) { this.setReturnedItemCount(obj.returnedItemCount); }
			if(('chargebackAmount' in obj) && (obj.chargebackAmount != null)) { this.setChargebackAmount(obj.chargebackAmount); }
			if(('chargebackCount' in obj) && (obj.chargebackCount != null)) { this.setChargebackCount(obj.chargebackCount); }
			if(('correctionNoticeCount' in obj) && (obj.correctionNoticeCount != null)) { this.setCorrectionNoticeCount(obj.correctionNoticeCount); }
			if(('chargeChargeBackAmount' in obj) && (obj.chargeChargeBackAmount != null)) { this.setChargeChargeBackAmount(obj.chargeChargeBackAmount); }
			if(('chargeChargeBackCount' in obj) && (obj.chargeChargeBackCount != null)) { this.setChargeChargeBackCount(obj.chargeChargeBackCount); }
			if(('refundChargeBackAmount' in obj) && (obj.refundChargeBackAmount != null)) { this.setRefundChargeBackAmount(obj.refundChargeBackAmount); }
			if(('refundChargeBackCount' in obj) && (obj.refundChargeBackCount != null)) { this.setRefundChargeBackCount(obj.refundChargeBackCount); }
			if(('chargeReturnedItemsAmount' in obj) && (obj.chargeReturnedItemsAmount != null)) { this.setChargeReturnedItemsAmount(obj.chargeReturnedItemsAmount); }
			if(('chargeReturnedItemsCount' in obj) && (obj.chargeReturnedItemsCount != null)) { this.setChargeReturnedItemsCount(obj.chargeReturnedItemsCount); }
			if(('refundReturnedItemsAmount' in obj) && (obj.refundReturnedItemsAmount != null)) { this.setRefundReturnedItemsAmount(obj.refundReturnedItemsAmount); }
			if(('refundReturnedItemsCount' in obj) && (obj.refundReturnedItemsCount != null)) { this.setRefundReturnedItemsCount(obj.refundReturnedItemsCount); }
		}
		else {
			this.setAccountType(null);
			this.setChargeAmount(null);
			this.setChargeCount(null);
			this.setRefundAmount(null);
			this.setRefundCount(null);
			this.setVoidCount(null);
			this.setDeclineCount(null);
			this.setErrorCount(null);
			this.setReturnedItemAmount(null);
			this.setReturnedItemCount(null);
			this.setChargebackAmount(null);
			this.setChargebackCount(null);
			this.setCorrectionNoticeCount(null);
			this.setChargeChargeBackAmount(null);
			this.setChargeChargeBackCount(null);
			this.setRefundChargeBackAmount(null);
			this.setRefundChargeBackCount(null);
			this.setChargeReturnedItemsAmount(null);
			this.setChargeReturnedItemsCount(null);
			this.setRefundReturnedItemsAmount(null);
			this.setRefundReturnedItemsCount(null);
		}
		logger.debug('Exit BatchStatisticType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setChargeAmount(p_chargeAmount) { this.chargeAmount = p_chargeAmount; }
	getChargeAmount() { return this.chargeAmount; }
	setChargeCount(p_chargeCount) { this.chargeCount = p_chargeCount; }
	getChargeCount() { return this.chargeCount; }
	setRefundAmount(p_refundAmount) { this.refundAmount = p_refundAmount; }
	getRefundAmount() { return this.refundAmount; }
	setRefundCount(p_refundCount) { this.refundCount = p_refundCount; }
	getRefundCount() { return this.refundCount; }
	setVoidCount(p_voidCount) { this.voidCount = p_voidCount; }
	getVoidCount() { return this.voidCount; }
	setDeclineCount(p_declineCount) { this.declineCount = p_declineCount; }
	getDeclineCount() { return this.declineCount; }
	setErrorCount(p_errorCount) { this.errorCount = p_errorCount; }
	getErrorCount() { return this.errorCount; }
	setReturnedItemAmount(p_returnedItemAmount) { this.returnedItemAmount = p_returnedItemAmount; }
	getReturnedItemAmount() { return this.returnedItemAmount; }
	setReturnedItemCount(p_returnedItemCount) { this.returnedItemCount = p_returnedItemCount; }
	getReturnedItemCount() { return this.returnedItemCount; }
	setChargebackAmount(p_chargebackAmount) { this.chargebackAmount = p_chargebackAmount; }
	getChargebackAmount() { return this.chargebackAmount; }
	setChargebackCount(p_chargebackCount) { this.chargebackCount = p_chargebackCount; }
	getChargebackCount() { return this.chargebackCount; }
	setCorrectionNoticeCount(p_correctionNoticeCount) { this.correctionNoticeCount = p_correctionNoticeCount; }
	getCorrectionNoticeCount() { return this.correctionNoticeCount; }
	setChargeChargeBackAmount(p_chargeChargeBackAmount) { this.chargeChargeBackAmount = p_chargeChargeBackAmount; }
	getChargeChargeBackAmount() { return this.chargeChargeBackAmount; }
	setChargeChargeBackCount(p_chargeChargeBackCount) { this.chargeChargeBackCount = p_chargeChargeBackCount; }
	getChargeChargeBackCount() { return this.chargeChargeBackCount; }
	setRefundChargeBackAmount(p_refundChargeBackAmount) { this.refundChargeBackAmount = p_refundChargeBackAmount; }
	getRefundChargeBackAmount() { return this.refundChargeBackAmount; }
	setRefundChargeBackCount(p_refundChargeBackCount) { this.refundChargeBackCount = p_refundChargeBackCount; }
	getRefundChargeBackCount() { return this.refundChargeBackCount; }
	setChargeReturnedItemsAmount(p_chargeReturnedItemsAmount) { this.chargeReturnedItemsAmount = p_chargeReturnedItemsAmount; }
	getChargeReturnedItemsAmount() { return this.chargeReturnedItemsAmount; }
	setChargeReturnedItemsCount(p_chargeReturnedItemsCount) { this.chargeReturnedItemsCount = p_chargeReturnedItemsCount; }
	getChargeReturnedItemsCount() { return this.chargeReturnedItemsCount; }
	setRefundReturnedItemsAmount(p_refundReturnedItemsAmount) { this.refundReturnedItemsAmount = p_refundReturnedItemsAmount; }
	getRefundReturnedItemsAmount() { return this.refundReturnedItemsAmount; }
	setRefundReturnedItemsCount(p_refundReturnedItemsCount) { this.refundReturnedItemsCount = p_refundReturnedItemsCount; }
	getRefundReturnedItemsCount() { return this.refundReturnedItemsCount; }
}

module.exports.BatchStatisticType = BatchStatisticType;

class PaymentDetails {
	constructor(obj) {
		logger.debug('Enter PaymentDetails constructor');
		if(arguments.length == 1) {
			if(('currency' in obj) && (obj.currency != null)) { this.setCurrency(obj.currency); }
			if(('promoCode' in obj) && (obj.promoCode != null)) { this.setPromoCode(obj.promoCode); }
			if(('misc' in obj) && (obj.misc != null)) { this.setMisc(obj.misc); }
			if(('giftWrap' in obj) && (obj.giftWrap != null)) { this.setGiftWrap(obj.giftWrap); }
			if(('discount' in obj) && (obj.discount != null)) { this.setDiscount(obj.discount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(obj.tax); }
			if(('shippingHandling' in obj) && (obj.shippingHandling != null)) { this.setShippingHandling(obj.shippingHandling); }
			if(('subTotal' in obj) && (obj.subTotal != null)) { this.setSubTotal(obj.subTotal); }
			if(('orderID' in obj) && (obj.orderID != null)) { this.setOrderID(obj.orderID); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
		}
		else {
			this.setCurrency(null);
			this.setPromoCode(null);
			this.setMisc(null);
			this.setGiftWrap(null);
			this.setDiscount(null);
			this.setTax(null);
			this.setShippingHandling(null);
			this.setSubTotal(null);
			this.setOrderID(null);
			this.setAmount(null);
		}
		logger.debug('Exit PaymentDetails constructor');
	}

	setCurrency(p_currency) { this.currency = p_currency; }
	getCurrency() { return this.currency; }
	setPromoCode(p_promoCode) { this.promoCode = p_promoCode; }
	getPromoCode() { return this.promoCode; }
	setMisc(p_misc) { this.misc = p_misc; }
	getMisc() { return this.misc; }
	setGiftWrap(p_giftWrap) { this.giftWrap = p_giftWrap; }
	getGiftWrap() { return this.giftWrap; }
	setDiscount(p_discount) { this.discount = p_discount; }
	getDiscount() { return this.discount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { return this.tax; }
	setShippingHandling(p_shippingHandling) { this.shippingHandling = p_shippingHandling; }
	getShippingHandling() { return this.shippingHandling; }
	setSubTotal(p_subTotal) { this.subTotal = p_subTotal; }
	getSubTotal() { return this.subTotal; }
	setOrderID(p_orderID) { this.orderID = p_orderID; }
	getOrderID() { return this.orderID; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
}

module.exports.PaymentDetails = PaymentDetails;

class FDSFilterType {
	constructor(obj) {
		logger.debug('Enter FDSFilterType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('action' in obj) && (obj.action != null)) { this.setAction(obj.action); }
		}
		else {
			this.setName(null);
			this.setAction(null);
		}
		logger.debug('Exit FDSFilterType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setAction(p_action) { this.action = p_action; }
	getAction() { return this.action; }
}

module.exports.FDSFilterType = FDSFilterType;

class FingerPrintType {
	constructor(obj) {
		logger.debug('Enter FingerPrintType constructor');
		if(arguments.length == 1) {
			if(('hashValue' in obj) && (obj.hashValue != null)) { this.setHashValue(obj.hashValue); }
			if(('sequence' in obj) && (obj.sequence != null)) { this.setSequence(obj.sequence); }
			if(('timestamp' in obj) && (obj.timestamp != null)) { this.setTimestamp(obj.timestamp); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
		}
		else {
			this.setHashValue(null);
			this.setSequence(null);
			this.setTimestamp(null);
			this.setCurrencyCode(null);
			this.setAmount(null);
		}
		logger.debug('Exit FingerPrintType constructor');
	}

	setHashValue(p_hashValue) { this.hashValue = p_hashValue; }
	getHashValue() { return this.hashValue; }
	setSequence(p_sequence) { this.sequence = p_sequence; }
	getSequence() { return this.sequence; }
	setTimestamp(p_timestamp) { this.timestamp = p_timestamp; }
	getTimestamp() { return this.timestamp; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { return this.currencyCode; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
}

module.exports.FingerPrintType = FingerPrintType;

class TransactionSummaryType {
	constructor(obj) {
		logger.debug('Enter TransactionSummaryType constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('submitTimeUTC' in obj) && (obj.submitTimeUTC != null)) { this.setSubmitTimeUTC(obj.submitTimeUTC); }
			if(('submitTimeLocal' in obj) && (obj.submitTimeLocal != null)) { this.setSubmitTimeLocal(obj.submitTimeLocal); }
			if(('transactionStatus' in obj) && (obj.transactionStatus != null)) { this.setTransactionStatus(obj.transactionStatus); }
			if(('invoiceNumber' in obj) && (obj.invoiceNumber != null)) { this.setInvoiceNumber(obj.invoiceNumber); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('settleAmount' in obj) && (obj.settleAmount != null)) { this.setSettleAmount(obj.settleAmount); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new SubscriptionPaymentType(obj.subscription)); }
			if(('hasReturnedItems' in obj) && (obj.hasReturnedItems != null)) { this.setHasReturnedItems(obj.hasReturnedItems); }
		}
		else {
			this.setTransId(null);
			this.setSubmitTimeUTC(null);
			this.setSubmitTimeLocal(null);
			this.setTransactionStatus(null);
			this.setInvoiceNumber(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setAccountType(null);
			this.setAccountNumber(null);
			this.setSettleAmount(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setMobileDeviceId(null);
			this.setSubscription(null);
			this.setHasReturnedItems(null);
		}
		logger.debug('Exit TransactionSummaryType constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setSubmitTimeUTC(p_submitTimeUTC) { this.submitTimeUTC = p_submitTimeUTC; }
	getSubmitTimeUTC() { return this.submitTimeUTC; }
	setSubmitTimeLocal(p_submitTimeLocal) { this.submitTimeLocal = p_submitTimeLocal; }
	getSubmitTimeLocal() { return this.submitTimeLocal; }
	setTransactionStatus(p_transactionStatus) { this.transactionStatus = p_transactionStatus; }
	getTransactionStatus() { return this.transactionStatus; }
	setInvoiceNumber(p_invoiceNumber) { this.invoiceNumber = p_invoiceNumber; }
	getInvoiceNumber() { return this.invoiceNumber; }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { return this.lastName; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setSettleAmount(p_settleAmount) { this.settleAmount = p_settleAmount; }
	getSettleAmount() { return this.settleAmount; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { return this.marketType; }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { return this.product; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { return this.mobileDeviceId; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { return this.subscription; }
	setHasReturnedItems(p_hasReturnedItems) { this.hasReturnedItems = p_hasReturnedItems; }
	getHasReturnedItems() { return this.hasReturnedItems; }
}

module.exports.TransactionSummaryType = TransactionSummaryType;

class ArrayOfReturnedItem {
	constructor(obj) {
		logger.debug('Enter ArrayOfReturnedItem constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var returnedItemList = [];
				obj.forEach(function(item) {returnedItemList.push(new ReturnedItemType(item));}); 
				this.setReturnedItem(returnedItemList);
			}
		}
		else {
			this.setReturnedItem(null);
		}
		logger.debug('Exit ArrayOfReturnedItem constructor');
	}

	setReturnedItem(p_returnedItem) { this.returnedItem = p_returnedItem; }
	getReturnedItem() { return this.returnedItem; }
}

module.exports.ArrayOfReturnedItem = ArrayOfReturnedItem;

class ArrayOfBatchStatisticType {
	constructor(obj) {
		logger.debug('Enter ArrayOfBatchStatisticType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var statisticList = [];
				obj.forEach(function(item) {statisticList.push(new BatchStatisticType(item));}); 
				this.setStatistic(statisticList);
			}
		}
		else {
			this.setStatistic(null);
		}
		logger.debug('Exit ArrayOfBatchStatisticType constructor');
	}

	setStatistic(p_statistic) { this.statistic = p_statistic; }
	getStatistic() { return this.statistic; }
}

module.exports.ArrayOfBatchStatisticType = ArrayOfBatchStatisticType;

class CustomerDataType {
	constructor(obj) {
		logger.debug('Enter CustomerDataType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerDataType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { return this.email; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { return this.taxId; }
}

module.exports.CustomerDataType = CustomerDataType;

class TransactionResponse {
	constructor(obj) {
		logger.debug('Enter TransactionResponse constructor');
		if(arguments.length == 1) {
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('rawResponseCode' in obj) && (obj.rawResponseCode != null)) { this.setRawResponseCode(obj.rawResponseCode); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('avsResultCode' in obj) && (obj.avsResultCode != null)) { this.setAvsResultCode(obj.avsResultCode); }
			if(('cvvResultCode' in obj) && (obj.cvvResultCode != null)) { this.setCvvResultCode(obj.cvvResultCode); }
			if(('cavvResultCode' in obj) && (obj.cavvResultCode != null)) { this.setCavvResultCode(obj.cavvResultCode); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('refTransID' in obj) && (obj.refTransID != null)) { this.setRefTransID(obj.refTransID); }
			if(('transHash' in obj) && (obj.transHash != null)) { this.setTransHash(obj.transHash); }
			if(('testRequest' in obj) && (obj.testRequest != null)) { this.setTestRequest(obj.testRequest); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('entryMode' in obj) && (obj.entryMode != null)) { this.setEntryMode(obj.entryMode); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('prePaidCard' in obj) && (obj.prePaidCard != null)) { this.setPrePaidCard(new TransactionResponse.PrePaidCard(obj.prePaidCard)); }
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new TransactionResponse.Messages(obj.messages)); }
			if(('errors' in obj) && (obj.errors != null)) { this.setErrors(new TransactionResponse.Errors(obj.errors)); }
			if(('splitTenderPayments' in obj) && (obj.splitTenderPayments != null)) { this.setSplitTenderPayments(new TransactionResponse.SplitTenderPayments(obj.splitTenderPayments)); }
			if(('userFields' in obj) && (obj.userFields != null)) { this.setUserFields(new TransactionResponse.UserFields(obj.userFields)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('secureAcceptance' in obj) && (obj.secureAcceptance != null)) { this.setSecureAcceptance(new TransactionResponse.SecureAcceptance(obj.secureAcceptance)); }
			if(('emvResponse' in obj) && (obj.emvResponse != null)) { this.setEmvResponse(new TransactionResponse.EmvResponse(obj.emvResponse)); }
		}
		else {
			this.setResponseCode(null);
			this.setRawResponseCode(null);
			this.setAuthCode(null);
			this.setAvsResultCode(null);
			this.setCvvResultCode(null);
			this.setCavvResultCode(null);
			this.setTransId(null);
			this.setRefTransID(null);
			this.setTransHash(null);
			this.setTestRequest(null);
			this.setAccountNumber(null);
			this.setEntryMode(null);
			this.setAccountType(null);
			this.setSplitTenderId(null);
			this.setPrePaidCard(null);
			this.setMessages(null);
			this.setErrors(null);
			this.setSplitTenderPayments(null);
			this.setUserFields(null);
			this.setShipTo(null);
			this.setSecureAcceptance(null);
			this.setEmvResponse(null);
		}
		logger.debug('Exit TransactionResponse constructor');
	}

	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { return this.responseCode; }
	setRawResponseCode(p_rawResponseCode) { this.rawResponseCode = p_rawResponseCode; }
	getRawResponseCode() { return this.rawResponseCode; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { return this.authCode; }
	setAvsResultCode(p_avsResultCode) { this.avsResultCode = p_avsResultCode; }
	getAvsResultCode() { return this.avsResultCode; }
	setCvvResultCode(p_cvvResultCode) { this.cvvResultCode = p_cvvResultCode; }
	getCvvResultCode() { return this.cvvResultCode; }
	setCavvResultCode(p_cavvResultCode) { this.cavvResultCode = p_cavvResultCode; }
	getCavvResultCode() { return this.cavvResultCode; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setRefTransID(p_refTransID) { this.refTransID = p_refTransID; }
	getRefTransID() { return this.refTransID; }
	setTransHash(p_transHash) { this.transHash = p_transHash; }
	getTransHash() { return this.transHash; }
	setTestRequest(p_testRequest) { this.testRequest = p_testRequest; }
	getTestRequest() { return this.testRequest; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setEntryMode(p_entryMode) { this.entryMode = p_entryMode; }
	getEntryMode() { return this.entryMode; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { return this.splitTenderId; }
	setPrePaidCard(p_prePaidCard) { this.prePaidCard = p_prePaidCard; }
	getPrePaidCard() { return this.prePaidCard; }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { return this.messages; }
	setErrors(p_errors) { this.errors = p_errors; }
	getErrors() { return this.errors; }
	setSplitTenderPayments(p_splitTenderPayments) { this.splitTenderPayments = p_splitTenderPayments; }
	getSplitTenderPayments() { return this.splitTenderPayments; }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields() { return this.userFields; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { return this.shipTo; }
	setSecureAcceptance(p_secureAcceptance) { this.secureAcceptance = p_secureAcceptance; }
	getSecureAcceptance() { return this.secureAcceptance; }
	setEmvResponse(p_emvResponse) { this.emvResponse = p_emvResponse; }
	getEmvResponse() { return this.emvResponse; }
}

module.exports.TransactionResponse = TransactionResponse;

class SubscriptionPaymentType {
	constructor(obj) {
		logger.debug('Enter SubscriptionPaymentType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('payNum' in obj) && (obj.payNum != null)) { this.setPayNum(obj.payNum); }
		}
		else {
			this.setId(null);
			this.setPayNum(null);
		}
		logger.debug('Exit SubscriptionPaymentType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setPayNum(p_payNum) { this.payNum = p_payNum; }
	getPayNum() { return this.payNum; }
}

module.exports.SubscriptionPaymentType = SubscriptionPaymentType;

class CardArt {
	constructor(obj) {
		logger.debug('Enter CardArt constructor');
		if(arguments.length == 1) {
			if(('cardBrand' in obj) && (obj.cardBrand != null)) { this.setCardBrand(obj.cardBrand); }
			if(('cardImageHeight' in obj) && (obj.cardImageHeight != null)) { this.setCardImageHeight(obj.cardImageHeight); }
			if(('cardImageUrl' in obj) && (obj.cardImageUrl != null)) { this.setCardImageUrl(obj.cardImageUrl); }
			if(('cardImageWidth' in obj) && (obj.cardImageWidth != null)) { this.setCardImageWidth(obj.cardImageWidth); }
			if(('cardType' in obj) && (obj.cardType != null)) { this.setCardType(obj.cardType); }
		}
		else {
			this.setCardBrand(null);
			this.setCardImageHeight(null);
			this.setCardImageUrl(null);
			this.setCardImageWidth(null);
			this.setCardType(null);
		}
		logger.debug('Exit CardArt constructor');
	}

	setCardBrand(p_cardBrand) { this.cardBrand = p_cardBrand; }
	getCardBrand() { return this.cardBrand; }
	setCardImageHeight(p_cardImageHeight) { this.cardImageHeight = p_cardImageHeight; }
	getCardImageHeight() { return this.cardImageHeight; }
	setCardImageUrl(p_cardImageUrl) { this.cardImageUrl = p_cardImageUrl; }
	getCardImageUrl() { return this.cardImageUrl; }
	setCardImageWidth(p_cardImageWidth) { this.cardImageWidth = p_cardImageWidth; }
	getCardImageWidth() { return this.cardImageWidth; }
	setCardType(p_cardType) { this.cardType = p_cardType; }
	getCardType() { return this.cardType; }
}

module.exports.CardArt = CardArt;

class ProfileTransactionType {
	constructor(obj) {
		logger.debug('Enter ProfileTransactionType constructor');
		if(arguments.length == 1) {
			if(('profileTransAuthCapture' in obj) && (obj.profileTransAuthCapture != null)) { this.setProfileTransAuthCapture(new ProfileTransAuthCaptureType(obj.profileTransAuthCapture)); }
			if(('profileTransAuthOnly' in obj) && (obj.profileTransAuthOnly != null)) { this.setProfileTransAuthOnly(new ProfileTransAuthOnlyType(obj.profileTransAuthOnly)); }
			if(('profileTransPriorAuthCapture' in obj) && (obj.profileTransPriorAuthCapture != null)) { this.setProfileTransPriorAuthCapture(new ProfileTransPriorAuthCaptureType(obj.profileTransPriorAuthCapture)); }
			if(('profileTransCaptureOnly' in obj) && (obj.profileTransCaptureOnly != null)) { this.setProfileTransCaptureOnly(new ProfileTransCaptureOnlyType(obj.profileTransCaptureOnly)); }
			if(('profileTransRefund' in obj) && (obj.profileTransRefund != null)) { this.setProfileTransRefund(new ProfileTransRefundType(obj.profileTransRefund)); }
			if(('profileTransVoid' in obj) && (obj.profileTransVoid != null)) { this.setProfileTransVoid(new ProfileTransVoidType(obj.profileTransVoid)); }
		}
		else {
			this.setProfileTransAuthCapture(null);
			this.setProfileTransAuthOnly(null);
			this.setProfileTransPriorAuthCapture(null);
			this.setProfileTransCaptureOnly(null);
			this.setProfileTransRefund(null);
			this.setProfileTransVoid(null);
		}
		logger.debug('Exit ProfileTransactionType constructor');
	}

	setProfileTransAuthCapture(p_profileTransAuthCapture) { this.profileTransAuthCapture = p_profileTransAuthCapture; }
	getProfileTransAuthCapture() { return this.profileTransAuthCapture; }
	setProfileTransAuthOnly(p_profileTransAuthOnly) { this.profileTransAuthOnly = p_profileTransAuthOnly; }
	getProfileTransAuthOnly() { return this.profileTransAuthOnly; }
	setProfileTransPriorAuthCapture(p_profileTransPriorAuthCapture) { this.profileTransPriorAuthCapture = p_profileTransPriorAuthCapture; }
	getProfileTransPriorAuthCapture() { return this.profileTransPriorAuthCapture; }
	setProfileTransCaptureOnly(p_profileTransCaptureOnly) { this.profileTransCaptureOnly = p_profileTransCaptureOnly; }
	getProfileTransCaptureOnly() { return this.profileTransCaptureOnly; }
	setProfileTransRefund(p_profileTransRefund) { this.profileTransRefund = p_profileTransRefund; }
	getProfileTransRefund() { return this.profileTransRefund; }
	setProfileTransVoid(p_profileTransVoid) { this.profileTransVoid = p_profileTransVoid; }
	getProfileTransVoid() { return this.profileTransVoid; }
}

module.exports.ProfileTransactionType = ProfileTransactionType;

class ListOfAUDetailsType {
	constructor(obj) {
		logger.debug('Enter ListOfAUDetailsType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var auUpdateOrAuDeleteList = [];
				obj.forEach(function(item) {auUpdateOrAuDeleteList.push(new String(item));}); 
				this.setAuUpdateOrAuDelete(auUpdateOrAuDeleteList);
			}
		}
		else {
			this.setAuUpdateOrAuDelete(null);
		}
		logger.debug('Exit ListOfAUDetailsType constructor');
	}

	setAuUpdateOrAuDelete(p_auUpdateOrAuDelete) { this.auUpdateOrAuDelete = p_auUpdateOrAuDelete; }
	getAuUpdateOrAuDelete() { return this.auUpdateOrAuDelete; }
}

module.exports.ListOfAUDetailsType = ListOfAUDetailsType;

class MerchantContactType {
	constructor(obj) {
		logger.debug('Enter MerchantContactType constructor');
		if(arguments.length == 1) {
			if(('merchantName' in obj) && (obj.merchantName != null)) { this.setMerchantName(obj.merchantName); }
			if(('merchantAddress' in obj) && (obj.merchantAddress != null)) { this.setMerchantAddress(obj.merchantAddress); }
			if(('merchantCity' in obj) && (obj.merchantCity != null)) { this.setMerchantCity(obj.merchantCity); }
			if(('merchantState' in obj) && (obj.merchantState != null)) { this.setMerchantState(obj.merchantState); }
			if(('merchantZip' in obj) && (obj.merchantZip != null)) { this.setMerchantZip(obj.merchantZip); }
			if(('merchantPhone' in obj) && (obj.merchantPhone != null)) { this.setMerchantPhone(obj.merchantPhone); }
		}
		else {
			this.setMerchantName(null);
			this.setMerchantAddress(null);
			this.setMerchantCity(null);
			this.setMerchantState(null);
			this.setMerchantZip(null);
			this.setMerchantPhone(null);
		}
		logger.debug('Exit MerchantContactType constructor');
	}

	setMerchantName(p_merchantName) { this.merchantName = p_merchantName; }
	getMerchantName() { return this.merchantName; }
	setMerchantAddress(p_merchantAddress) { this.merchantAddress = p_merchantAddress; }
	getMerchantAddress() { return this.merchantAddress; }
	setMerchantCity(p_merchantCity) { this.merchantCity = p_merchantCity; }
	getMerchantCity() { return this.merchantCity; }
	setMerchantState(p_merchantState) { this.merchantState = p_merchantState; }
	getMerchantState() { return this.merchantState; }
	setMerchantZip(p_merchantZip) { this.merchantZip = p_merchantZip; }
	getMerchantZip() { return this.merchantZip; }
	setMerchantPhone(p_merchantPhone) { this.merchantPhone = p_merchantPhone; }
	getMerchantPhone() { return this.merchantPhone; }
}

module.exports.MerchantContactType = MerchantContactType;

class ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ANetApiResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ErrorResponse' : this };
		logger.debug('Exit ANetApiResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ANetApiResponse constructor');
		if(arguments.length == 1) {
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new MessagesType(obj.messages)); }
			if(('sessionToken' in obj) && (obj.sessionToken != null)) { this.setSessionToken(obj.sessionToken); }
		}
		else {
			this.setRefId(null);
			this.setMessages(null);
			this.setSessionToken(null);
		}
		logger.debug('Exit ANetApiResponse constructor');
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { return this.refId; }
	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { return this.messages; }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken() { return this.sessionToken; }
}

module.exports.ANetApiResponse = ANetApiResponse;

class ArrayOfAUResponseType {
	constructor(obj) {
		logger.debug('Enter ArrayOfAUResponseType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var auResponseList = [];
				obj.forEach(function(item) {auResponseList.push(new AuResponseType(item));}); 
				this.setAuResponse(auResponseList);
			}
		}
		else {
			this.setAuResponse(null);
		}
		logger.debug('Exit ArrayOfAUResponseType constructor');
	}

	setAuResponse(p_auResponse) { this.auResponse = p_auResponse; }
	getAuResponse() { return this.auResponse; }
}

module.exports.ArrayOfAUResponseType = ArrayOfAUResponseType;

class Paging {
	constructor(obj) {
		logger.debug('Enter Paging constructor');
		if(arguments.length == 1) {
			if(('limit' in obj) && (obj.limit != null)) { this.setLimit(obj.limit); }
			if(('offset' in obj) && (obj.offset != null)) { this.setOffset(obj.offset); }
		}
		else {
			this.setLimit(null);
			this.setOffset(null);
		}
		logger.debug('Exit Paging constructor');
	}

	setLimit(p_limit) { this.limit = p_limit; }
	getLimit() { return this.limit; }
	setOffset(p_offset) { this.offset = p_offset; }
	getOffset() { return this.offset; }
}

module.exports.Paging = Paging;

class KeyBlock {
	constructor(obj) {
		logger.debug('Enter KeyBlock constructor');
		if(arguments.length == 1) {
			if(('Value' in obj) && (obj.Value != null)) { this.setValue(new KeyValue(obj.Value)); }
		}
		else {
			this.setValue(null);
		}
		logger.debug('Exit KeyBlock constructor');
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue() { return this.Value; }
}

module.exports.KeyBlock = KeyBlock;

class ArrayOfTransactionSummaryType {
	constructor(obj) {
		logger.debug('Enter ArrayOfTransactionSummaryType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var transactionList = [];
				obj.forEach(function(item) {transactionList.push(new TransactionSummaryType(item));}); 
				this.setTransaction(transactionList);
			}
		}
		else {
			this.setTransaction(null);
		}
		logger.debug('Exit ArrayOfTransactionSummaryType constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { return this.transaction; }
}

module.exports.ArrayOfTransactionSummaryType = ArrayOfTransactionSummaryType;

class BankAccountType {
	constructor(obj) {
		logger.debug('Enter BankAccountType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('routingNumber' in obj) && (obj.routingNumber != null)) { this.setRoutingNumber(obj.routingNumber); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('nameOnAccount' in obj) && (obj.nameOnAccount != null)) { this.setNameOnAccount(obj.nameOnAccount); }
			if(('echeckType' in obj) && (obj.echeckType != null)) { this.setEcheckType(obj.echeckType); }
			if(('bankName' in obj) && (obj.bankName != null)) { this.setBankName(obj.bankName); }
			if(('checkNumber' in obj) && (obj.checkNumber != null)) { this.setCheckNumber(obj.checkNumber); }
		}
		else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
			this.setCheckNumber(null);
		}
		logger.debug('Exit BankAccountType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber() { return this.routingNumber; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount() { return this.nameOnAccount; }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType() { return this.echeckType; }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName() { return this.bankName; }
	setCheckNumber(p_checkNumber) { this.checkNumber = p_checkNumber; }
	getCheckNumber() { return this.checkNumber; }
}

module.exports.BankAccountType = BankAccountType;

class SolutionType {
	constructor(obj) {
		logger.debug('Enter SolutionType constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('vendorName' in obj) && (obj.vendorName != null)) { this.setVendorName(obj.vendorName); }
		}
		else {
			this.setId(null);
			this.setName(null);
			this.setVendorName(null);
		}
		logger.debug('Exit SolutionType constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setVendorName(p_vendorName) { this.vendorName = p_vendorName; }
	getVendorName() { return this.vendorName; }
}

module.exports.SolutionType = SolutionType;

class PayPalType {
	constructor(obj) {
		logger.debug('Enter PayPalType constructor');
		if(arguments.length == 1) {
			if(('successUrl' in obj) && (obj.successUrl != null)) { this.setSuccessUrl(obj.successUrl); }
			if(('cancelUrl' in obj) && (obj.cancelUrl != null)) { this.setCancelUrl(obj.cancelUrl); }
			if(('paypalLc' in obj) && (obj.paypalLc != null)) { this.setPaypalLc(obj.paypalLc); }
			if(('paypalHdrImg' in obj) && (obj.paypalHdrImg != null)) { this.setPaypalHdrImg(obj.paypalHdrImg); }
			if(('paypalPayflowcolor' in obj) && (obj.paypalPayflowcolor != null)) { this.setPaypalPayflowcolor(obj.paypalPayflowcolor); }
			if(('payerID' in obj) && (obj.payerID != null)) { this.setPayerID(obj.payerID); }
		}
		else {
			this.setSuccessUrl(null);
			this.setCancelUrl(null);
			this.setPaypalLc(null);
			this.setPaypalHdrImg(null);
			this.setPaypalPayflowcolor(null);
			this.setPayerID(null);
		}
		logger.debug('Exit PayPalType constructor');
	}

	setSuccessUrl(p_successUrl) { this.successUrl = p_successUrl; }
	getSuccessUrl() { return this.successUrl; }
	setCancelUrl(p_cancelUrl) { this.cancelUrl = p_cancelUrl; }
	getCancelUrl() { return this.cancelUrl; }
	setPaypalLc(p_paypalLc) { this.paypalLc = p_paypalLc; }
	getPaypalLc() { return this.paypalLc; }
	setPaypalHdrImg(p_paypalHdrImg) { this.paypalHdrImg = p_paypalHdrImg; }
	getPaypalHdrImg() { return this.paypalHdrImg; }
	setPaypalPayflowcolor(p_paypalPayflowcolor) { this.paypalPayflowcolor = p_paypalPayflowcolor; }
	getPaypalPayflowcolor() { return this.paypalPayflowcolor; }
	setPayerID(p_payerID) { this.payerID = p_payerID; }
	getPayerID() { return this.payerID; }
}

module.exports.PayPalType = PayPalType;

class BatchDetailsType {
	constructor(obj) {
		logger.debug('Enter BatchDetailsType constructor');
		if(arguments.length == 1) {
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
			if(('settlementTimeUTC' in obj) && (obj.settlementTimeUTC != null)) { this.setSettlementTimeUTC(obj.settlementTimeUTC); }
			if(('settlementTimeLocal' in obj) && (obj.settlementTimeLocal != null)) { this.setSettlementTimeLocal(obj.settlementTimeLocal); }
			if(('settlementState' in obj) && (obj.settlementState != null)) { this.setSettlementState(obj.settlementState); }
			if(('paymentMethod' in obj) && (obj.paymentMethod != null)) { this.setPaymentMethod(obj.paymentMethod); }
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('product' in obj) && (obj.product != null)) { this.setProduct(obj.product); }
			if(('statistics' in obj) && (obj.statistics != null)) { this.setStatistics(new ArrayOfBatchStatisticType(obj.statistics)); }
		}
		else {
			this.setBatchId(null);
			this.setSettlementTimeUTC(null);
			this.setSettlementTimeLocal(null);
			this.setSettlementState(null);
			this.setPaymentMethod(null);
			this.setMarketType(null);
			this.setProduct(null);
			this.setStatistics(null);
		}
		logger.debug('Exit BatchDetailsType constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { return this.batchId; }
	setSettlementTimeUTC(p_settlementTimeUTC) { this.settlementTimeUTC = p_settlementTimeUTC; }
	getSettlementTimeUTC() { return this.settlementTimeUTC; }
	setSettlementTimeLocal(p_settlementTimeLocal) { this.settlementTimeLocal = p_settlementTimeLocal; }
	getSettlementTimeLocal() { return this.settlementTimeLocal; }
	setSettlementState(p_settlementState) { this.settlementState = p_settlementState; }
	getSettlementState() { return this.settlementState; }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod() { return this.paymentMethod; }
	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { return this.marketType; }
	setProduct(p_product) { this.product = p_product; }
	getProduct() { return this.product; }
	setStatistics(p_statistics) { this.statistics = p_statistics; }
	getStatistics() { return this.statistics; }
}

module.exports.BatchDetailsType = BatchDetailsType;

class CustomerType {
	constructor(obj) {
		logger.debug('Enter CustomerType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('faxNumber' in obj) && (obj.faxNumber != null)) { this.setFaxNumber(obj.faxNumber); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setEmail(null);
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { return this.email; }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { return this.phoneNumber; }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber() { return this.faxNumber; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { return this.taxId; }
}

module.exports.CustomerType = CustomerType;

class EmvTag {
	constructor(obj) {
		logger.debug('Enter EmvTag constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('value' in obj) && (obj.value != null)) { this.setValue(obj.value); }
			if(('formatted' in obj) && (obj.formatted != null)) { this.setFormatted(obj.formatted); }
		}
		else {
			this.setName(null);
			this.setValue(null);
			this.setFormatted(null);
		}
		logger.debug('Exit EmvTag constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setValue(p_value) { this.value = p_value; }
	getValue() { return this.value; }
	setFormatted(p_formatted) { this.formatted = p_formatted; }
	getFormatted() { return this.formatted; }
}

module.exports.EmvTag = EmvTag;

class CustomerProfilePaymentType {
	constructor(obj) {
		logger.debug('Enter CustomerProfilePaymentType constructor');
		if(arguments.length == 1) {
			if(('createProfile' in obj) && (obj.createProfile != null)) { this.setCreateProfile(obj.createProfile); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new PaymentProfile(obj.paymentProfile)); }
			if(('shippingProfileId' in obj) && (obj.shippingProfileId != null)) { this.setShippingProfileId(obj.shippingProfileId); }
		}
		else {
			this.setCreateProfile(null);
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setShippingProfileId(null);
		}
		logger.debug('Exit CustomerProfilePaymentType constructor');
	}

	setCreateProfile(p_createProfile) { this.createProfile = p_createProfile; }
	getCreateProfile() { return this.createProfile; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
	setShippingProfileId(p_shippingProfileId) { this.shippingProfileId = p_shippingProfileId; }
	getShippingProfileId() { return this.shippingProfileId; }
}

module.exports.CustomerProfilePaymentType = CustomerProfilePaymentType;

class ProfileTransAmountType {
	constructor(obj) {
		logger.debug('Enter ProfileTransAmountType constructor');
		if(arguments.length == 1) {
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if((obj.lineItems != undefined) && (obj.lineItems != null)) {
				var lineItemsList = [];
				obj.lineItems.forEach(function(item) {lineItemsList.push(new LineItemType(item));}); 
				this.setLineItems(lineItemsList);
			}
		}
		else {
			this.setAmount(null);
			this.setTax(null);
			this.setShipping(null);
			this.setDuty(null);
			this.setLineItems(null);
		}
		logger.debug('Exit ProfileTransAmountType constructor');
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { return this.tax; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { return this.shipping; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { return this.duty; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { return this.lineItems; }
}

module.exports.ProfileTransAmountType = ProfileTransAmountType;

class CustomerProfileSummaryType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileSummaryType constructor');
		if(arguments.length == 1) {
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('merchantCustomerId' in obj) && (obj.merchantCustomerId != null)) { this.setMerchantCustomerId(obj.merchantCustomerId); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
			if(('createdDate' in obj) && (obj.createdDate != null)) { this.setCreatedDate(obj.createdDate); }
		}
		else {
			this.setCustomerProfileId(null);
			this.setDescription(null);
			this.setMerchantCustomerId(null);
			this.setEmail(null);
			this.setCreatedDate(null);
		}
		logger.debug('Exit CustomerProfileSummaryType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
	setMerchantCustomerId(p_merchantCustomerId) { this.merchantCustomerId = p_merchantCustomerId; }
	getMerchantCustomerId() { return this.merchantCustomerId; }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { return this.email; }
	setCreatedDate(p_createdDate) { this.createdDate = p_createdDate; }
	getCreatedDate() { return this.createdDate; }
}

module.exports.CustomerProfileSummaryType = CustomerProfileSummaryType;

class PaymentMaskedType {
	constructor(obj) {
		logger.debug('Enter PaymentMaskedType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardMaskedType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountMaskedType(obj.bankAccount)); }
			if(('tokenInformation' in obj) && (obj.tokenInformation != null)) { this.setTokenInformation(new TokenMaskedType(obj.tokenInformation)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTokenInformation(null);
		}
		logger.debug('Exit PaymentMaskedType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { return this.bankAccount; }
	setTokenInformation(p_tokenInformation) { this.tokenInformation = p_tokenInformation; }
	getTokenInformation() { return this.tokenInformation; }
}

module.exports.PaymentMaskedType = PaymentMaskedType;

class PaymentType {
	constructor(obj) {
		logger.debug('Enter PaymentType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
			if(('trackData' in obj) && (obj.trackData != null)) { this.setTrackData(new CreditCardTrackType(obj.trackData)); }
			if(('encryptedTrackData' in obj) && (obj.encryptedTrackData != null)) { this.setEncryptedTrackData(new EncryptedTrackDataType(obj.encryptedTrackData)); }
			if(('payPal' in obj) && (obj.payPal != null)) { this.setPayPal(new PayPalType(obj.payPal)); }
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
			if(('emv' in obj) && (obj.emv != null)) { this.setEmv(new PaymentEmvType(obj.emv)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
			this.setTrackData(null);
			this.setEncryptedTrackData(null);
			this.setPayPal(null);
			this.setOpaqueData(null);
			this.setEmv(null);
		}
		logger.debug('Exit PaymentType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { return this.bankAccount; }
	setTrackData(p_trackData) { this.trackData = p_trackData; }
	getTrackData() { return this.trackData; }
	setEncryptedTrackData(p_encryptedTrackData) { this.encryptedTrackData = p_encryptedTrackData; }
	getEncryptedTrackData() { return this.encryptedTrackData; }
	setPayPal(p_payPal) { this.payPal = p_payPal; }
	getPayPal() { return this.payPal; }
	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { return this.opaqueData; }
	setEmv(p_emv) { this.emv = p_emv; }
	getEmv() { return this.emv; }
}

module.exports.PaymentType = PaymentType;

class ArrayOfFDSFilter {
	constructor(obj) {
		logger.debug('Enter ArrayOfFDSFilter constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var FDSFilterList = [];
				obj.forEach(function(item) {FDSFilterList.push(new FDSFilterType(item));}); 
				this.setFDSFilter(FDSFilterList);
			}
		}
		else {
			this.setFDSFilter(null);
		}
		logger.debug('Exit ArrayOfFDSFilter constructor');
	}

	setFDSFilter(p_FDSFilter) { this.FDSFilter = p_FDSFilter; }
	getFDSFilter() { return this.FDSFilter; }
}

module.exports.ArrayOfFDSFilter = ArrayOfFDSFilter;

class ArrayOfCustomerPaymentProfileListItemType {
	constructor(obj) {
		logger.debug('Enter ArrayOfCustomerPaymentProfileListItemType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var paymentProfileList = [];
				obj.forEach(function(item) {paymentProfileList.push(new CustomerPaymentProfileListItemType(item));}); 
				this.setPaymentProfile(paymentProfileList);
			}
		}
		else {
			this.setPaymentProfile(null);
		}
		logger.debug('Exit ArrayOfCustomerPaymentProfileListItemType constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
}

module.exports.ArrayOfCustomerPaymentProfileListItemType = ArrayOfCustomerPaymentProfileListItemType;

class MessagesType {
	constructor(obj) {
		logger.debug('Enter MessagesType constructor');
		if(arguments.length == 1) {
			if(('resultCode' in obj) && (obj.resultCode != null)) { this.setResultCode(obj.resultCode); }
			if((obj.message != undefined) && (obj.message != null)) {
				var messageList = [];
				obj.message.forEach(function(item) {messageList.push(new MessagesType.Message(item));}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setResultCode(null);
			this.setMessage(null);
		}
		logger.debug('Exit MessagesType constructor');
	}

	setResultCode(p_resultCode) { this.resultCode = p_resultCode; }
	getResultCode() { return this.resultCode; }
	setMessage(p_message) { this.message = p_message; }
	getMessage() { return this.message; }
}

module.exports.MessagesType = MessagesType;

class SubscriptionIdList {
	constructor(obj) {
		logger.debug('Enter SubscriptionIdList constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var subscriptionIdList = [];
				obj.forEach(function(item) {subscriptionIdList.push(new String(item));}); 
				this.setSubscriptionId(subscriptionIdList);
			}
		}
		else {
			this.setSubscriptionId(null);
		}
		logger.debug('Exit SubscriptionIdList constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
}

module.exports.SubscriptionIdList = SubscriptionIdList;

class SubscriptionDetail {
	constructor(obj) {
		logger.debug('Enter SubscriptionDetail constructor');
		if(arguments.length == 1) {
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
			if(('createTimeStampUTC' in obj) && (obj.createTimeStampUTC != null)) { this.setCreateTimeStampUTC(obj.createTimeStampUTC); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('totalOccurrences' in obj) && (obj.totalOccurrences != null)) { this.setTotalOccurrences(obj.totalOccurrences); }
			if(('pastOccurrences' in obj) && (obj.pastOccurrences != null)) { this.setPastOccurrences(obj.pastOccurrences); }
			if(('paymentMethod' in obj) && (obj.paymentMethod != null)) { this.setPaymentMethod(obj.paymentMethod); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('invoice' in obj) && (obj.invoice != null)) { this.setInvoice(obj.invoice); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingProfileId' in obj) && (obj.customerShippingProfileId != null)) { this.setCustomerShippingProfileId(obj.customerShippingProfileId); }
		}
		else {
			this.setId(null);
			this.setName(null);
			this.setStatus(null);
			this.setCreateTimeStampUTC(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setTotalOccurrences(null);
			this.setPastOccurrences(null);
			this.setPaymentMethod(null);
			this.setAccountNumber(null);
			this.setInvoice(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingProfileId(null);
		}
		logger.debug('Exit SubscriptionDetail constructor');
	}

	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setStatus(p_status) { this.status = p_status; }
	getStatus() { return this.status; }
	setCreateTimeStampUTC(p_createTimeStampUTC) { this.createTimeStampUTC = p_createTimeStampUTC; }
	getCreateTimeStampUTC() { return this.createTimeStampUTC; }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { return this.lastName; }
	setTotalOccurrences(p_totalOccurrences) { this.totalOccurrences = p_totalOccurrences; }
	getTotalOccurrences() { return this.totalOccurrences; }
	setPastOccurrences(p_pastOccurrences) { this.pastOccurrences = p_pastOccurrences; }
	getPastOccurrences() { return this.pastOccurrences; }
	setPaymentMethod(p_paymentMethod) { this.paymentMethod = p_paymentMethod; }
	getPaymentMethod() { return this.paymentMethod; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setInvoice(p_invoice) { this.invoice = p_invoice; }
	getInvoice() { return this.invoice; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { return this.currencyCode; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingProfileId(p_customerShippingProfileId) { this.customerShippingProfileId = p_customerShippingProfileId; }
	getCustomerShippingProfileId() { return this.customerShippingProfileId; }
}

module.exports.SubscriptionDetail = SubscriptionDetail;

class ArrayOfBatchDetailsType {
	constructor(obj) {
		logger.debug('Enter ArrayOfBatchDetailsType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var batchList = [];
				obj.forEach(function(item) {batchList.push(new BatchDetailsType(item));}); 
				this.setBatch(batchList);
			}
		}
		else {
			this.setBatch(null);
		}
		logger.debug('Exit ArrayOfBatchDetailsType constructor');
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { return this.batch; }
}

module.exports.ArrayOfBatchDetailsType = ArrayOfBatchDetailsType;

class DriversLicenseMaskedType {
	constructor(obj) {
		logger.debug('Enter DriversLicenseMaskedType constructor');
		if(arguments.length == 1) {
			if(('number' in obj) && (obj.number != null)) { this.setNumber(obj.number); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('dateOfBirth' in obj) && (obj.dateOfBirth != null)) { this.setDateOfBirth(obj.dateOfBirth); }
		}
		else {
			this.setNumber(null);
			this.setState(null);
			this.setDateOfBirth(null);
		}
		logger.debug('Exit DriversLicenseMaskedType constructor');
	}

	setNumber(p_number) { this.number = p_number; }
	getNumber() { return this.number; }
	setState(p_state) { this.state = p_state; }
	getState() { return this.state; }
	setDateOfBirth(p_dateOfBirth) { this.dateOfBirth = p_dateOfBirth; }
	getDateOfBirth() { return this.dateOfBirth; }
}

module.exports.DriversLicenseMaskedType = DriversLicenseMaskedType;

class ArrayOfPermissionType {
	constructor(obj) {
		logger.debug('Enter ArrayOfPermissionType constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var permissionList = [];
				obj.forEach(function(item) {permissionList.push(new PermissionType(item));}); 
				this.setPermission(permissionList);
			}
		}
		else {
			this.setPermission(null);
		}
		logger.debug('Exit ArrayOfPermissionType constructor');
	}

	setPermission(p_permission) { this.permission = p_permission; }
	getPermission() { return this.permission; }
}

module.exports.ArrayOfPermissionType = ArrayOfPermissionType;

class ExtendedAmountType {
	constructor(obj) {
		logger.debug('Enter ExtendedAmountType constructor');
		if(arguments.length == 1) {
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setAmount(null);
			this.setName(null);
			this.setDescription(null);
		}
		logger.debug('Exit ExtendedAmountType constructor');
	}

	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
}

module.exports.ExtendedAmountType = ExtendedAmountType;

class ArrayOfSetting {
	constructor(obj) {
		logger.debug('Enter ArrayOfSetting constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var settingList = [];
				obj.forEach(function(item) {settingList.push(new SettingType(item));}); 
				this.setSetting(settingList);
			}
		}
		else {
			this.setSetting(null);
		}
		logger.debug('Exit ArrayOfSetting constructor');
	}

	setSetting(p_setting) { this.setting = p_setting; }
	getSetting() { return this.setting; }
}

module.exports.ArrayOfSetting = ArrayOfSetting;

class LineItemType {
	constructor(obj) {
		logger.debug('Enter LineItemType constructor');
		if(arguments.length == 1) {
			if(('itemId' in obj) && (obj.itemId != null)) { this.setItemId(obj.itemId); }
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('quantity' in obj) && (obj.quantity != null)) { this.setQuantity(obj.quantity); }
			if(('unitPrice' in obj) && (obj.unitPrice != null)) { this.setUnitPrice(obj.unitPrice); }
			if(('taxable' in obj) && (obj.taxable != null)) { this.setTaxable(obj.taxable); }
		}
		else {
			this.setItemId(null);
			this.setName(null);
			this.setDescription(null);
			this.setQuantity(null);
			this.setUnitPrice(null);
			this.setTaxable(null);
		}
		logger.debug('Exit LineItemType constructor');
	}

	setItemId(p_itemId) { this.itemId = p_itemId; }
	getItemId() { return this.itemId; }
	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
	setQuantity(p_quantity) { this.quantity = p_quantity; }
	getQuantity() { return this.quantity; }
	setUnitPrice(p_unitPrice) { this.unitPrice = p_unitPrice; }
	getUnitPrice() { return this.unitPrice; }
	setTaxable(p_taxable) { this.taxable = p_taxable; }
	getTaxable() { return this.taxable; }
}

module.exports.LineItemType = LineItemType;

class WebCheckOutDataType {
	constructor(obj) {
		logger.debug('Enter WebCheckOutDataType constructor');
		if(arguments.length == 1) {
			if(('type' in obj) && (obj.type != null)) { this.setType(obj.type); }
			if(('id' in obj) && (obj.id != null)) { this.setId(obj.id); }
			if(('token' in obj) && (obj.token != null)) { this.setToken(new WebCheckOutDataType.Token(obj.token)); }
		}
		else {
			this.setType(null);
			this.setId(null);
			this.setToken(null);
		}
		logger.debug('Exit WebCheckOutDataType constructor');
	}

	setType(p_type) { this.type = p_type; }
	getType() { return this.type; }
	setId(p_id) { this.id = p_id; }
	getId() { return this.id; }
	setToken(p_token) { this.token = p_token; }
	getToken() { return this.token; }
}

module.exports.WebCheckOutDataType = WebCheckOutDataType;

class TransRetailInfoType {
	constructor(obj) {
		logger.debug('Enter TransRetailInfoType constructor');
		if(arguments.length == 1) {
			if(('marketType' in obj) && (obj.marketType != null)) { this.setMarketType(obj.marketType); }
			if(('deviceType' in obj) && (obj.deviceType != null)) { this.setDeviceType(obj.deviceType); }
			if(('customerSignature' in obj) && (obj.customerSignature != null)) { this.setCustomerSignature(obj.customerSignature); }
		}
		else {
			this.setMarketType(null);
			this.setDeviceType(null);
			this.setCustomerSignature(null);
		}
		logger.debug('Exit TransRetailInfoType constructor');
	}

	setMarketType(p_marketType) { this.marketType = p_marketType; }
	getMarketType() { return this.marketType; }
	setDeviceType(p_deviceType) { this.deviceType = p_deviceType; }
	getDeviceType() { return this.deviceType; }
	setCustomerSignature(p_customerSignature) { this.customerSignature = p_customerSignature; }
	getCustomerSignature() { return this.customerSignature; }
}

module.exports.TransRetailInfoType = TransRetailInfoType;

class ArrayOfNumericString {
	constructor(obj) {
		logger.debug('Enter ArrayOfNumericString constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var numericStringList = [];
				obj.forEach(function(item) {numericStringList.push(new String(item));}); 
				this.setNumericString(numericStringList);
			}
		}
		else {
			this.setNumericString(null);
		}
		logger.debug('Exit ArrayOfNumericString constructor');
	}

	setNumericString(p_numericString) { this.numericString = p_numericString; }
	getNumericString() { return this.numericString; }
}

module.exports.ArrayOfNumericString = ArrayOfNumericString;

class KeyManagementScheme {
	constructor(obj) {
		logger.debug('Enter KeyManagementScheme constructor');
		if(arguments.length == 1) {
			if(('DUKPT' in obj) && (obj.DUKPT != null)) { this.setDUKPT(new KeyManagementScheme.DUKPT(obj.DUKPT)); }
		}
		else {
			this.setDUKPT(null);
		}
		logger.debug('Exit KeyManagementScheme constructor');
	}

	setDUKPT(p_DUKPT) { this.DUKPT = p_DUKPT; }
	getDUKPT() { return this.DUKPT; }
}

module.exports.KeyManagementScheme = KeyManagementScheme;

class ANetApiRequest {
	constructor(obj) {
		logger.debug('Enter ANetApiRequest constructor');
		if(arguments.length == 1) {
			if(('merchantAuthentication' in obj) && (obj.merchantAuthentication != null)) { this.setMerchantAuthentication(new MerchantAuthenticationType(obj.merchantAuthentication)); }
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
		}
		else {
			this.setMerchantAuthentication(null);
			this.setRefId(null);
		}
		logger.debug('Exit ANetApiRequest constructor');
	}

	setMerchantAuthentication(p_merchantAuthentication) { this.merchantAuthentication = p_merchantAuthentication; }
	getMerchantAuthentication() { return this.merchantAuthentication; }
	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { return this.refId; }
}

module.exports.ANetApiRequest = ANetApiRequest;

class PaymentSimpleType {
	constructor(obj) {
		logger.debug('Enter PaymentSimpleType constructor');
		if(arguments.length == 1) {
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardSimpleType(obj.creditCard)); }
			if(('bankAccount' in obj) && (obj.bankAccount != null)) { this.setBankAccount(new BankAccountType(obj.bankAccount)); }
		}
		else {
			this.setCreditCard(null);
			this.setBankAccount(null);
		}
		logger.debug('Exit PaymentSimpleType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { return this.creditCard; }
	setBankAccount(p_bankAccount) { this.bankAccount = p_bankAccount; }
	getBankAccount() { return this.bankAccount; }
}

module.exports.PaymentSimpleType = PaymentSimpleType;

class PaymentEmvType {
	constructor(obj) {
		logger.debug('Enter PaymentEmvType constructor');
		if(arguments.length == 1) {
			if(('emvData' in obj) && (obj.emvData != null)) { this.setEmvData(obj.emvData); }
			if(('emvDescriptor' in obj) && (obj.emvDescriptor != null)) { this.setEmvDescriptor(obj.emvDescriptor); }
			if(('emvVersion' in obj) && (obj.emvVersion != null)) { this.setEmvVersion(obj.emvVersion); }
		}
		else {
			this.setEmvData(null);
			this.setEmvDescriptor(null);
			this.setEmvVersion(null);
		}
		logger.debug('Exit PaymentEmvType constructor');
	}

	setEmvData(p_emvData) { this.emvData = p_emvData; }
	getEmvData() { return this.emvData; }
	setEmvDescriptor(p_emvDescriptor) { this.emvDescriptor = p_emvDescriptor; }
	getEmvDescriptor() { return this.emvDescriptor; }
	setEmvVersion(p_emvVersion) { this.emvVersion = p_emvVersion; }
	getEmvVersion() { return this.emvVersion; }
}

module.exports.PaymentEmvType = PaymentEmvType;

class TransactionRequestType {
	constructor(obj) {
		logger.debug('Enter TransactionRequestType constructor');
		if(arguments.length == 1) {
			if(('transactionType' in obj) && (obj.transactionType != null)) { this.setTransactionType(obj.transactionType); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('currencyCode' in obj) && (obj.currencyCode != null)) { this.setCurrencyCode(obj.currencyCode); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfilePaymentType(obj.profile)); }
			if(('solution' in obj) && (obj.solution != null)) { this.setSolution(new SolutionType(obj.solution)); }
			if(('callId' in obj) && (obj.callId != null)) { this.setCallId(obj.callId); }
			if(('terminalNumber' in obj) && (obj.terminalNumber != null)) { this.setTerminalNumber(obj.terminalNumber); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('refTransId' in obj) && (obj.refTransId != null)) { this.setRefTransId(obj.refTransId); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
			if(('lineItems' in obj) && (obj.lineItems != null)) { this.setLineItems(new ArrayOfLineItem(obj.lineItems)); }
			if(('tax' in obj) && (obj.tax != null)) { this.setTax(new ExtendedAmountType(obj.tax)); }
			if(('duty' in obj) && (obj.duty != null)) { this.setDuty(new ExtendedAmountType(obj.duty)); }
			if(('shipping' in obj) && (obj.shipping != null)) { this.setShipping(new ExtendedAmountType(obj.shipping)); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('poNumber' in obj) && (obj.poNumber != null)) { this.setPoNumber(obj.poNumber); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerDataType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('customerIP' in obj) && (obj.customerIP != null)) { this.setCustomerIP(obj.customerIP); }
			if(('cardholderAuthentication' in obj) && (obj.cardholderAuthentication != null)) { this.setCardholderAuthentication(new CcAuthenticationType(obj.cardholderAuthentication)); }
			if(('retail' in obj) && (obj.retail != null)) { this.setRetail(new TransRetailInfoType(obj.retail)); }
			if(('employeeId' in obj) && (obj.employeeId != null)) { this.setEmployeeId(obj.employeeId); }
			if(('transactionSettings' in obj) && (obj.transactionSettings != null)) { this.setTransactionSettings(new ArrayOfSetting(obj.transactionSettings)); }
			if(('userFields' in obj) && (obj.userFields != null)) { this.setUserFields(new TransactionRequestType.UserFields(obj.userFields)); }
		}
		else {
			this.setTransactionType(null);
			this.setAmount(null);
			this.setCurrencyCode(null);
			this.setPayment(null);
			this.setProfile(null);
			this.setSolution(null);
			this.setCallId(null);
			this.setTerminalNumber(null);
			this.setAuthCode(null);
			this.setRefTransId(null);
			this.setSplitTenderId(null);
			this.setOrder(null);
			this.setLineItems(null);
			this.setTax(null);
			this.setDuty(null);
			this.setShipping(null);
			this.setTaxExempt(null);
			this.setPoNumber(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setCustomerIP(null);
			this.setCardholderAuthentication(null);
			this.setRetail(null);
			this.setEmployeeId(null);
			this.setTransactionSettings(null);
			this.setUserFields(null);
		}
		logger.debug('Exit TransactionRequestType constructor');
	}

	setTransactionType(p_transactionType) { this.transactionType = p_transactionType; }
	getTransactionType() { return this.transactionType; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setCurrencyCode(p_currencyCode) { this.currencyCode = p_currencyCode; }
	getCurrencyCode() { return this.currencyCode; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
	setSolution(p_solution) { this.solution = p_solution; }
	getSolution() { return this.solution; }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId() { return this.callId; }
	setTerminalNumber(p_terminalNumber) { this.terminalNumber = p_terminalNumber; }
	getTerminalNumber() { return this.terminalNumber; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { return this.authCode; }
	setRefTransId(p_refTransId) { this.refTransId = p_refTransId; }
	getRefTransId() { return this.refTransId; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { return this.splitTenderId; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
	setLineItems(p_lineItems) { this.lineItems = p_lineItems; }
	getLineItems() { return this.lineItems; }
	setTax(p_tax) { this.tax = p_tax; }
	getTax() { return this.tax; }
	setDuty(p_duty) { this.duty = p_duty; }
	getDuty() { return this.duty; }
	setShipping(p_shipping) { this.shipping = p_shipping; }
	getShipping() { return this.shipping; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { return this.taxExempt; }
	setPoNumber(p_poNumber) { this.poNumber = p_poNumber; }
	getPoNumber() { return this.poNumber; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { return this.shipTo; }
	setCustomerIP(p_customerIP) { this.customerIP = p_customerIP; }
	getCustomerIP() { return this.customerIP; }
	setCardholderAuthentication(p_cardholderAuthentication) { this.cardholderAuthentication = p_cardholderAuthentication; }
	getCardholderAuthentication() { return this.cardholderAuthentication; }
	setRetail(p_retail) { this.retail = p_retail; }
	getRetail() { return this.retail; }
	setEmployeeId(p_employeeId) { this.employeeId = p_employeeId; }
	getEmployeeId() { return this.employeeId; }
	setTransactionSettings(p_transactionSettings) { this.transactionSettings = p_transactionSettings; }
	getTransactionSettings() { return this.transactionSettings; }
	setUserFields(p_userFields) { this.userFields = p_userFields; }
	getUserFields() { return this.userFields; }
}

module.exports.TransactionRequestType = TransactionRequestType;

class ArrayOfLong {
	constructor(obj) {
		logger.debug('Enter ArrayOfLong constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var longList = [];
				obj.forEach(function(item) {longList.push(new (item));}); 
				this.setLong(longList);
			}
		}
		else {
			this.setLong(null);
		}
		logger.debug('Exit ArrayOfLong constructor');
	}

	setLong(p_long) { this.long = p_long; }
	getLong() { return this.long; }
}

module.exports.ArrayOfLong = ArrayOfLong;

class CustomerPaymentProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileBaseType constructor');
		if(arguments.length == 1) {
			if(('customerType' in obj) && (obj.customerType != null)) { this.setCustomerType(obj.customerType); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
		}
		else {
			this.setCustomerType(null);
			this.setBillTo(null);
		}
		logger.debug('Exit CustomerPaymentProfileBaseType constructor');
	}

	setCustomerType(p_customerType) { this.customerType = p_customerType; }
	getCustomerType() { return this.customerType; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { return this.billTo; }
}

module.exports.CustomerPaymentProfileBaseType = CustomerPaymentProfileBaseType;

class SecurePaymentContainerErrorType {
	constructor(obj) {
		logger.debug('Enter SecurePaymentContainerErrorType constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit SecurePaymentContainerErrorType constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
}

module.exports.SecurePaymentContainerErrorType = SecurePaymentContainerErrorType;

class BankAccountMaskedType {
	constructor(obj) {
		logger.debug('Enter BankAccountMaskedType constructor');
		if(arguments.length == 1) {
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('routingNumber' in obj) && (obj.routingNumber != null)) { this.setRoutingNumber(obj.routingNumber); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('nameOnAccount' in obj) && (obj.nameOnAccount != null)) { this.setNameOnAccount(obj.nameOnAccount); }
			if(('echeckType' in obj) && (obj.echeckType != null)) { this.setEcheckType(obj.echeckType); }
			if(('bankName' in obj) && (obj.bankName != null)) { this.setBankName(obj.bankName); }
		}
		else {
			this.setAccountType(null);
			this.setRoutingNumber(null);
			this.setAccountNumber(null);
			this.setNameOnAccount(null);
			this.setEcheckType(null);
			this.setBankName(null);
		}
		logger.debug('Exit BankAccountMaskedType constructor');
	}

	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setRoutingNumber(p_routingNumber) { this.routingNumber = p_routingNumber; }
	getRoutingNumber() { return this.routingNumber; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setNameOnAccount(p_nameOnAccount) { this.nameOnAccount = p_nameOnAccount; }
	getNameOnAccount() { return this.nameOnAccount; }
	setEcheckType(p_echeckType) { this.echeckType = p_echeckType; }
	getEcheckType() { return this.echeckType; }
	setBankName(p_bankName) { this.bankName = p_bankName; }
	getBankName() { return this.bankName; }
}

module.exports.BankAccountMaskedType = BankAccountMaskedType;

class ArrayOfLineItem {
	constructor(obj) {
		logger.debug('Enter ArrayOfLineItem constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var lineItemList = [];
				obj.forEach(function(item) {lineItemList.push(new LineItemType(item));}); 
				this.setLineItem(lineItemList);
			}
		}
		else {
			this.setLineItem(null);
		}
		logger.debug('Exit ArrayOfLineItem constructor');
	}

	setLineItem(p_lineItem) { this.lineItem = p_lineItem; }
	getLineItem() { return this.lineItem; }
}

module.exports.ArrayOfLineItem = ArrayOfLineItem;

class CustomerPaymentProfileSorting {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileSorting constructor');
		if(arguments.length == 1) {
			if(('orderBy' in obj) && (obj.orderBy != null)) { this.setOrderBy(obj.orderBy); }
			if(('orderDescending' in obj) && (obj.orderDescending != null)) { this.setOrderDescending(obj.orderDescending); }
		}
		else {
			this.setOrderBy(null);
			this.setOrderDescending(null);
		}
		logger.debug('Exit CustomerPaymentProfileSorting constructor');
	}

	setOrderBy(p_orderBy) { this.orderBy = p_orderBy; }
	getOrderBy() { return this.orderBy; }
	setOrderDescending(p_orderDescending) { this.orderDescending = p_orderDescending; }
	getOrderDescending() { return this.orderDescending; }
}

module.exports.CustomerPaymentProfileSorting = CustomerPaymentProfileSorting;

class CreateProfileResponse {
	constructor(obj) {
		logger.debug('Enter CreateProfileResponse constructor');
		if(arguments.length == 1) {
			if(('messages' in obj) && (obj.messages != null)) { this.setMessages(new MessagesType(obj.messages)); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileIdList' in obj) && (obj.customerPaymentProfileIdList != null)) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(('customerShippingAddressIdList' in obj) && (obj.customerShippingAddressIdList != null)) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
		}
		else {
			this.setMessages(null);
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
		}
		logger.debug('Exit CreateProfileResponse constructor');
	}

	setMessages(p_messages) { this.messages = p_messages; }
	getMessages() { return this.messages; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList() { return this.customerPaymentProfileIdList; }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList() { return this.customerShippingAddressIdList; }
}

module.exports.CreateProfileResponse = CreateProfileResponse;

class TokenMaskedType {
	constructor(obj) {
		logger.debug('Enter TokenMaskedType constructor');
		if(arguments.length == 1) {
			if(('tokenSource' in obj) && (obj.tokenSource != null)) { this.setTokenSource(obj.tokenSource); }
			if(('tokenNumber' in obj) && (obj.tokenNumber != null)) { this.setTokenNumber(obj.tokenNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
		}
		else {
			this.setTokenSource(null);
			this.setTokenNumber(null);
			this.setExpirationDate(null);
		}
		logger.debug('Exit TokenMaskedType constructor');
	}

	setTokenSource(p_tokenSource) { this.tokenSource = p_tokenSource; }
	getTokenSource() { return this.tokenSource; }
	setTokenNumber(p_tokenNumber) { this.tokenNumber = p_tokenNumber; }
	getTokenNumber() { return this.tokenNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { return this.expirationDate; }
}

module.exports.TokenMaskedType = TokenMaskedType;

class ArrayOfSubscription {
	constructor(obj) {
		logger.debug('Enter ArrayOfSubscription constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var subscriptionDetailList = [];
				obj.forEach(function(item) {subscriptionDetailList.push(new SubscriptionDetail(item));}); 
				this.setSubscriptionDetail(subscriptionDetailList);
			}
		}
		else {
			this.setSubscriptionDetail(null);
		}
		logger.debug('Exit ArrayOfSubscription constructor');
	}

	setSubscriptionDetail(p_subscriptionDetail) { this.subscriptionDetail = p_subscriptionDetail; }
	getSubscriptionDetail() { return this.subscriptionDetail; }
}

module.exports.ArrayOfSubscription = ArrayOfSubscription;

class AuResponseType {
	constructor(obj) {
		logger.debug('Enter AuResponseType constructor');
		if(arguments.length == 1) {
			if(('auReasonCode' in obj) && (obj.auReasonCode != null)) { this.setAuReasonCode(obj.auReasonCode); }
			if(('profileCount' in obj) && (obj.profileCount != null)) { this.setProfileCount(obj.profileCount); }
			if(('reasonDescription' in obj) && (obj.reasonDescription != null)) { this.setReasonDescription(obj.reasonDescription); }
		}
		else {
			this.setAuReasonCode(null);
			this.setProfileCount(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuResponseType constructor');
	}

	setAuReasonCode(p_auReasonCode) { this.auReasonCode = p_auReasonCode; }
	getAuReasonCode() { return this.auReasonCode; }
	setProfileCount(p_profileCount) { this.profileCount = p_profileCount; }
	getProfileCount() { return this.profileCount; }
	setReasonDescription(p_reasonDescription) { this.reasonDescription = p_reasonDescription; }
	getReasonDescription() { return this.reasonDescription; }
}

module.exports.AuResponseType = AuResponseType;

class OpaqueDataType {
	constructor(obj) {
		logger.debug('Enter OpaqueDataType constructor');
		if(arguments.length == 1) {
			if(('dataDescriptor' in obj) && (obj.dataDescriptor != null)) { this.setDataDescriptor(obj.dataDescriptor); }
			if(('dataValue' in obj) && (obj.dataValue != null)) { this.setDataValue(obj.dataValue); }
			if(('dataKey' in obj) && (obj.dataKey != null)) { this.setDataKey(obj.dataKey); }
		}
		else {
			this.setDataDescriptor(null);
			this.setDataValue(null);
			this.setDataKey(null);
		}
		logger.debug('Exit OpaqueDataType constructor');
	}

	setDataDescriptor(p_dataDescriptor) { this.dataDescriptor = p_dataDescriptor; }
	getDataDescriptor() { return this.dataDescriptor; }
	setDataValue(p_dataValue) { this.dataValue = p_dataValue; }
	getDataValue() { return this.dataValue; }
	setDataKey(p_dataKey) { this.dataKey = p_dataKey; }
	getDataKey() { return this.dataKey; }
}

module.exports.OpaqueDataType = OpaqueDataType;

class CcAuthenticationType {
	constructor(obj) {
		logger.debug('Enter CcAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('authenticationIndicator' in obj) && (obj.authenticationIndicator != null)) { this.setAuthenticationIndicator(obj.authenticationIndicator); }
			if(('cardholderAuthenticationValue' in obj) && (obj.cardholderAuthenticationValue != null)) { this.setCardholderAuthenticationValue(obj.cardholderAuthenticationValue); }
		}
		else {
			this.setAuthenticationIndicator(null);
			this.setCardholderAuthenticationValue(null);
		}
		logger.debug('Exit CcAuthenticationType constructor');
	}

	setAuthenticationIndicator(p_authenticationIndicator) { this.authenticationIndicator = p_authenticationIndicator; }
	getAuthenticationIndicator() { return this.authenticationIndicator; }
	setCardholderAuthenticationValue(p_cardholderAuthenticationValue) { this.cardholderAuthenticationValue = p_cardholderAuthenticationValue; }
	getCardholderAuthenticationValue() { return this.cardholderAuthenticationValue; }
}

module.exports.CcAuthenticationType = CcAuthenticationType;

class MerchantAuthenticationType {
	constructor(obj) {
		logger.debug('Enter MerchantAuthenticationType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('transactionKey' in obj) && (obj.transactionKey != null)) { this.setTransactionKey(obj.transactionKey); }
			if(('sessionToken' in obj) && (obj.sessionToken != null)) { this.setSessionToken(obj.sessionToken); }
			if(('password' in obj) && (obj.password != null)) { this.setPassword(obj.password); }
			if(('impersonationAuthentication' in obj) && (obj.impersonationAuthentication != null)) { this.setImpersonationAuthentication(new ImpersonationAuthenticationType(obj.impersonationAuthentication)); }
			if(('fingerPrint' in obj) && (obj.fingerPrint != null)) { this.setFingerPrint(new FingerPrintType(obj.fingerPrint)); }
			if(('clientKey' in obj) && (obj.clientKey != null)) { this.setClientKey(obj.clientKey); }
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
		}
		else {
			this.setName(null);
			this.setTransactionKey(null);
			this.setSessionToken(null);
			this.setPassword(null);
			this.setImpersonationAuthentication(null);
			this.setFingerPrint(null);
			this.setClientKey(null);
			this.setMobileDeviceId(null);
		}
		logger.debug('Exit MerchantAuthenticationType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setTransactionKey(p_transactionKey) { this.transactionKey = p_transactionKey; }
	getTransactionKey() { return this.transactionKey; }
	setSessionToken(p_sessionToken) { this.sessionToken = p_sessionToken; }
	getSessionToken() { return this.sessionToken; }
	setPassword(p_password) { this.password = p_password; }
	getPassword() { return this.password; }
	setImpersonationAuthentication(p_impersonationAuthentication) { this.impersonationAuthentication = p_impersonationAuthentication; }
	getImpersonationAuthentication() { return this.impersonationAuthentication; }
	setFingerPrint(p_fingerPrint) { this.fingerPrint = p_fingerPrint; }
	getFingerPrint() { return this.fingerPrint; }
	setClientKey(p_clientKey) { this.clientKey = p_clientKey; }
	getClientKey() { return this.clientKey; }
	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { return this.mobileDeviceId; }
}

module.exports.MerchantAuthenticationType = MerchantAuthenticationType;

class PermissionType {
	constructor(obj) {
		logger.debug('Enter PermissionType constructor');
		if(arguments.length == 1) {
			if(('permissionName' in obj) && (obj.permissionName != null)) { this.setPermissionName(obj.permissionName); }
		}
		else {
			this.setPermissionName(null);
		}
		logger.debug('Exit PermissionType constructor');
	}

	setPermissionName(p_permissionName) { this.permissionName = p_permissionName; }
	getPermissionName() { return this.permissionName; }
}

module.exports.PermissionType = PermissionType;

class ArrayOfString {
	constructor(obj) {
		logger.debug('Enter ArrayOfString constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var stringList = [];
				obj.forEach(function(item) {stringList.push(new String(item));}); 
				this.setString(stringList);
			}
		}
		else {
			this.setString(null);
		}
		logger.debug('Exit ArrayOfString constructor');
	}

	setString(p_string) { this.string = p_string; }
	getString() { return this.string; }
}

module.exports.ArrayOfString = ArrayOfString;

class ARBSubscriptionType {
	constructor(obj) {
		logger.debug('Enter ARBSubscriptionType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('paymentSchedule' in obj) && (obj.paymentSchedule != null)) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('trialAmount' in obj) && (obj.trialAmount != null)) { this.setTrialAmount(obj.trialAmount); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerType(obj.customer)); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new NameAndAddressType(obj.billTo)); }
			if(('shipTo' in obj) && (obj.shipTo != null)) { this.setShipTo(new NameAndAddressType(obj.shipTo)); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
		}
		else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setPayment(null);
			this.setOrder(null);
			this.setCustomer(null);
			this.setBillTo(null);
			this.setShipTo(null);
			this.setProfile(null);
		}
		logger.debug('Exit ARBSubscriptionType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule() { return this.paymentSchedule; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount() { return this.trialAmount; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { return this.customer; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { return this.billTo; }
	setShipTo(p_shipTo) { this.shipTo = p_shipTo; }
	getShipTo() { return this.shipTo; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
}

module.exports.ARBSubscriptionType = ARBSubscriptionType;

class CreditCardSimpleType {
	constructor(obj) {
		logger.debug('Enter CreditCardSimpleType constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
		}
		logger.debug('Exit CreditCardSimpleType constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { return this.expirationDate; }
}

module.exports.CreditCardSimpleType = CreditCardSimpleType;

class AuDetailsType {
	constructor(obj) {
		logger.debug('Enter AuDetailsType constructor');
		if(arguments.length == 1) {
			if(('customerProfileID' in obj) && (obj.customerProfileID != null)) { this.setCustomerProfileID(obj.customerProfileID); }
			if(('customerPaymentProfileID' in obj) && (obj.customerPaymentProfileID != null)) { this.setCustomerPaymentProfileID(obj.customerPaymentProfileID); }
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('updateTimeUTC' in obj) && (obj.updateTimeUTC != null)) { this.setUpdateTimeUTC(obj.updateTimeUTC); }
			if(('auReasonCode' in obj) && (obj.auReasonCode != null)) { this.setAuReasonCode(obj.auReasonCode); }
			if(('reasonDescription' in obj) && (obj.reasonDescription != null)) { this.setReasonDescription(obj.reasonDescription); }
		}
		else {
			this.setCustomerProfileID(null);
			this.setCustomerPaymentProfileID(null);
			this.setFirstName(null);
			this.setLastName(null);
			this.setUpdateTimeUTC(null);
			this.setAuReasonCode(null);
			this.setReasonDescription(null);
		}
		logger.debug('Exit AuDetailsType constructor');
	}

	setCustomerProfileID(p_customerProfileID) { this.customerProfileID = p_customerProfileID; }
	getCustomerProfileID() { return this.customerProfileID; }
	setCustomerPaymentProfileID(p_customerPaymentProfileID) { this.customerPaymentProfileID = p_customerPaymentProfileID; }
	getCustomerPaymentProfileID() { return this.customerPaymentProfileID; }
	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { return this.lastName; }
	setUpdateTimeUTC(p_updateTimeUTC) { this.updateTimeUTC = p_updateTimeUTC; }
	getUpdateTimeUTC() { return this.updateTimeUTC; }
	setAuReasonCode(p_auReasonCode) { this.auReasonCode = p_auReasonCode; }
	getAuReasonCode() { return this.auReasonCode; }
	setReasonDescription(p_reasonDescription) { this.reasonDescription = p_reasonDescription; }
	getReasonDescription() { return this.reasonDescription; }
}

module.exports.AuDetailsType = AuDetailsType;

class NameAndAddressType {
	constructor(obj) {
		logger.debug('Enter NameAndAddressType constructor');
		if(arguments.length == 1) {
			if(('firstName' in obj) && (obj.firstName != null)) { this.setFirstName(obj.firstName); }
			if(('lastName' in obj) && (obj.lastName != null)) { this.setLastName(obj.lastName); }
			if(('company' in obj) && (obj.company != null)) { this.setCompany(obj.company); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(obj.address); }
			if(('city' in obj) && (obj.city != null)) { this.setCity(obj.city); }
			if(('state' in obj) && (obj.state != null)) { this.setState(obj.state); }
			if(('zip' in obj) && (obj.zip != null)) { this.setZip(obj.zip); }
			if(('country' in obj) && (obj.country != null)) { this.setCountry(obj.country); }
		}
		else {
			this.setFirstName(null);
			this.setLastName(null);
			this.setCompany(null);
			this.setAddress(null);
			this.setCity(null);
			this.setState(null);
			this.setZip(null);
			this.setCountry(null);
		}
		logger.debug('Exit NameAndAddressType constructor');
	}

	setFirstName(p_firstName) { this.firstName = p_firstName; }
	getFirstName() { return this.firstName; }
	setLastName(p_lastName) { this.lastName = p_lastName; }
	getLastName() { return this.lastName; }
	setCompany(p_company) { this.company = p_company; }
	getCompany() { return this.company; }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { return this.address; }
	setCity(p_city) { this.city = p_city; }
	getCity() { return this.city; }
	setState(p_state) { this.state = p_state; }
	getState() { return this.state; }
	setZip(p_zip) { this.zip = p_zip; }
	getZip() { return this.zip; }
	setCountry(p_country) { this.country = p_country; }
	getCountry() { return this.country; }
}

module.exports.NameAndAddressType = NameAndAddressType;

class IsAliveRequest {
	getJSON() { 
		logger.debug('Enter IsAliveRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'isAliveRequest' : this };
		logger.debug('Exit IsAliveRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter IsAliveRequest constructor');
		if(arguments.length == 1) {
			if(('refId' in obj) && (obj.refId != null)) { this.setRefId(obj.refId); }
		}
		else {
			this.setRefId(null);
		}
		logger.debug('Exit IsAliveRequest constructor');
	}

	setRefId(p_refId) { this.refId = p_refId; }
	getRefId() { return this.refId; }
}

module.exports.IsAliveRequest = IsAliveRequest;

class ARBSubscriptionMaskedType {
	constructor(obj) {
		logger.debug('Enter ARBSubscriptionMaskedType constructor');
		if(arguments.length == 1) {
			if(('name' in obj) && (obj.name != null)) { this.setName(obj.name); }
			if(('paymentSchedule' in obj) && (obj.paymentSchedule != null)) { this.setPaymentSchedule(new PaymentScheduleType(obj.paymentSchedule)); }
			if(('amount' in obj) && (obj.amount != null)) { this.setAmount(obj.amount); }
			if(('trialAmount' in obj) && (obj.trialAmount != null)) { this.setTrialAmount(obj.trialAmount); }
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new SubscriptionCustomerProfileType(obj.profile)); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderType(obj.order)); }
		}
		else {
			this.setName(null);
			this.setPaymentSchedule(null);
			this.setAmount(null);
			this.setTrialAmount(null);
			this.setStatus(null);
			this.setProfile(null);
			this.setOrder(null);
		}
		logger.debug('Exit ARBSubscriptionMaskedType constructor');
	}

	setName(p_name) { this.name = p_name; }
	getName() { return this.name; }
	setPaymentSchedule(p_paymentSchedule) { this.paymentSchedule = p_paymentSchedule; }
	getPaymentSchedule() { return this.paymentSchedule; }
	setAmount(p_amount) { this.amount = p_amount; }
	getAmount() { return this.amount; }
	setTrialAmount(p_trialAmount) { this.trialAmount = p_trialAmount; }
	getTrialAmount() { return this.trialAmount; }
	setStatus(p_status) { this.status = p_status; }
	getStatus() { return this.status; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
}

module.exports.ARBSubscriptionMaskedType = ARBSubscriptionMaskedType;

class MobileDeviceType {
	constructor(obj) {
		logger.debug('Enter MobileDeviceType constructor');
		if(arguments.length == 1) {
			if(('mobileDeviceId' in obj) && (obj.mobileDeviceId != null)) { this.setMobileDeviceId(obj.mobileDeviceId); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('devicePlatform' in obj) && (obj.devicePlatform != null)) { this.setDevicePlatform(obj.devicePlatform); }
			if(('deviceActivation' in obj) && (obj.deviceActivation != null)) { this.setDeviceActivation(obj.deviceActivation); }
		}
		else {
			this.setMobileDeviceId(null);
			this.setDescription(null);
			this.setPhoneNumber(null);
			this.setDevicePlatform(null);
			this.setDeviceActivation(null);
		}
		logger.debug('Exit MobileDeviceType constructor');
	}

	setMobileDeviceId(p_mobileDeviceId) { this.mobileDeviceId = p_mobileDeviceId; }
	getMobileDeviceId() { return this.mobileDeviceId; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { return this.phoneNumber; }
	setDevicePlatform(p_devicePlatform) { this.devicePlatform = p_devicePlatform; }
	getDevicePlatform() { return this.devicePlatform; }
	setDeviceActivation(p_deviceActivation) { this.deviceActivation = p_deviceActivation; }
	getDeviceActivation() { return this.deviceActivation; }
}

module.exports.MobileDeviceType = MobileDeviceType;

class SettingType {
	constructor(obj) {
		logger.debug('Enter SettingType constructor');
		if(arguments.length == 1) {
			if(('settingName' in obj) && (obj.settingName != null)) { this.setSettingName(obj.settingName); }
			if(('settingValue' in obj) && (obj.settingValue != null)) { this.setSettingValue(obj.settingValue); }
		}
		else {
			this.setSettingName(null);
			this.setSettingValue(null);
		}
		logger.debug('Exit SettingType constructor');
	}

	setSettingName(p_settingName) { this.settingName = p_settingName; }
	getSettingName() { return this.settingName; }
	setSettingValue(p_settingValue) { this.settingValue = p_settingValue; }
	getSettingValue() { return this.settingValue; }
}

module.exports.SettingType = SettingType;

class CustomerPaymentProfileListItemType {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileListItemType constructor');
		if(arguments.length == 1) {
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('billTo' in obj) && (obj.billTo != null)) { this.setBillTo(new CustomerAddressType(obj.billTo)); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
		}
		else {
			this.setCustomerPaymentProfileId(null);
			this.setCustomerProfileId(null);
			this.setBillTo(null);
			this.setPayment(null);
		}
		logger.debug('Exit CustomerPaymentProfileListItemType constructor');
	}

	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setBillTo(p_billTo) { this.billTo = p_billTo; }
	getBillTo() { return this.billTo; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
}

module.exports.CustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType;

TransactionResponse.SecureAcceptance = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.SecureAcceptance constructor');
		if(arguments.length == 1) {
			if(('SecureAcceptanceUrl' in obj) && (obj.SecureAcceptanceUrl != null)) { this.setSecureAcceptanceUrl(obj.SecureAcceptanceUrl); }
			if(('PayerID' in obj) && (obj.PayerID != null)) { this.setPayerID(obj.PayerID); }
			if(('PayerEmail' in obj) && (obj.PayerEmail != null)) { this.setPayerEmail(obj.PayerEmail); }
		}
		else {
			this.setSecureAcceptanceUrl(null);
			this.setPayerID(null);
			this.setPayerEmail(null);
		}
		logger.debug('Exit TransactionResponse.SecureAcceptance constructor');
	}

	setSecureAcceptanceUrl(p_SecureAcceptanceUrl) { this.SecureAcceptanceUrl = p_SecureAcceptanceUrl; }
	getSecureAcceptanceUrl() { return this.SecureAcceptanceUrl; }
	setPayerID(p_PayerID) { this.PayerID = p_PayerID; }
	getPayerID() { return this.PayerID; }
	setPayerEmail(p_PayerEmail) { this.PayerEmail = p_PayerEmail; }
	getPayerEmail() { return this.PayerEmail; }
};

module.exports.TransactionResponse.SecureAcceptance = TransactionResponse.SecureAcceptance;

TransactionRequestType.UserFields = class {
	constructor(obj) {
		logger.debug('Enter TransactionRequestType.UserFields constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item));}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionRequestType.UserFields constructor');
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField() { return this.userField; }
};

module.exports.TransactionRequestType.UserFields = TransactionRequestType.UserFields;

KeyManagementScheme.DUKPT = class {
	constructor(obj) {
		logger.debug('Enter KeyManagementScheme.DUKPT constructor');
		if(arguments.length == 1) {
			if(('Operation' in obj) && (obj.Operation != null)) { this.setOperation(obj.Operation); }
			if(('Mode' in obj) && (obj.Mode != null)) { this.setMode(new KeyManagementScheme.DUKPT.Mode(obj.Mode)); }
			if(('DeviceInfo' in obj) && (obj.DeviceInfo != null)) { this.setDeviceInfo(new KeyManagementScheme.DUKPT.DeviceInfo(obj.DeviceInfo)); }
			if(('EncryptedData' in obj) && (obj.EncryptedData != null)) { this.setEncryptedData(new KeyManagementScheme.DUKPT.EncryptedData(obj.EncryptedData)); }
		}
		else {
			this.setOperation(null);
			this.setMode(null);
			this.setDeviceInfo(null);
			this.setEncryptedData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT constructor');
	}

	setOperation(p_Operation) { this.Operation = p_Operation; }
	getOperation() { return this.Operation; }
	setMode(p_Mode) { this.Mode = p_Mode; }
	getMode() { return this.Mode; }
	setDeviceInfo(p_DeviceInfo) { this.DeviceInfo = p_DeviceInfo; }
	getDeviceInfo() { return this.DeviceInfo; }
	setEncryptedData(p_EncryptedData) { this.EncryptedData = p_EncryptedData; }
	getEncryptedData() { return this.EncryptedData; }
};

module.exports.KeyManagementScheme.DUKPT = KeyManagementScheme.DUKPT;

TransactionResponse.EmvResponse = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.EmvResponse constructor');
		if(arguments.length == 1) {
			if(('tlvData' in obj) && (obj.tlvData != null)) { this.setTlvData(obj.tlvData); }
			if(('tags' in obj) && (obj.tags != null)) { this.setTags(new TransactionResponse.EmvResponse.Tags(obj.tags)); }
		}
		else {
			this.setTlvData(null);
			this.setTags(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse constructor');
	}

	setTlvData(p_tlvData) { this.tlvData = p_tlvData; }
	getTlvData() { return this.tlvData; }
	setTags(p_tags) { this.tags = p_tags; }
	getTags() { return this.tags; }
};

module.exports.TransactionResponse.EmvResponse = TransactionResponse.EmvResponse;

TransactionResponse.UserFields = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.UserFields constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var userFieldList = [];
				obj.forEach(function(item) {userFieldList.push(new UserField(item));}); 
				this.setUserField(userFieldList);
			}
		}
		else {
			this.setUserField(null);
		}
		logger.debug('Exit TransactionResponse.UserFields constructor');
	}

	setUserField(p_userField) { this.userField = p_userField; }
	getUserField() { return this.userField; }
};

module.exports.TransactionResponse.UserFields = TransactionResponse.UserFields;

TransactionResponse.Messages = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.Messages constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var messageList = [];
				obj.forEach(function(item) {messageList.push(new TransactionResponse.Messages.Message(item));}); 
				this.setMessage(messageList);
			}
		}
		else {
			this.setMessage(null);
		}
		logger.debug('Exit TransactionResponse.Messages constructor');
	}

	setMessage(p_message) { this.message = p_message; }
	getMessage() { return this.message; }
};

module.exports.TransactionResponse.Messages = TransactionResponse.Messages;

MessagesType.Message = class {
	constructor(obj) {
		logger.debug('Enter MessagesType.Message constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('text' in obj) && (obj.text != null)) { this.setText(obj.text); }
		}
		else {
			this.setCode(null);
			this.setText(null);
		}
		logger.debug('Exit MessagesType.Message constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { return this.code; }
	setText(p_text) { this.text = p_text; }
	getText() { return this.text; }
};

module.exports.MessagesType.Message = MessagesType.Message;

TransactionResponse.Errors = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.Errors constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var errorList = [];
				obj.forEach(function(item) {errorList.push(new TransactionResponse.Errors.Error(item));}); 
				this.setError(errorList);
			}
		}
		else {
			this.setError(null);
		}
		logger.debug('Exit TransactionResponse.Errors constructor');
	}

	setError(p_error) { this.error = p_error; }
	getError() { return this.error; }
};

module.exports.TransactionResponse.Errors = TransactionResponse.Errors;

TransactionDetailsType.EmvDetails = class {
	constructor(obj) {
		logger.debug('Enter TransactionDetailsType.EmvDetails constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var tagList = [];
				obj.forEach(function(item) {tagList.push(new TransactionDetailsType.EmvDetails.Tag(item));}); 
				this.setTag(tagList);
			}
		}
		else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails constructor');
	}

	setTag(p_tag) { this.tag = p_tag; }
	getTag() { return this.tag; }
};

module.exports.TransactionDetailsType.EmvDetails = TransactionDetailsType.EmvDetails;

WebCheckOutDataType.Token = class {
	constructor(obj) {
		logger.debug('Enter WebCheckOutDataType.Token constructor');
		if(arguments.length == 1) {
			if(('cardNumber' in obj) && (obj.cardNumber != null)) { this.setCardNumber(obj.cardNumber); }
			if(('expirationDate' in obj) && (obj.expirationDate != null)) { this.setExpirationDate(obj.expirationDate); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('zip' in obj) && (obj.zip != null)) { this.setZip(obj.zip); }
			if(('fullName' in obj) && (obj.fullName != null)) { this.setFullName(obj.fullName); }
		}
		else {
			this.setCardNumber(null);
			this.setExpirationDate(null);
			this.setCardCode(null);
			this.setZip(null);
			this.setFullName(null);
		}
		logger.debug('Exit WebCheckOutDataType.Token constructor');
	}

	setCardNumber(p_cardNumber) { this.cardNumber = p_cardNumber; }
	getCardNumber() { return this.cardNumber; }
	setExpirationDate(p_expirationDate) { this.expirationDate = p_expirationDate; }
	getExpirationDate() { return this.expirationDate; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { return this.cardCode; }
	setZip(p_zip) { this.zip = p_zip; }
	getZip() { return this.zip; }
	setFullName(p_fullName) { this.fullName = p_fullName; }
	getFullName() { return this.fullName; }
};

module.exports.WebCheckOutDataType.Token = WebCheckOutDataType.Token;

TransactionResponse.PrePaidCard = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.PrePaidCard constructor');
		if(arguments.length == 1) {
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('approvedAmount' in obj) && (obj.approvedAmount != null)) { this.setApprovedAmount(obj.approvedAmount); }
			if(('balanceOnCard' in obj) && (obj.balanceOnCard != null)) { this.setBalanceOnCard(obj.balanceOnCard); }
		}
		else {
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
		logger.debug('Exit TransactionResponse.PrePaidCard constructor');
	}

	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { return this.requestedAmount; }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount() { return this.approvedAmount; }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard() { return this.balanceOnCard; }
};

module.exports.TransactionResponse.PrePaidCard = TransactionResponse.PrePaidCard;

TransactionResponse.SplitTenderPayments = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.SplitTenderPayments constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var splitTenderPaymentList = [];
				obj.forEach(function(item) {splitTenderPaymentList.push(new TransactionResponse.SplitTenderPayments.SplitTenderPayment(item));}); 
				this.setSplitTenderPayment(splitTenderPaymentList);
			}
		}
		else {
			this.setSplitTenderPayment(null);
		}
		logger.debug('Exit TransactionResponse.SplitTenderPayments constructor');
	}

	setSplitTenderPayment(p_splitTenderPayment) { this.splitTenderPayment = p_splitTenderPayment; }
	getSplitTenderPayment() { return this.splitTenderPayment; }
};

module.exports.TransactionResponse.SplitTenderPayments = TransactionResponse.SplitTenderPayments;

PaymentScheduleType.Interval = class {
	constructor(obj) {
		logger.debug('Enter PaymentScheduleType.Interval constructor');
		if(arguments.length == 1) {
			if(('length' in obj) && (obj.length != null)) { this.setLength(obj.length); }
			if(('unit' in obj) && (obj.unit != null)) { this.setUnit(obj.unit); }
		}
		else {
			this.setLength(null);
			this.setUnit(null);
		}
		logger.debug('Exit PaymentScheduleType.Interval constructor');
	}

	setLength(p_length) { this.length = p_length; }
	getLength() { return this.length; }
	setUnit(p_unit) { this.unit = p_unit; }
	getUnit() { return this.unit; }
};

module.exports.PaymentScheduleType.Interval = PaymentScheduleType.Interval;

TransactionResponse.SplitTenderPayments.SplitTenderPayment = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
		if(arguments.length == 1) {
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('responseCode' in obj) && (obj.responseCode != null)) { this.setResponseCode(obj.responseCode); }
			if(('responseToCustomer' in obj) && (obj.responseToCustomer != null)) { this.setResponseToCustomer(obj.responseToCustomer); }
			if(('authCode' in obj) && (obj.authCode != null)) { this.setAuthCode(obj.authCode); }
			if(('accountNumber' in obj) && (obj.accountNumber != null)) { this.setAccountNumber(obj.accountNumber); }
			if(('accountType' in obj) && (obj.accountType != null)) { this.setAccountType(obj.accountType); }
			if(('requestedAmount' in obj) && (obj.requestedAmount != null)) { this.setRequestedAmount(obj.requestedAmount); }
			if(('approvedAmount' in obj) && (obj.approvedAmount != null)) { this.setApprovedAmount(obj.approvedAmount); }
			if(('balanceOnCard' in obj) && (obj.balanceOnCard != null)) { this.setBalanceOnCard(obj.balanceOnCard); }
		}
		else {
			this.setTransId(null);
			this.setResponseCode(null);
			this.setResponseToCustomer(null);
			this.setAuthCode(null);
			this.setAccountNumber(null);
			this.setAccountType(null);
			this.setRequestedAmount(null);
			this.setApprovedAmount(null);
			this.setBalanceOnCard(null);
		}
		logger.debug('Exit TransactionResponse.SplitTenderPayments.SplitTenderPayment constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setResponseCode(p_responseCode) { this.responseCode = p_responseCode; }
	getResponseCode() { return this.responseCode; }
	setResponseToCustomer(p_responseToCustomer) { this.responseToCustomer = p_responseToCustomer; }
	getResponseToCustomer() { return this.responseToCustomer; }
	setAuthCode(p_authCode) { this.authCode = p_authCode; }
	getAuthCode() { return this.authCode; }
	setAccountNumber(p_accountNumber) { this.accountNumber = p_accountNumber; }
	getAccountNumber() { return this.accountNumber; }
	setAccountType(p_accountType) { this.accountType = p_accountType; }
	getAccountType() { return this.accountType; }
	setRequestedAmount(p_requestedAmount) { this.requestedAmount = p_requestedAmount; }
	getRequestedAmount() { return this.requestedAmount; }
	setApprovedAmount(p_approvedAmount) { this.approvedAmount = p_approvedAmount; }
	getApprovedAmount() { return this.approvedAmount; }
	setBalanceOnCard(p_balanceOnCard) { this.balanceOnCard = p_balanceOnCard; }
	getBalanceOnCard() { return this.balanceOnCard; }
};

module.exports.TransactionResponse.SplitTenderPayments.SplitTenderPayment = TransactionResponse.SplitTenderPayments.SplitTenderPayment;

TransactionResponse.EmvResponse.Tags = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.EmvResponse.Tags constructor');
		if(arguments.length == 1) {
			if((obj != undefined) && (obj != null)) {
				var tagList = [];
				obj.forEach(function(item) {tagList.push(new EmvTag(item));}); 
				this.setTag(tagList);
			}
		}
		else {
			this.setTag(null);
		}
		logger.debug('Exit TransactionResponse.EmvResponse.Tags constructor');
	}

	setTag(p_tag) { this.tag = p_tag; }
	getTag() { return this.tag; }
};

module.exports.TransactionResponse.EmvResponse.Tags = TransactionResponse.EmvResponse.Tags;

TransactionResponse.Messages.Message = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.Messages.Message constructor');
		if(arguments.length == 1) {
			if(('code' in obj) && (obj.code != null)) { this.setCode(obj.code); }
			if(('description' in obj) && (obj.description != null)) { this.setDescription(obj.description); }
		}
		else {
			this.setCode(null);
			this.setDescription(null);
		}
		logger.debug('Exit TransactionResponse.Messages.Message constructor');
	}

	setCode(p_code) { this.code = p_code; }
	getCode() { return this.code; }
	setDescription(p_description) { this.description = p_description; }
	getDescription() { return this.description; }
};

module.exports.TransactionResponse.Messages.Message = TransactionResponse.Messages.Message;

TransactionResponse.Errors.Error = class {
	constructor(obj) {
		logger.debug('Enter TransactionResponse.Errors.Error constructor');
		if(arguments.length == 1) {
			if(('errorCode' in obj) && (obj.errorCode != null)) { this.setErrorCode(obj.errorCode); }
			if(('errorText' in obj) && (obj.errorText != null)) { this.setErrorText(obj.errorText); }
		}
		else {
			this.setErrorCode(null);
			this.setErrorText(null);
		}
		logger.debug('Exit TransactionResponse.Errors.Error constructor');
	}

	setErrorCode(p_errorCode) { this.errorCode = p_errorCode; }
	getErrorCode() { return this.errorCode; }
	setErrorText(p_errorText) { this.errorText = p_errorText; }
	getErrorText() { return this.errorText; }
};

module.exports.TransactionResponse.Errors.Error = TransactionResponse.Errors.Error;

KeyManagementScheme.DUKPT.Mode = class {
	constructor(obj) {
		logger.debug('Enter KeyManagementScheme.DUKPT.Mode constructor');
		if(arguments.length == 1) {
			if(('PIN' in obj) && (obj.PIN != null)) { this.setPIN(obj.PIN); }
			if(('Data' in obj) && (obj.Data != null)) { this.setData(obj.Data); }
		}
		else {
			this.setPIN(null);
			this.setData(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.Mode constructor');
	}

	setPIN(p_PIN) { this.PIN = p_PIN; }
	getPIN() { return this.PIN; }
	setData(p_Data) { this.Data = p_Data; }
	getData() { return this.Data; }
};

module.exports.KeyManagementScheme.DUKPT.Mode = KeyManagementScheme.DUKPT.Mode;

KeyManagementScheme.DUKPT.EncryptedData = class {
	constructor(obj) {
		logger.debug('Enter KeyManagementScheme.DUKPT.EncryptedData constructor');
		if(arguments.length == 1) {
			if(('Value' in obj) && (obj.Value != null)) { this.setValue(obj.Value); }
		}
		else {
			this.setValue(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.EncryptedData constructor');
	}

	setValue(p_Value) { this.Value = p_Value; }
	getValue() { return this.Value; }
};

module.exports.KeyManagementScheme.DUKPT.EncryptedData = KeyManagementScheme.DUKPT.EncryptedData;

KeyManagementScheme.DUKPT.DeviceInfo = class {
	constructor(obj) {
		logger.debug('Enter KeyManagementScheme.DUKPT.DeviceInfo constructor');
		if(arguments.length == 1) {
			if(('Description' in obj) && (obj.Description != null)) { this.setDescription(obj.Description); }
		}
		else {
			this.setDescription(null);
		}
		logger.debug('Exit KeyManagementScheme.DUKPT.DeviceInfo constructor');
	}

	setDescription(p_Description) { this.Description = p_Description; }
	getDescription() { return this.Description; }
};

module.exports.KeyManagementScheme.DUKPT.DeviceInfo = KeyManagementScheme.DUKPT.DeviceInfo;

TransactionDetailsType.EmvDetails.Tag = class {
	constructor(obj) {
		logger.debug('Enter TransactionDetailsType.EmvDetails.Tag constructor');
		if(arguments.length == 1) {
			if(('tagId' in obj) && (obj.tagId != null)) { this.setTagId(obj.tagId); }
			if(('data' in obj) && (obj.data != null)) { this.setData(obj.data); }
		}
		else {
			this.setTagId(null);
			this.setData(null);
		}
		logger.debug('Exit TransactionDetailsType.EmvDetails.Tag constructor');
	}

	setTagId(p_tagId) { this.tagId = p_tagId; }
	getTagId() { return this.tagId; }
	setData(p_data) { this.data = p_data; }
	getData() { return this.data; }
};

module.exports.TransactionDetailsType.EmvDetails.Tag = TransactionDetailsType.EmvDetails.Tag;

class MobileDeviceLoginResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter MobileDeviceLoginResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceLoginResponse' : this };
		logger.debug('Exit MobileDeviceLoginResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter MobileDeviceLoginResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('merchantContact' in obj) && (obj.merchantContact != null)) { this.setMerchantContact(new MerchantContactType(obj.merchantContact)); }
			if(('userPermissions' in obj) && (obj.userPermissions != null)) { this.setUserPermissions(new ArrayOfPermissionType(obj.userPermissions)); }
			if(('merchantAccount' in obj) && (obj.merchantAccount != null)) { this.setMerchantAccount(new TransRetailInfoType(obj.merchantAccount)); }
		}
		else {
			super();
			this.setMerchantContact(null);
			this.setUserPermissions(null);
			this.setMerchantAccount(null);
		}
		logger.debug('Exit MobileDeviceLoginResponse constructor');
	}

	setMerchantContact(p_merchantContact) { this.merchantContact = p_merchantContact; }
	getMerchantContact() { return this.merchantContact; }
	setUserPermissions(p_userPermissions) { this.userPermissions = p_userPermissions; }
	getUserPermissions() { return this.userPermissions; }
	setMerchantAccount(p_merchantAccount) { this.merchantAccount = p_merchantAccount; }
	getMerchantAccount() { return this.merchantAccount; }
}

module.exports.MobileDeviceLoginResponse = MobileDeviceLoginResponse;

class GetTransactionDetailsResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetTransactionDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionDetailsResponse' : this };
		logger.debug('Exit GetTransactionDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetTransactionDetailsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transaction' in obj) && (obj.transaction != null)) { this.setTransaction(new TransactionDetailsType(obj.transaction)); }
		}
		else {
			super();
			this.setTransaction(null);
		}
		logger.debug('Exit GetTransactionDetailsResponse constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { return this.transaction; }
}

module.exports.GetTransactionDetailsResponse = GetTransactionDetailsResponse;

class CustomerProfileType extends CustomerProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileType(item));}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressType(item));}); 
				this.setShipToList(shipToListList);
			}
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
		}
		logger.debug('Exit CustomerProfileType constructor');
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { return this.paymentProfiles; }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList() { return this.shipToList; }
}

module.exports.CustomerProfileType = CustomerProfileType;

class GetTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetTransactionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionListResponse' : this };
		logger.debug('Exit GetTransactionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetTransactionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactions' in obj) && (obj.transactions != null)) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
		}
		else {
			super();
			this.setTransactions(null);
		}
		logger.debug('Exit GetTransactionListResponse constructor');
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions() { return this.transactions; }
}

module.exports.GetTransactionListResponse = GetTransactionListResponse;

class CustomerProfileExType extends CustomerProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit CustomerProfileExType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
}

module.exports.CustomerProfileExType = CustomerProfileExType;

class CustomerAddressType extends NameAndAddressType {
	constructor(obj) {
		logger.debug('Enter CustomerAddressType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('phoneNumber' in obj) && (obj.phoneNumber != null)) { this.setPhoneNumber(obj.phoneNumber); }
			if(('faxNumber' in obj) && (obj.faxNumber != null)) { this.setFaxNumber(obj.faxNumber); }
			if(('email' in obj) && (obj.email != null)) { this.setEmail(obj.email); }
		}
		else {
			super();
			this.setPhoneNumber(null);
			this.setFaxNumber(null);
			this.setEmail(null);
		}
		logger.debug('Exit CustomerAddressType constructor');
	}

	setPhoneNumber(p_phoneNumber) { this.phoneNumber = p_phoneNumber; }
	getPhoneNumber() { return this.phoneNumber; }
	setFaxNumber(p_faxNumber) { this.faxNumber = p_faxNumber; }
	getFaxNumber() { return this.faxNumber; }
	setEmail(p_email) { this.email = p_email; }
	getEmail() { return this.email; }
}

module.exports.CustomerAddressType = CustomerAddressType;

class GetCustomerProfileIdsResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetCustomerProfileIdsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileIdsResponse' : this };
		logger.debug('Exit GetCustomerProfileIdsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerProfileIdsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('ids' in obj) && (obj.ids != null)) { this.setIds(new ArrayOfNumericString(obj.ids)); }
		}
		else {
			super();
			this.setIds(null);
		}
		logger.debug('Exit GetCustomerProfileIdsResponse constructor');
	}

	setIds(p_ids) { this.ids = p_ids; }
	getIds() { return this.ids; }
}

module.exports.GetCustomerProfileIdsResponse = GetCustomerProfileIdsResponse;

class IsAliveResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter IsAliveResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'isAliveResponse' : this };
		logger.debug('Exit IsAliveResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.IsAliveResponse = IsAliveResponse;

class GetAUJobSummaryResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetAUJobSummaryResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobSummaryResponse' : this };
		logger.debug('Exit GetAUJobSummaryResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetAUJobSummaryResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('auSummary' in obj) && (obj.auSummary != null)) { this.setAuSummary(new ArrayOfAUResponseType(obj.auSummary)); }
		}
		else {
			super();
			this.setAuSummary(null);
		}
		logger.debug('Exit GetAUJobSummaryResponse constructor');
	}

	setAuSummary(p_auSummary) { this.auSummary = p_auSummary; }
	getAuSummary() { return this.auSummary; }
}

module.exports.GetAUJobSummaryResponse = GetAUJobSummaryResponse;

class GetAUJobDetailsRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetAUJobDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobDetailsRequest' : this };
		logger.debug('Exit GetAUJobDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetAUJobDetailsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
			if(('modifiedTypeFilter' in obj) && (obj.modifiedTypeFilter != null)) { this.setModifiedTypeFilter(obj.modifiedTypeFilter); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setMonth(null);
			this.setModifiedTypeFilter(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetAUJobDetailsRequest constructor');
	}

	setMonth(p_month) { this.month = p_month; }
	getMonth() { return this.month; }
	setModifiedTypeFilter(p_modifiedTypeFilter) { this.modifiedTypeFilter = p_modifiedTypeFilter; }
	getModifiedTypeFilter() { return this.modifiedTypeFilter; }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { return this.paging; }
}

module.exports.GetAUJobDetailsRequest = GetAUJobDetailsRequest;

class AuUpdateType extends AuDetailsType {
	constructor(obj) {
		logger.debug('Enter AuUpdateType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('newCreditCard' in obj) && (obj.newCreditCard != null)) { this.setNewCreditCard(new CreditCardMaskedType(obj.newCreditCard)); }
			if(('oldCreditCard' in obj) && (obj.oldCreditCard != null)) { this.setOldCreditCard(new CreditCardMaskedType(obj.oldCreditCard)); }
		}
		else {
			super();
			this.setNewCreditCard(null);
			this.setOldCreditCard(null);
		}
		logger.debug('Exit AuUpdateType constructor');
	}

	setNewCreditCard(p_newCreditCard) { this.newCreditCard = p_newCreditCard; }
	getNewCreditCard() { return this.newCreditCard; }
	setOldCreditCard(p_oldCreditCard) { this.oldCreditCard = p_oldCreditCard; }
	getOldCreditCard() { return this.oldCreditCard; }
}

module.exports.AuUpdateType = AuUpdateType;

class AuthenticateTestResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter AuthenticateTestResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'authenticateTestResponse' : this };
		logger.debug('Exit AuthenticateTestResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestResponse = AuthenticateTestResponse;

class GetAUJobDetailsResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetAUJobDetailsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobDetailsResponse' : this };
		logger.debug('Exit GetAUJobDetailsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetAUJobDetailsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('auDetails' in obj) && (obj.auDetails != null)) { this.setAuDetails(new ListOfAUDetailsType(obj.auDetails)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setAuDetails(null);
		}
		logger.debug('Exit GetAUJobDetailsResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { return this.totalNumInResultSet; }
	setAuDetails(p_auDetails) { this.auDetails = p_auDetails; }
	getAuDetails() { return this.auDetails; }
}

module.exports.GetAUJobDetailsResponse = GetAUJobDetailsResponse;

class MobileDeviceLoginRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter MobileDeviceLoginRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceLoginRequest' : this };
		logger.debug('Exit MobileDeviceLoginRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceLoginRequest = MobileDeviceLoginRequest;

class GetCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileRequest' : this };
		logger.debug('Exit GetCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit GetCustomerProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
}

module.exports.GetCustomerProfileRequest = GetCustomerProfileRequest;

class UpdateSplitTenderGroupResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter UpdateSplitTenderGroupResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateSplitTenderGroupResponse' : this };
		logger.debug('Exit UpdateSplitTenderGroupResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateSplitTenderGroupResponse = UpdateSplitTenderGroupResponse;

class ARBUpdateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBUpdateSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBUpdateSubscriptionRequest' : this };
		logger.debug('Exit ARBUpdateSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBUpdateSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setSubscription(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { return this.subscription; }
}

module.exports.ARBUpdateSubscriptionRequest = ARBUpdateSubscriptionRequest;

class GetTransactionDetailsRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetTransactionDetailsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionDetailsRequest' : this };
		logger.debug('Exit GetTransactionDetailsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetTransactionDetailsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setTransId(null);
		}
		logger.debug('Exit GetTransactionDetailsRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
}

module.exports.GetTransactionDetailsRequest = GetTransactionDetailsRequest;

class GetCustomerPaymentProfileListResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetCustomerPaymentProfileListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileListResponse' : this };
		logger.debug('Exit GetCustomerPaymentProfileListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerPaymentProfileListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('paymentProfiles' in obj) && (obj.paymentProfiles != null)) { this.setPaymentProfiles(new ArrayOfCustomerPaymentProfileListItemType(obj.paymentProfiles)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setPaymentProfiles(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { return this.totalNumInResultSet; }
	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { return this.paymentProfiles; }
}

module.exports.GetCustomerPaymentProfileListResponse = GetCustomerPaymentProfileListResponse;

class UpdateSplitTenderGroupRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter UpdateSplitTenderGroupRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateSplitTenderGroupRequest' : this };
		logger.debug('Exit UpdateSplitTenderGroupRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter UpdateSplitTenderGroupRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
			if(('splitTenderStatus' in obj) && (obj.splitTenderStatus != null)) { this.setSplitTenderStatus(obj.splitTenderStatus); }
		}
		else {
			super();
			this.setSplitTenderId(null);
			this.setSplitTenderStatus(null);
		}
		logger.debug('Exit UpdateSplitTenderGroupRequest constructor');
	}

	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { return this.splitTenderId; }
	setSplitTenderStatus(p_splitTenderStatus) { this.splitTenderStatus = p_splitTenderStatus; }
	getSplitTenderStatus() { return this.splitTenderStatus; }
}

module.exports.UpdateSplitTenderGroupRequest = UpdateSplitTenderGroupRequest;

class UpdateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter UpdateCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerProfileResponse' : this };
		logger.debug('Exit UpdateCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerProfileResponse = UpdateCustomerProfileResponse;

class GetHostedProfilePageRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetHostedProfilePageRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedProfilePageRequest' : this };
		logger.debug('Exit GetHostedProfilePageRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetHostedProfilePageRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('hostedProfileSettings' in obj) && (obj.hostedProfileSettings != null)) { this.setHostedProfileSettings(new ArrayOfSetting(obj.hostedProfileSettings)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setHostedProfileSettings(null);
		}
		logger.debug('Exit GetHostedProfilePageRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setHostedProfileSettings(p_hostedProfileSettings) { this.hostedProfileSettings = p_hostedProfileSettings; }
	getHostedProfileSettings() { return this.hostedProfileSettings; }
}

module.exports.GetHostedProfilePageRequest = GetHostedProfilePageRequest;

class MobileDeviceRegistrationResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter MobileDeviceRegistrationResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceRegistrationResponse' : this };
		logger.debug('Exit MobileDeviceRegistrationResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.MobileDeviceRegistrationResponse = MobileDeviceRegistrationResponse;

class CreateCustomerProfileTransactionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateCustomerProfileTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileTransactionRequest' : this };
		logger.debug('Exit CreateCustomerProfileTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerProfileTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transaction' in obj) && (obj.transaction != null)) { this.setTransaction(new ProfileTransactionType(obj.transaction)); }
			if(('extraOptions' in obj) && (obj.extraOptions != null)) { this.setExtraOptions(obj.extraOptions); }
		}
		else {
			super();
			this.setTransaction(null);
			this.setExtraOptions(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionRequest constructor');
	}

	setTransaction(p_transaction) { this.transaction = p_transaction; }
	getTransaction() { return this.transaction; }
	setExtraOptions(p_extraOptions) { this.extraOptions = p_extraOptions; }
	getExtraOptions() { return this.extraOptions; }
}

module.exports.CreateCustomerProfileTransactionRequest = CreateCustomerProfileTransactionRequest;

class CreateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter CreateCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerShippingAddressResponse' : this };
		logger.debug('Exit CreateCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerShippingAddressResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { return this.customerAddressId; }
}

module.exports.CreateCustomerShippingAddressResponse = CreateCustomerShippingAddressResponse;

class CreateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerPaymentProfileRequest' : this };
		logger.debug('Exit CreateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileType(obj.paymentProfile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { return this.validationMode; }
}

module.exports.CreateCustomerPaymentProfileRequest = CreateCustomerPaymentProfileRequest;

class DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter DeleteCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerPaymentProfileRequest' : this };
		logger.debug('Exit DeleteCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter DeleteCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit DeleteCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
}

module.exports.DeleteCustomerPaymentProfileRequest = DeleteCustomerPaymentProfileRequest;

class ARBGetSubscriptionStatusRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionStatusRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionStatusRequest' : this };
		logger.debug('Exit ARBGetSubscriptionStatusRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionStatusRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
}

module.exports.ARBGetSubscriptionStatusRequest = ARBGetSubscriptionStatusRequest;

class GetAUJobSummaryRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetAUJobSummaryRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getAUJobSummaryRequest' : this };
		logger.debug('Exit GetAUJobSummaryRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetAUJobSummaryRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
		}
		else {
			super();
			this.setMonth(null);
		}
		logger.debug('Exit GetAUJobSummaryRequest constructor');
	}

	setMonth(p_month) { this.month = p_month; }
	getMonth() { return this.month; }
}

module.exports.GetAUJobSummaryRequest = GetAUJobSummaryRequest;

class ARBCancelSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBCancelSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCancelSubscriptionResponse' : this };
		logger.debug('Exit ARBCancelSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ARBCancelSubscriptionResponse = ARBCancelSubscriptionResponse;

class CreateCustomerProfileTransactionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter CreateCustomerProfileTransactionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileTransactionResponse' : this };
		logger.debug('Exit CreateCustomerProfileTransactionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerProfileTransactionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionResponse' in obj) && (obj.transactionResponse != null)) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(('directResponse' in obj) && (obj.directResponse != null)) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerProfileTransactionResponse constructor');
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse() { return this.transactionResponse; }
	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse() { return this.directResponse; }
}

module.exports.CreateCustomerProfileTransactionResponse = CreateCustomerProfileTransactionResponse;

class GetUnsettledTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetUnsettledTransactionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getUnsettledTransactionListRequest' : this };
		logger.debug('Exit GetUnsettledTransactionListRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetUnsettledTransactionListRequest = GetUnsettledTransactionListRequest;

class DecryptPaymentDataRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter DecryptPaymentDataRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'decryptPaymentDataRequest' : this };
		logger.debug('Exit DecryptPaymentDataRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter DecryptPaymentDataRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
			if(('callId' in obj) && (obj.callId != null)) { this.setCallId(obj.callId); }
		}
		else {
			super();
			this.setOpaqueData(null);
			this.setCallId(null);
		}
		logger.debug('Exit DecryptPaymentDataRequest constructor');
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { return this.opaqueData; }
	setCallId(p_callId) { this.callId = p_callId; }
	getCallId() { return this.callId; }
}

module.exports.DecryptPaymentDataRequest = DecryptPaymentDataRequest;

class EmailSettingsType extends ArrayOfSetting {
	constructor(obj) {
		logger.debug('Enter EmailSettingsType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('version' in obj) && (obj.version != null)) { this.setVersion(obj.version); }
		}
		else {
			super();
			this.setVersion(null);
		}
		logger.debug('Exit EmailSettingsType constructor');
	}

	setVersion(p_version) { this.version = p_version; }
	getVersion() { return this.version; }
}

module.exports.EmailSettingsType = EmailSettingsType;

class CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentType(obj.payment)); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
		}
		else {
			super();
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
		}
		logger.debug('Exit CustomerPaymentProfileType constructor');
	}

	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { return this.taxId; }
}

module.exports.CustomerPaymentProfileType = CustomerPaymentProfileType;

class ProfileTransOrderType extends ProfileTransAmountType {
	constructor(obj) {
		logger.debug('Enter ProfileTransOrderType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('taxExempt' in obj) && (obj.taxExempt != null)) { this.setTaxExempt(obj.taxExempt); }
			if(('recurringBilling' in obj) && (obj.recurringBilling != null)) { this.setRecurringBilling(obj.recurringBilling); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('splitTenderId' in obj) && (obj.splitTenderId != null)) { this.setSplitTenderId(obj.splitTenderId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setOrder(null);
			this.setTaxExempt(null);
			this.setRecurringBilling(null);
			this.setCardCode(null);
			this.setSplitTenderId(null);
		}
		logger.debug('Exit ProfileTransOrderType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { return this.customerShippingAddressId; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
	setTaxExempt(p_taxExempt) { this.taxExempt = p_taxExempt; }
	getTaxExempt() { return this.taxExempt; }
	setRecurringBilling(p_recurringBilling) { this.recurringBilling = p_recurringBilling; }
	getRecurringBilling() { return this.recurringBilling; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { return this.cardCode; }
	setSplitTenderId(p_splitTenderId) { this.splitTenderId = p_splitTenderId; }
	getSplitTenderId() { return this.splitTenderId; }
}

module.exports.ProfileTransOrderType = ProfileTransOrderType;

class CreditCardType extends CreditCardSimpleType {
	constructor(obj) {
		logger.debug('Enter CreditCardType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('isPaymentToken' in obj) && (obj.isPaymentToken != null)) { this.setIsPaymentToken(obj.isPaymentToken); }
			if(('cryptogram' in obj) && (obj.cryptogram != null)) { this.setCryptogram(obj.cryptogram); }
		}
		else {
			super();
			this.setCardCode(null);
			this.setIsPaymentToken(null);
			this.setCryptogram(null);
		}
		logger.debug('Exit CreditCardType constructor');
	}

	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { return this.cardCode; }
	setIsPaymentToken(p_isPaymentToken) { this.isPaymentToken = p_isPaymentToken; }
	getIsPaymentToken() { return this.isPaymentToken; }
	setCryptogram(p_cryptogram) { this.cryptogram = p_cryptogram; }
	getCryptogram() { return this.cryptogram; }
}

module.exports.CreditCardType = CreditCardType;

class GetCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileResponse' : this };
		logger.debug('Exit GetCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileMaskedType(obj.profile)); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
		}
		else {
			super();
			this.setProfile(null);
			this.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerProfileResponse constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { return this.subscriptionIds; }
}

module.exports.GetCustomerProfileResponse = GetCustomerProfileResponse;

class GetCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileRequest' : this };
		logger.debug('Exit GetCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('unmaskExpirationDate' in obj) && (obj.unmaskExpirationDate != null)) { this.setUnmaskExpirationDate(obj.unmaskExpirationDate); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setUnmaskExpirationDate(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setUnmaskExpirationDate(p_unmaskExpirationDate) { this.unmaskExpirationDate = p_unmaskExpirationDate; }
	getUnmaskExpirationDate() { return this.unmaskExpirationDate; }
}

module.exports.GetCustomerPaymentProfileRequest = GetCustomerPaymentProfileRequest;

class MobileDeviceRegistrationRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter MobileDeviceRegistrationRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'mobileDeviceRegistrationRequest' : this };
		logger.debug('Exit MobileDeviceRegistrationRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter MobileDeviceRegistrationRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('mobileDevice' in obj) && (obj.mobileDevice != null)) { this.setMobileDevice(new MobileDeviceType(obj.mobileDevice)); }
		}
		else {
			super();
			this.setMobileDevice(null);
		}
		logger.debug('Exit MobileDeviceRegistrationRequest constructor');
	}

	setMobileDevice(p_mobileDevice) { this.mobileDevice = p_mobileDevice; }
	getMobileDevice() { return this.mobileDevice; }
}

module.exports.MobileDeviceRegistrationRequest = MobileDeviceRegistrationRequest;

class GetTransactionListRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetTransactionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getTransactionListRequest' : this };
		logger.debug('Exit GetTransactionListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetTransactionListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
		}
		else {
			super();
			this.setBatchId(null);
		}
		logger.debug('Exit GetTransactionListRequest constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { return this.batchId; }
}

module.exports.GetTransactionListRequest = GetTransactionListRequest;

class DecryptPaymentDataResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter DecryptPaymentDataResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'decryptPaymentDataResponse' : this };
		logger.debug('Exit DecryptPaymentDataResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter DecryptPaymentDataResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('shippingInfo' in obj) && (obj.shippingInfo != null)) { this.setShippingInfo(new CustomerAddressType(obj.shippingInfo)); }
			if(('billingInfo' in obj) && (obj.billingInfo != null)) { this.setBillingInfo(new CustomerAddressType(obj.billingInfo)); }
			if(('cardInfo' in obj) && (obj.cardInfo != null)) { this.setCardInfo(new CreditCardMaskedType(obj.cardInfo)); }
			if(('paymentDetails' in obj) && (obj.paymentDetails != null)) { this.setPaymentDetails(new PaymentDetails(obj.paymentDetails)); }
		}
		else {
			super();
			this.setShippingInfo(null);
			this.setBillingInfo(null);
			this.setCardInfo(null);
			this.setPaymentDetails(null);
		}
		logger.debug('Exit DecryptPaymentDataResponse constructor');
	}

	setShippingInfo(p_shippingInfo) { this.shippingInfo = p_shippingInfo; }
	getShippingInfo() { return this.shippingInfo; }
	setBillingInfo(p_billingInfo) { this.billingInfo = p_billingInfo; }
	getBillingInfo() { return this.billingInfo; }
	setCardInfo(p_cardInfo) { this.cardInfo = p_cardInfo; }
	getCardInfo() { return this.cardInfo; }
	setPaymentDetails(p_paymentDetails) { this.paymentDetails = p_paymentDetails; }
	getPaymentDetails() { return this.paymentDetails; }
}

module.exports.DecryptPaymentDataResponse = DecryptPaymentDataResponse;

class DeleteCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter DeleteCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerProfileRequest' : this };
		logger.debug('Exit DeleteCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter DeleteCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit DeleteCustomerProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
}

module.exports.DeleteCustomerProfileRequest = DeleteCustomerProfileRequest;

class GetHostedProfilePageResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetHostedProfilePageResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getHostedProfilePageResponse' : this };
		logger.debug('Exit GetHostedProfilePageResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetHostedProfilePageResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('token' in obj) && (obj.token != null)) { this.setToken(obj.token); }
		}
		else {
			super();
			this.setToken(null);
		}
		logger.debug('Exit GetHostedProfilePageResponse constructor');
	}

	setToken(p_token) { this.token = p_token; }
	getToken() { return this.token; }
}

module.exports.GetHostedProfilePageResponse = GetHostedProfilePageResponse;

class DeleteCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter DeleteCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerPaymentProfileResponse' : this };
		logger.debug('Exit DeleteCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerPaymentProfileResponse = DeleteCustomerPaymentProfileResponse;

class GetCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileResponse' : this };
		logger.debug('Exit GetCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileResponse constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
}

module.exports.GetCustomerPaymentProfileResponse = GetCustomerPaymentProfileResponse;

class CreateTransactionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createTransactionRequest' : this };
		logger.debug('Exit CreateTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionRequest' in obj) && (obj.transactionRequest != null)) { this.setTransactionRequest(new TransactionRequestType(obj.transactionRequest)); }
		}
		else {
			super();
			this.setTransactionRequest(null);
		}
		logger.debug('Exit CreateTransactionRequest constructor');
	}

	setTransactionRequest(p_transactionRequest) { this.transactionRequest = p_transactionRequest; }
	getTransactionRequest() { return this.transactionRequest; }
}

module.exports.CreateTransactionRequest = CreateTransactionRequest;

class GetCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerShippingAddressResponse' : this };
		logger.debug('Exit GetCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerShippingAddressResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressExType(obj.address)); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
		}
		else {
			super();
			this.setAddress(null);
			this.setSubscriptionIds(null);
		}
		logger.debug('Exit GetCustomerShippingAddressResponse constructor');
	}

	setAddress(p_address) { this.address = p_address; }
	getAddress() { return this.address; }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { return this.subscriptionIds; }
}

module.exports.GetCustomerShippingAddressResponse = GetCustomerShippingAddressResponse;

class ARBCreateSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBCreateSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCreateSubscriptionRequest' : this };
		logger.debug('Exit ARBCreateSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBCreateSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
		logger.debug('Exit ARBCreateSubscriptionRequest constructor');
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { return this.subscription; }
}

module.exports.ARBCreateSubscriptionRequest = ARBCreateSubscriptionRequest;

class ARBGetSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionRequest' : this };
		logger.debug('Exit ARBGetSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBGetSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
}

module.exports.ARBGetSubscriptionRequest = ARBGetSubscriptionRequest;

class ARBCreateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBCreateSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCreateSubscriptionResponse' : this };
		logger.debug('Exit ARBCreateSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBCreateSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
		}
		else {
			super();
			this.setSubscriptionId(null);
			this.setProfile(null);
		}
		logger.debug('Exit ARBCreateSubscriptionResponse constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
}

module.exports.ARBCreateSubscriptionResponse = ARBCreateSubscriptionResponse;

class LogoutRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter LogoutRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'logoutRequest' : this };
		logger.debug('Exit LogoutRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutRequest = LogoutRequest;

class CreateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter CreateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerPaymentProfileResponse' : this };
		logger.debug('Exit CreateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('validationDirectResponse' in obj) && (obj.validationDirectResponse != null)) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setValidationDirectResponse(null);
		}
		logger.debug('Exit CreateCustomerPaymentProfileResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse() { return this.validationDirectResponse; }
}

module.exports.CreateCustomerPaymentProfileResponse = CreateCustomerPaymentProfileResponse;

class SendCustomerTransactionReceiptResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter SendCustomerTransactionReceiptResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'sendCustomerTransactionReceiptResponse' : this };
		logger.debug('Exit SendCustomerTransactionReceiptResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.SendCustomerTransactionReceiptResponse = SendCustomerTransactionReceiptResponse;

class ARBCancelSubscriptionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBCancelSubscriptionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBCancelSubscriptionRequest' : this };
		logger.debug('Exit ARBCancelSubscriptionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBCancelSubscriptionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscriptionId' in obj) && (obj.subscriptionId != null)) { this.setSubscriptionId(obj.subscriptionId); }
		}
		else {
			super();
			this.setSubscriptionId(null);
		}
		logger.debug('Exit ARBCancelSubscriptionRequest constructor');
	}

	setSubscriptionId(p_subscriptionId) { this.subscriptionId = p_subscriptionId; }
	getSubscriptionId() { return this.subscriptionId; }
}

module.exports.ARBCancelSubscriptionRequest = ARBCancelSubscriptionRequest;

class DeleteCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter DeleteCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerProfileResponse' : this };
		logger.debug('Exit DeleteCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerProfileResponse = DeleteCustomerProfileResponse;

class SecurePaymentContainerRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter SecurePaymentContainerRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'securePaymentContainerRequest' : this };
		logger.debug('Exit SecurePaymentContainerRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter SecurePaymentContainerRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('data' in obj) && (obj.data != null)) { this.setData(new WebCheckOutDataType(obj.data)); }
		}
		else {
			super();
			this.setData(null);
		}
		logger.debug('Exit SecurePaymentContainerRequest constructor');
	}

	setData(p_data) { this.data = p_data; }
	getData() { return this.data; }
}

module.exports.SecurePaymentContainerRequest = SecurePaymentContainerRequest;

class AuDeleteType extends AuDetailsType {
	constructor(obj) {
		logger.debug('Enter AuDeleteType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('creditCard' in obj) && (obj.creditCard != null)) { this.setCreditCard(new CreditCardMaskedType(obj.creditCard)); }
		}
		else {
			super();
			this.setCreditCard(null);
		}
		logger.debug('Exit AuDeleteType constructor');
	}

	setCreditCard(p_creditCard) { this.creditCard = p_creditCard; }
	getCreditCard() { return this.creditCard; }
}

module.exports.AuDeleteType = AuDeleteType;

class CreateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileRequest' : this };
		logger.debug('Exit CreateCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileType(obj.profile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit CreateCustomerProfileRequest constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { return this.validationMode; }
}

module.exports.CreateCustomerProfileRequest = CreateCustomerProfileRequest;

class DeleteCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter DeleteCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerShippingAddressResponse' : this };
		logger.debug('Exit DeleteCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.DeleteCustomerShippingAddressResponse = DeleteCustomerShippingAddressResponse;

class SendCustomerTransactionReceiptRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter SendCustomerTransactionReceiptRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'sendCustomerTransactionReceiptRequest' : this };
		logger.debug('Exit SendCustomerTransactionReceiptRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter SendCustomerTransactionReceiptRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('customerEmail' in obj) && (obj.customerEmail != null)) { this.setCustomerEmail(obj.customerEmail); }
			if(('emailSettings' in obj) && (obj.emailSettings != null)) { this.setEmailSettings(new EmailSettingsType(obj.emailSettings)); }
		}
		else {
			super();
			this.setTransId(null);
			this.setCustomerEmail(null);
			this.setEmailSettings(null);
		}
		logger.debug('Exit SendCustomerTransactionReceiptRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setCustomerEmail(p_customerEmail) { this.customerEmail = p_customerEmail; }
	getCustomerEmail() { return this.customerEmail; }
	setEmailSettings(p_emailSettings) { this.emailSettings = p_emailSettings; }
	getEmailSettings() { return this.emailSettings; }
}

module.exports.SendCustomerTransactionReceiptRequest = SendCustomerTransactionReceiptRequest;

class GetSettledBatchListResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetSettledBatchListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getSettledBatchListResponse' : this };
		logger.debug('Exit GetSettledBatchListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetSettledBatchListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchList' in obj) && (obj.batchList != null)) { this.setBatchList(new ArrayOfBatchDetailsType(obj.batchList)); }
		}
		else {
			super();
			this.setBatchList(null);
		}
		logger.debug('Exit GetSettledBatchListResponse constructor');
	}

	setBatchList(p_batchList) { this.batchList = p_batchList; }
	getBatchList() { return this.batchList; }
}

module.exports.GetSettledBatchListResponse = GetSettledBatchListResponse;

class ARBUpdateSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBUpdateSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBUpdateSubscriptionResponse' : this };
		logger.debug('Exit ARBUpdateSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBUpdateSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileIdType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
		logger.debug('Exit ARBUpdateSubscriptionResponse constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
}

module.exports.ARBUpdateSubscriptionResponse = ARBUpdateSubscriptionResponse;

class GetCustomerProfileIdsRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetCustomerProfileIdsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerProfileIdsRequest' : this };
		logger.debug('Exit GetCustomerProfileIdsRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.GetCustomerProfileIdsRequest = GetCustomerProfileIdsRequest;

class CreateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerShippingAddressRequest' : this };
		logger.debug('Exit CreateCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressType(obj.address)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
		}
		logger.debug('Exit CreateCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { return this.address; }
}

module.exports.CreateCustomerShippingAddressRequest = CreateCustomerShippingAddressRequest;

class UpdateCustomerProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter UpdateCustomerProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerProfileRequest' : this };
		logger.debug('Exit UpdateCustomerProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter UpdateCustomerProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('profile' in obj) && (obj.profile != null)) { this.setProfile(new CustomerProfileExType(obj.profile)); }
		}
		else {
			super();
			this.setProfile(null);
		}
		logger.debug('Exit UpdateCustomerProfileRequest constructor');
	}

	setProfile(p_profile) { this.profile = p_profile; }
	getProfile() { return this.profile; }
}

module.exports.UpdateCustomerProfileRequest = UpdateCustomerProfileRequest;

class ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ValidateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'validateCustomerPaymentProfileRequest' : this };
		logger.debug('Exit ValidateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ValidateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('cardCode' in obj) && (obj.cardCode != null)) { this.setCardCode(obj.cardCode); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setCardCode(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { return this.customerShippingAddressId; }
	setCardCode(p_cardCode) { this.cardCode = p_cardCode; }
	getCardCode() { return this.cardCode; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { return this.validationMode; }
}

module.exports.ValidateCustomerPaymentProfileRequest = ValidateCustomerPaymentProfileRequest;

class GetCustomerPaymentProfileListRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetCustomerPaymentProfileListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerPaymentProfileListRequest' : this };
		logger.debug('Exit GetCustomerPaymentProfileListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerPaymentProfileListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('searchType' in obj) && (obj.searchType != null)) { this.setSearchType(obj.searchType); }
			if(('month' in obj) && (obj.month != null)) { this.setMonth(obj.month); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new CustomerPaymentProfileSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setMonth(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit GetCustomerPaymentProfileListRequest constructor');
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType() { return this.searchType; }
	setMonth(p_month) { this.month = p_month; }
	getMonth() { return this.month; }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { return this.sorting; }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { return this.paging; }
}

module.exports.GetCustomerPaymentProfileListRequest = GetCustomerPaymentProfileListRequest;

class ProfileTransRefundType extends ProfileTransAmountType {
	constructor(obj) {
		logger.debug('Enter ProfileTransRefundType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('creditCardNumberMasked' in obj) && (obj.creditCardNumberMasked != null)) { this.setCreditCardNumberMasked(obj.creditCardNumberMasked); }
			if(('bankRoutingNumberMasked' in obj) && (obj.bankRoutingNumberMasked != null)) { this.setBankRoutingNumberMasked(obj.bankRoutingNumberMasked); }
			if(('bankAccountNumberMasked' in obj) && (obj.bankAccountNumberMasked != null)) { this.setBankAccountNumberMasked(obj.bankAccountNumberMasked); }
			if(('order' in obj) && (obj.order != null)) { this.setOrder(new OrderExType(obj.order)); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setCreditCardNumberMasked(null);
			this.setBankRoutingNumberMasked(null);
			this.setBankAccountNumberMasked(null);
			this.setOrder(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransRefundType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { return this.customerShippingAddressId; }
	setCreditCardNumberMasked(p_creditCardNumberMasked) { this.creditCardNumberMasked = p_creditCardNumberMasked; }
	getCreditCardNumberMasked() { return this.creditCardNumberMasked; }
	setBankRoutingNumberMasked(p_bankRoutingNumberMasked) { this.bankRoutingNumberMasked = p_bankRoutingNumberMasked; }
	getBankRoutingNumberMasked() { return this.bankRoutingNumberMasked; }
	setBankAccountNumberMasked(p_bankAccountNumberMasked) { this.bankAccountNumberMasked = p_bankAccountNumberMasked; }
	getBankAccountNumberMasked() { return this.bankAccountNumberMasked; }
	setOrder(p_order) { this.order = p_order; }
	getOrder() { return this.order; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
}

module.exports.ProfileTransRefundType = ProfileTransRefundType;

class ARBGetSubscriptionListResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionListResponse' : this };
		logger.debug('Exit ARBGetSubscriptionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('totalNumInResultSet' in obj) && (obj.totalNumInResultSet != null)) { this.setTotalNumInResultSet(obj.totalNumInResultSet); }
			if(('subscriptionDetails' in obj) && (obj.subscriptionDetails != null)) { this.setSubscriptionDetails(new ArrayOfSubscription(obj.subscriptionDetails)); }
		}
		else {
			super();
			this.setTotalNumInResultSet(null);
			this.setSubscriptionDetails(null);
		}
		logger.debug('Exit ARBGetSubscriptionListResponse constructor');
	}

	setTotalNumInResultSet(p_totalNumInResultSet) { this.totalNumInResultSet = p_totalNumInResultSet; }
	getTotalNumInResultSet() { return this.totalNumInResultSet; }
	setSubscriptionDetails(p_subscriptionDetails) { this.subscriptionDetails = p_subscriptionDetails; }
	getSubscriptionDetails() { return this.subscriptionDetails; }
}

module.exports.ARBGetSubscriptionListResponse = ARBGetSubscriptionListResponse;

class OrderExType extends OrderType {
	constructor(obj) {
		logger.debug('Enter OrderExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('purchaseOrderNumber' in obj) && (obj.purchaseOrderNumber != null)) { this.setPurchaseOrderNumber(obj.purchaseOrderNumber); }
		}
		else {
			super();
			this.setPurchaseOrderNumber(null);
		}
		logger.debug('Exit OrderExType constructor');
	}

	setPurchaseOrderNumber(p_purchaseOrderNumber) { this.purchaseOrderNumber = p_purchaseOrderNumber; }
	getPurchaseOrderNumber() { return this.purchaseOrderNumber; }
}

module.exports.OrderExType = OrderExType;

class GetSettledBatchListRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetSettledBatchListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getSettledBatchListRequest' : this };
		logger.debug('Exit GetSettledBatchListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetSettledBatchListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('includeStatistics' in obj) && (obj.includeStatistics != null)) { this.setIncludeStatistics(obj.includeStatistics); }
			if(('firstSettlementDate' in obj) && (obj.firstSettlementDate != null)) { this.setFirstSettlementDate(obj.firstSettlementDate); }
			if(('lastSettlementDate' in obj) && (obj.lastSettlementDate != null)) { this.setLastSettlementDate(obj.lastSettlementDate); }
		}
		else {
			super();
			this.setIncludeStatistics(null);
			this.setFirstSettlementDate(null);
			this.setLastSettlementDate(null);
		}
		logger.debug('Exit GetSettledBatchListRequest constructor');
	}

	setIncludeStatistics(p_includeStatistics) { this.includeStatistics = p_includeStatistics; }
	getIncludeStatistics() { return this.includeStatistics; }
	setFirstSettlementDate(p_firstSettlementDate) { this.firstSettlementDate = p_firstSettlementDate; }
	getFirstSettlementDate() { return this.firstSettlementDate; }
	setLastSettlementDate(p_lastSettlementDate) { this.lastSettlementDate = p_lastSettlementDate; }
	getLastSettlementDate() { return this.lastSettlementDate; }
}

module.exports.GetSettledBatchListRequest = GetSettledBatchListRequest;

class ARBGetSubscriptionListRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionListRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionListRequest' : this };
		logger.debug('Exit ARBGetSubscriptionListRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionListRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('searchType' in obj) && (obj.searchType != null)) { this.setSearchType(obj.searchType); }
			if(('sorting' in obj) && (obj.sorting != null)) { this.setSorting(new ARBGetSubscriptionListSorting(obj.sorting)); }
			if(('paging' in obj) && (obj.paging != null)) { this.setPaging(new Paging(obj.paging)); }
		}
		else {
			super();
			this.setSearchType(null);
			this.setSorting(null);
			this.setPaging(null);
		}
		logger.debug('Exit ARBGetSubscriptionListRequest constructor');
	}

	setSearchType(p_searchType) { this.searchType = p_searchType; }
	getSearchType() { return this.searchType; }
	setSorting(p_sorting) { this.sorting = p_sorting; }
	getSorting() { return this.sorting; }
	setPaging(p_paging) { this.paging = p_paging; }
	getPaging() { return this.paging; }
}

module.exports.ARBGetSubscriptionListRequest = ARBGetSubscriptionListRequest;

class GetBatchStatisticsResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetBatchStatisticsResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getBatchStatisticsResponse' : this };
		logger.debug('Exit GetBatchStatisticsResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetBatchStatisticsResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batch' in obj) && (obj.batch != null)) { this.setBatch(new BatchDetailsType(obj.batch)); }
		}
		else {
			super();
			this.setBatch(null);
		}
		logger.debug('Exit GetBatchStatisticsResponse constructor');
	}

	setBatch(p_batch) { this.batch = p_batch; }
	getBatch() { return this.batch; }
}

module.exports.GetBatchStatisticsResponse = GetBatchStatisticsResponse;

class GetUnsettledTransactionListResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter GetUnsettledTransactionListResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getUnsettledTransactionListResponse' : this };
		logger.debug('Exit GetUnsettledTransactionListResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetUnsettledTransactionListResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactions' in obj) && (obj.transactions != null)) { this.setTransactions(new ArrayOfTransactionSummaryType(obj.transactions)); }
		}
		else {
			super();
			this.setTransactions(null);
		}
		logger.debug('Exit GetUnsettledTransactionListResponse constructor');
	}

	setTransactions(p_transactions) { this.transactions = p_transactions; }
	getTransactions() { return this.transactions; }
}

module.exports.GetUnsettledTransactionListResponse = GetUnsettledTransactionListResponse;

class CreateCustomerProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter CreateCustomerProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileResponse' : this };
		logger.debug('Exit CreateCustomerProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileIdList' in obj) && (obj.customerPaymentProfileIdList != null)) { this.setCustomerPaymentProfileIdList(new ArrayOfNumericString(obj.customerPaymentProfileIdList)); }
			if(('customerShippingAddressIdList' in obj) && (obj.customerShippingAddressIdList != null)) { this.setCustomerShippingAddressIdList(new ArrayOfNumericString(obj.customerShippingAddressIdList)); }
			if(('validationDirectResponseList' in obj) && (obj.validationDirectResponseList != null)) { this.setValidationDirectResponseList(new ArrayOfString(obj.validationDirectResponseList)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileIdList(null);
			this.setCustomerShippingAddressIdList(null);
			this.setValidationDirectResponseList(null);
		}
		logger.debug('Exit CreateCustomerProfileResponse constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileIdList(p_customerPaymentProfileIdList) { this.customerPaymentProfileIdList = p_customerPaymentProfileIdList; }
	getCustomerPaymentProfileIdList() { return this.customerPaymentProfileIdList; }
	setCustomerShippingAddressIdList(p_customerShippingAddressIdList) { this.customerShippingAddressIdList = p_customerShippingAddressIdList; }
	getCustomerShippingAddressIdList() { return this.customerShippingAddressIdList; }
	setValidationDirectResponseList(p_validationDirectResponseList) { this.validationDirectResponseList = p_validationDirectResponseList; }
	getValidationDirectResponseList() { return this.validationDirectResponseList; }
}

module.exports.CreateCustomerProfileResponse = CreateCustomerProfileResponse;

class LogoutResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter LogoutResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'logoutResponse' : this };
		logger.debug('Exit LogoutResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.LogoutResponse = LogoutResponse;

class SecurePaymentContainerResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter SecurePaymentContainerResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'securePaymentContainerResponse' : this };
		logger.debug('Exit SecurePaymentContainerResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter SecurePaymentContainerResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('opaqueData' in obj) && (obj.opaqueData != null)) { this.setOpaqueData(new OpaqueDataType(obj.opaqueData)); }
		}
		else {
			super();
			this.setOpaqueData(null);
		}
		logger.debug('Exit SecurePaymentContainerResponse constructor');
	}

	setOpaqueData(p_opaqueData) { this.opaqueData = p_opaqueData; }
	getOpaqueData() { return this.opaqueData; }
}

module.exports.SecurePaymentContainerResponse = SecurePaymentContainerResponse;

class DeleteCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter DeleteCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'deleteCustomerShippingAddressRequest' : this };
		logger.debug('Exit DeleteCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter DeleteCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit DeleteCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { return this.customerAddressId; }
}

module.exports.DeleteCustomerShippingAddressRequest = DeleteCustomerShippingAddressRequest;

class GetCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getCustomerShippingAddressRequest' : this };
		logger.debug('Exit GetCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit GetCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { return this.customerAddressId; }
}

module.exports.GetCustomerShippingAddressRequest = GetCustomerShippingAddressRequest;

class CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter CreateCustomerProfileFromTransactionRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createCustomerProfileFromTransactionRequest' : this };
		logger.debug('Exit CreateCustomerProfileFromTransactionRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateCustomerProfileFromTransactionRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
			if(('customer' in obj) && (obj.customer != null)) { this.setCustomer(new CustomerProfileBaseType(obj.customer)); }
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
		}
		else {
			super();
			this.setTransId(null);
			this.setCustomer(null);
			this.setCustomerProfileId(null);
		}
		logger.debug('Exit CreateCustomerProfileFromTransactionRequest constructor');
	}

	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
	setCustomer(p_customer) { this.customer = p_customer; }
	getCustomer() { return this.customer; }
	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
}

module.exports.CreateCustomerProfileFromTransactionRequest = CreateCustomerProfileFromTransactionRequest;

class ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ValidateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'validateCustomerPaymentProfileResponse' : this };
		logger.debug('Exit ValidateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ValidateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('directResponse' in obj) && (obj.directResponse != null)) { this.setDirectResponse(obj.directResponse); }
		}
		else {
			super();
			this.setDirectResponse(null);
		}
		logger.debug('Exit ValidateCustomerPaymentProfileResponse constructor');
	}

	setDirectResponse(p_directResponse) { this.directResponse = p_directResponse; }
	getDirectResponse() { return this.directResponse; }
}

module.exports.ValidateCustomerPaymentProfileResponse = ValidateCustomerPaymentProfileResponse;

class CustomerPaymentProfileMaskedType extends CustomerPaymentProfileBaseType {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileMaskedType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('payment' in obj) && (obj.payment != null)) { this.setPayment(new PaymentMaskedType(obj.payment)); }
			if(('driversLicense' in obj) && (obj.driversLicense != null)) { this.setDriversLicense(new DriversLicenseMaskedType(obj.driversLicense)); }
			if(('taxId' in obj) && (obj.taxId != null)) { this.setTaxId(obj.taxId); }
			if(('subscriptionIds' in obj) && (obj.subscriptionIds != null)) { this.setSubscriptionIds(new SubscriptionIdList(obj.subscriptionIds)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setPayment(null);
			this.setDriversLicense(null);
			this.setTaxId(null);
			this.setSubscriptionIds(null);
		}
		logger.debug('Exit CustomerPaymentProfileMaskedType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setPayment(p_payment) { this.payment = p_payment; }
	getPayment() { return this.payment; }
	setDriversLicense(p_driversLicense) { this.driversLicense = p_driversLicense; }
	getDriversLicense() { return this.driversLicense; }
	setTaxId(p_taxId) { this.taxId = p_taxId; }
	getTaxId() { return this.taxId; }
	setSubscriptionIds(p_subscriptionIds) { this.subscriptionIds = p_subscriptionIds; }
	getSubscriptionIds() { return this.subscriptionIds; }
}

module.exports.CustomerPaymentProfileMaskedType = CustomerPaymentProfileMaskedType;

class CreateTransactionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter CreateTransactionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'createTransactionResponse' : this };
		logger.debug('Exit CreateTransactionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter CreateTransactionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('transactionResponse' in obj) && (obj.transactionResponse != null)) { this.setTransactionResponse(new TransactionResponse(obj.transactionResponse)); }
			if(('profileResponse' in obj) && (obj.profileResponse != null)) { this.setProfileResponse(new CreateProfileResponse(obj.profileResponse)); }
		}
		else {
			super();
			this.setTransactionResponse(null);
			this.setProfileResponse(null);
		}
		logger.debug('Exit CreateTransactionResponse constructor');
	}

	setTransactionResponse(p_transactionResponse) { this.transactionResponse = p_transactionResponse; }
	getTransactionResponse() { return this.transactionResponse; }
	setProfileResponse(p_profileResponse) { this.profileResponse = p_profileResponse; }
	getProfileResponse() { return this.profileResponse; }
}

module.exports.CreateTransactionResponse = CreateTransactionResponse;

class GetBatchStatisticsRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter GetBatchStatisticsRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'getBatchStatisticsRequest' : this };
		logger.debug('Exit GetBatchStatisticsRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter GetBatchStatisticsRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('batchId' in obj) && (obj.batchId != null)) { this.setBatchId(obj.batchId); }
		}
		else {
			super();
			this.setBatchId(null);
		}
		logger.debug('Exit GetBatchStatisticsRequest constructor');
	}

	setBatchId(p_batchId) { this.batchId = p_batchId; }
	getBatchId() { return this.batchId; }
}

module.exports.GetBatchStatisticsRequest = GetBatchStatisticsRequest;

class UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter UpdateCustomerPaymentProfileRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerPaymentProfileRequest' : this };
		logger.debug('Exit UpdateCustomerPaymentProfileRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter UpdateCustomerPaymentProfileRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileExType(obj.paymentProfile)); }
			if(('validationMode' in obj) && (obj.validationMode != null)) { this.setValidationMode(obj.validationMode); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setPaymentProfile(null);
			this.setValidationMode(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
	setValidationMode(p_validationMode) { this.validationMode = p_validationMode; }
	getValidationMode() { return this.validationMode; }
}

module.exports.UpdateCustomerPaymentProfileRequest = UpdateCustomerPaymentProfileRequest;

class ARBGetSubscriptionResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionResponse' : this };
		logger.debug('Exit ARBGetSubscriptionResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('subscription' in obj) && (obj.subscription != null)) { this.setSubscription(new ARBSubscriptionMaskedType(obj.subscription)); }
		}
		else {
			super();
			this.setSubscription(null);
		}
		logger.debug('Exit ARBGetSubscriptionResponse constructor');
	}

	setSubscription(p_subscription) { this.subscription = p_subscription; }
	getSubscription() { return this.subscription; }
}

module.exports.ARBGetSubscriptionResponse = ARBGetSubscriptionResponse;

class ARBGetSubscriptionStatusResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter ARBGetSubscriptionStatusResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'ARBGetSubscriptionStatusResponse' : this };
		logger.debug('Exit ARBGetSubscriptionStatusResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter ARBGetSubscriptionStatusResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('status' in obj) && (obj.status != null)) { this.setStatus(obj.status); }
		}
		else {
			super();
			this.setStatus(null);
		}
		logger.debug('Exit ARBGetSubscriptionStatusResponse constructor');
	}

	setStatus(p_status) { this.status = p_status; }
	getStatus() { return this.status; }
}

module.exports.ARBGetSubscriptionStatusResponse = ARBGetSubscriptionStatusResponse;

class ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
	constructor(obj) {
		logger.debug('Enter ProfileTransPriorAuthCaptureType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
			if(('customerShippingAddressId' in obj) && (obj.customerShippingAddressId != null)) { this.setCustomerShippingAddressId(obj.customerShippingAddressId); }
			if(('transId' in obj) && (obj.transId != null)) { this.setTransId(obj.transId); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setCustomerPaymentProfileId(null);
			this.setCustomerShippingAddressId(null);
			this.setTransId(null);
		}
		logger.debug('Exit ProfileTransPriorAuthCaptureType constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
	setCustomerShippingAddressId(p_customerShippingAddressId) { this.customerShippingAddressId = p_customerShippingAddressId; }
	getCustomerShippingAddressId() { return this.customerShippingAddressId; }
	setTransId(p_transId) { this.transId = p_transId; }
	getTransId() { return this.transId; }
}

module.exports.ProfileTransPriorAuthCaptureType = ProfileTransPriorAuthCaptureType;

class UpdateCustomerShippingAddressResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter UpdateCustomerShippingAddressResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerShippingAddressResponse' : this };
		logger.debug('Exit UpdateCustomerShippingAddressResponse getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.UpdateCustomerShippingAddressResponse = UpdateCustomerShippingAddressResponse;

class AuthenticateTestRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter AuthenticateTestRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'authenticateTestRequest' : this };
		logger.debug('Exit AuthenticateTestRequest getJSON');
		return obj;
	}

	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.AuthenticateTestRequest = AuthenticateTestRequest;

class UpdateCustomerShippingAddressRequest extends ANetApiRequest {
	getJSON() { 
		logger.debug('Enter UpdateCustomerShippingAddressRequest getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerShippingAddressRequest' : this };
		logger.debug('Exit UpdateCustomerShippingAddressRequest getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter UpdateCustomerShippingAddressRequest constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerProfileId' in obj) && (obj.customerProfileId != null)) { this.setCustomerProfileId(obj.customerProfileId); }
			if(('address' in obj) && (obj.address != null)) { this.setAddress(new CustomerAddressExType(obj.address)); }
		}
		else {
			super();
			this.setCustomerProfileId(null);
			this.setAddress(null);
		}
		logger.debug('Exit UpdateCustomerShippingAddressRequest constructor');
	}

	setCustomerProfileId(p_customerProfileId) { this.customerProfileId = p_customerProfileId; }
	getCustomerProfileId() { return this.customerProfileId; }
	setAddress(p_address) { this.address = p_address; }
	getAddress() { return this.address; }
}

module.exports.UpdateCustomerShippingAddressRequest = UpdateCustomerShippingAddressRequest;

class UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
	getJSON() { 
		logger.debug('Enter UpdateCustomerPaymentProfileResponse getJSON');
		utils.delete_null_properties(this, true);
		var obj = { 'updateCustomerPaymentProfileResponse' : this };
		logger.debug('Exit UpdateCustomerPaymentProfileResponse getJSON');
		return obj;
	}

	constructor(obj) {
		logger.debug('Enter UpdateCustomerPaymentProfileResponse constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('validationDirectResponse' in obj) && (obj.validationDirectResponse != null)) { this.setValidationDirectResponse(obj.validationDirectResponse); }
		}
		else {
			super();
			this.setValidationDirectResponse(null);
		}
		logger.debug('Exit UpdateCustomerPaymentProfileResponse constructor');
	}

	setValidationDirectResponse(p_validationDirectResponse) { this.validationDirectResponse = p_validationDirectResponse; }
	getValidationDirectResponse() { return this.validationDirectResponse; }
}

module.exports.UpdateCustomerPaymentProfileResponse = UpdateCustomerPaymentProfileResponse;

class CustomerAddressExType extends CustomerAddressType {
	constructor(obj) {
		logger.debug('Enter CustomerAddressExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerAddressId' in obj) && (obj.customerAddressId != null)) { this.setCustomerAddressId(obj.customerAddressId); }
		}
		else {
			super();
			this.setCustomerAddressId(null);
		}
		logger.debug('Exit CustomerAddressExType constructor');
	}

	setCustomerAddressId(p_customerAddressId) { this.customerAddressId = p_customerAddressId; }
	getCustomerAddressId() { return this.customerAddressId; }
}

module.exports.CustomerAddressExType = CustomerAddressExType;

class ProfileTransAuthOnlyType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthOnlyType = ProfileTransAuthOnlyType;

class SubscriptionCustomerProfileType extends CustomerProfileExType {
	constructor(obj) {
		logger.debug('Enter SubscriptionCustomerProfileType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('paymentProfile' in obj) && (obj.paymentProfile != null)) { this.setPaymentProfile(new CustomerPaymentProfileMaskedType(obj.paymentProfile)); }
			if(('shippingProfile' in obj) && (obj.shippingProfile != null)) { this.setShippingProfile(new CustomerAddressExType(obj.shippingProfile)); }
		}
		else {
			super();
			this.setPaymentProfile(null);
			this.setShippingProfile(null);
		}
		logger.debug('Exit SubscriptionCustomerProfileType constructor');
	}

	setPaymentProfile(p_paymentProfile) { this.paymentProfile = p_paymentProfile; }
	getPaymentProfile() { return this.paymentProfile; }
	setShippingProfile(p_shippingProfile) { this.shippingProfile = p_shippingProfile; }
	getShippingProfile() { return this.shippingProfile; }
}

module.exports.SubscriptionCustomerProfileType = SubscriptionCustomerProfileType;

class ProfileTransAuthCaptureType extends ProfileTransOrderType {
	constructor(obj) { if(arguments.length == 1) {super(obj);} else {super();} }

}

module.exports.ProfileTransAuthCaptureType = ProfileTransAuthCaptureType;

class CustomerProfileMaskedType extends CustomerProfileExType {
	constructor(obj) {
		logger.debug('Enter CustomerProfileMaskedType constructor');
		if(arguments.length == 1) {
			super(obj);
			if((obj.paymentProfiles != undefined) && (obj.paymentProfiles != null)) {
				var paymentProfilesList = [];
				obj.paymentProfiles.forEach(function(item) {paymentProfilesList.push(new CustomerPaymentProfileMaskedType(item));}); 
				this.setPaymentProfiles(paymentProfilesList);
			}
			if((obj.shipToList != undefined) && (obj.shipToList != null)) {
				var shipToListList = [];
				obj.shipToList.forEach(function(item) {shipToListList.push(new CustomerAddressExType(item));}); 
				this.setShipToList(shipToListList);
			}
		}
		else {
			super();
			this.setPaymentProfiles(null);
			this.setShipToList(null);
		}
		logger.debug('Exit CustomerProfileMaskedType constructor');
	}

	setPaymentProfiles(p_paymentProfiles) { this.paymentProfiles = p_paymentProfiles; }
	getPaymentProfiles() { return this.paymentProfiles; }
	setShipToList(p_shipToList) { this.shipToList = p_shipToList; }
	getShipToList() { return this.shipToList; }
}

module.exports.CustomerProfileMaskedType = CustomerProfileMaskedType;

class ProfileTransCaptureOnlyType extends ProfileTransOrderType {
	constructor(obj) {
		logger.debug('Enter ProfileTransCaptureOnlyType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('approvalCode' in obj) && (obj.approvalCode != null)) { this.setApprovalCode(obj.approvalCode); }
		}
		else {
			super();
			this.setApprovalCode(null);
		}
		logger.debug('Exit ProfileTransCaptureOnlyType constructor');
	}

	setApprovalCode(p_approvalCode) { this.approvalCode = p_approvalCode; }
	getApprovalCode() { return this.approvalCode; }
}

module.exports.ProfileTransCaptureOnlyType = ProfileTransCaptureOnlyType;

class CustomerPaymentProfileExType extends CustomerPaymentProfileType {
	constructor(obj) {
		logger.debug('Enter CustomerPaymentProfileExType constructor');
		if(arguments.length == 1) {
			super(obj);
			if(('customerPaymentProfileId' in obj) && (obj.customerPaymentProfileId != null)) { this.setCustomerPaymentProfileId(obj.customerPaymentProfileId); }
		}
		else {
			super();
			this.setCustomerPaymentProfileId(null);
		}
		logger.debug('Exit CustomerPaymentProfileExType constructor');
	}

	setCustomerPaymentProfileId(p_customerPaymentProfileId) { this.customerPaymentProfileId = p_customerPaymentProfileId; }
	getCustomerPaymentProfileId() { return this.customerPaymentProfileId; }
}

module.exports.CustomerPaymentProfileExType = CustomerPaymentProfileExType;

const MessageTypeEnum = { 
	OK : 'Ok',
	ERROR : 'Error'
};
module.exports.MessageTypeEnum = MessageTypeEnum;

const ARBGetSubscriptionListSearchTypeEnum = { 
	CARDEXPIRINGTHISMONTH : 'cardExpiringThisMonth',
	SUBSCRIPTIONACTIVE : 'subscriptionActive',
	SUBSCRIPTIONEXPIRINGTHISMONTH : 'subscriptionExpiringThisMonth',
	SUBSCRIPTIONINACTIVE : 'subscriptionInactive'
};
module.exports.ARBGetSubscriptionListSearchTypeEnum = ARBGetSubscriptionListSearchTypeEnum;

const ARBSubscriptionStatusEnum = { 
	ACTIVE : 'active',
	EXPIRED : 'expired',
	SUSPENDED : 'suspended',
	CANCELED : 'canceled',
	TERMINATED : 'terminated'
};
module.exports.ARBSubscriptionStatusEnum = ARBSubscriptionStatusEnum;

const ARBGetSubscriptionListOrderFieldEnum = { 
	ID : 'id',
	NAME : 'name',
	STATUS : 'status',
	CREATETIMESTAMPUTC : 'createTimeStampUTC',
	LASTNAME : 'lastName',
	FIRSTNAME : 'firstName',
	ACCOUNTNUMBER : 'accountNumber',
	AMOUNT : 'amount',
	PASTOCCURRENCES : 'pastOccurrences'
};
module.exports.ARBGetSubscriptionListOrderFieldEnum = ARBGetSubscriptionListOrderFieldEnum;

const BankAccountTypeEnum = { 
	CHECKING : 'checking',
	SAVINGS : 'savings',
	BUSINESSCHECKING : 'businessChecking'
};
module.exports.BankAccountTypeEnum = BankAccountTypeEnum;

const EncryptionAlgorithmType = { 
	TDES : 'TDES',
	AES : 'AES',
	RSA : 'RSA'
};
module.exports.EncryptionAlgorithmType = EncryptionAlgorithmType;

const OperationType = { 
	DECRYPT : 'DECRYPT'
};
module.exports.OperationType = OperationType;

const SplitTenderStatusEnum = { 
	COMPLETED : 'completed',
	HELD : 'held',
	VOIDED : 'voided'
};
module.exports.SplitTenderStatusEnum = SplitTenderStatusEnum;

const ValidationModeEnum = { 
	NONE : 'none',
	TESTMODE : 'testMode',
	LIVEMODE : 'liveMode',
	OLDLIVEMODE : 'oldLiveMode'
};
module.exports.ValidationModeEnum = ValidationModeEnum;

const WebCheckOutTypeEnum = { 
	PAN : 'PAN',
	TOKEN : 'TOKEN'
};
module.exports.WebCheckOutTypeEnum = WebCheckOutTypeEnum;

const DeviceActivationEnum = { 
	ACTIVATE : 'Activate',
	DISABLE : 'Disable'
};
module.exports.DeviceActivationEnum = DeviceActivationEnum;

const EcheckTypeEnum = { 
	PPD : 'PPD',
	WEB : 'WEB',
	CCD : 'CCD',
	TEL : 'TEL',
	ARC : 'ARC',
	BOC : 'BOC'
};
module.exports.EcheckTypeEnum = EcheckTypeEnum;

const AccountTypeEnum = { 
	VISA : 'Visa',
	MASTERCARD : 'MasterCard',
	AMERICANEXPRESS : 'AmericanExpress',
	DISCOVER : 'Discover',
	JCB : 'JCB',
	DINERSCLUB : 'DinersClub',
	ECHECK : 'eCheck'
};
module.exports.AccountTypeEnum = AccountTypeEnum;

const PaymentMethodEnum = { 
	CREDITCARD : 'creditCard',
	ECHECK : 'eCheck',
	PAYPAL : 'payPal'
};
module.exports.PaymentMethodEnum = PaymentMethodEnum;

const EncodingType = { 
	BASE64 : 'Base64',
	HEX : 'Hex'
};
module.exports.EncodingType = EncodingType;

const PermissionsEnum = { 
	API_MERCHANT_BASICREPORTING : 'API_Merchant_BasicReporting',
	SUBMIT_CHARGE : 'Submit_Charge',
	SUBMIT_REFUND : 'Submit_Refund',
	SUBMIT_UPDATE : 'Submit_Update',
	MOBILE_ADMIN : 'Mobile_Admin'
};
module.exports.PermissionsEnum = PermissionsEnum;

const TransactionStatusEnum = { 
	AUTHORIZEDPENDINGCAPTURE : 'authorizedPendingCapture',
	CAPTUREDPENDINGSETTLEMENT : 'capturedPendingSettlement',
	COMMUNICATIONERROR : 'communicationError',
	REFUNDSETTLEDSUCCESSFULLY : 'refundSettledSuccessfully',
	REFUNDPENDINGSETTLEMENT : 'refundPendingSettlement',
	APPROVEDREVIEW : 'approvedReview',
	DECLINED : 'declined',
	COULDNOTVOID : 'couldNotVoid',
	EXPIRED : 'expired',
	GENERALERROR : 'generalError',
	PENDINGFINALSETTLEMENT : 'pendingFinalSettlement',
	PENDINGSETTLEMENT : 'pendingSettlement',
	FAILEDREVIEW : 'failedReview',
	SETTLEDSUCCESSFULLY : 'settledSuccessfully',
	SETTLEMENTERROR : 'settlementError',
	UNDERREVIEW : 'underReview',
	UPDATINGSETTLEMENT : 'updatingSettlement',
	VOIDED : 'voided',
	FDSPENDINGREVIEW : 'FDSPendingReview',
	FDSAUTHORIZEDPENDINGREVIEW : 'FDSAuthorizedPendingReview',
	RETURNEDITEM : 'returnedItem',
	CHARGEBACK : 'chargeback',
	CHARGEBACKREVERSAL : 'chargebackReversal',
	AUTHORIZEDPENDINGRELEASE : 'authorizedPendingRelease'
};
module.exports.TransactionStatusEnum = TransactionStatusEnum;

const CustomerTypeEnum = { 
	INDIVIDUAL : 'individual',
	BUSINESS : 'business'
};
module.exports.CustomerTypeEnum = CustomerTypeEnum;

const ARBSubscriptionUnitEnum = { 
	DAYS : 'days',
	MONTHS : 'months'
};
module.exports.ARBSubscriptionUnitEnum = ARBSubscriptionUnitEnum;

const SettingNameEnum = { 
	EMAILCUSTOMER : 'emailCustomer',
	MERCHANTEMAIL : 'merchantEmail',
	ALLOWPARTIALAUTH : 'allowPartialAuth',
	HEADEREMAILRECEIPT : 'headerEmailReceipt',
	FOOTEREMAILRECEIPT : 'footerEmailReceipt',
	RECURRINGBILLING : 'recurringBilling',
	DUPLICATEWINDOW : 'duplicateWindow',
	TESTREQUEST : 'testRequest',
	HOSTEDPROFILERETURNURL : 'hostedProfileReturnUrl',
	HOSTEDPROFILERETURNURLTEXT : 'hostedProfileReturnUrlText',
	HOSTEDPROFILEPAGEBORDERVISIBLE : 'hostedProfilePageBorderVisible',
	HOSTEDPROFILEIFRAMECOMMUNICATORURL : 'hostedProfileIFrameCommunicatorUrl',
	HOSTEDPROFILEHEADINGBGCOLOR : 'hostedProfileHeadingBgColor',
	HOSTEDPROFILEVALIDATIONMODE : 'hostedProfileValidationMode',
	HOSTEDPROFILEBILLINGADDRESSREQUIRED : 'hostedProfileBillingAddressRequired',
	HOSTEDPROFILECARDCODEREQUIRED : 'hostedProfileCardCodeRequired',
	HOSTEDPROFILEBILLINGADDRESSOPTIONS : 'hostedProfileBillingAddressOptions',
	HOSTEDPROFILEMANAGEOPTIONS : 'hostedProfileManageOptions'
};
module.exports.SettingNameEnum = SettingNameEnum;

const TransactionTypeEnum = { 
	AUTHONLYTRANSACTION : 'authOnlyTransaction',
	AUTHCAPTURETRANSACTION : 'authCaptureTransaction',
	CAPTUREONLYTRANSACTION : 'captureOnlyTransaction',
	REFUNDTRANSACTION : 'refundTransaction',
	PRIORAUTHCAPTURETRANSACTION : 'priorAuthCaptureTransaction',
	VOIDTRANSACTION : 'voidTransaction',
	GETDETAILSTRANSACTION : 'getDetailsTransaction',
	AUTHONLYCONTINUETRANSACTION : 'authOnlyContinueTransaction',
	AUTHCAPTURECONTINUETRANSACTION : 'authCaptureContinueTransaction'
};
module.exports.TransactionTypeEnum = TransactionTypeEnum;

const CustomerPaymentProfileOrderFieldEnum = { 
	ID : 'id'
};
module.exports.CustomerPaymentProfileOrderFieldEnum = CustomerPaymentProfileOrderFieldEnum;

const AUJobTypeEnum = { 
	ALL : 'all',
	UPDATES : 'updates',
	DELETES : 'deletes'
};
module.exports.AUJobTypeEnum = AUJobTypeEnum;

const CardTypeEnum = { 
	VISA : 'Visa',
	MASTERCARD : 'MasterCard',
	AMERICANEXPRESS : 'AmericanExpress',
	DISCOVER : 'Discover',
	JCB : 'JCB',
	DINERSCLUB : 'DinersClub'
};
module.exports.CardTypeEnum = CardTypeEnum;

const FDSFilterActionEnum = { 
	REJECT : 'reject',
	DECLINE : 'decline',
	HOLD : 'hold',
	AUTHANDHOLD : 'authAndHold',
	REPORT : 'report'
};
module.exports.FDSFilterActionEnum = FDSFilterActionEnum;

const CustomerPaymentProfileSearchTypeEnum = { 
	CARDSEXPIRINGINMONTH : 'cardsExpiringInMonth'
};
module.exports.CustomerPaymentProfileSearchTypeEnum = CustomerPaymentProfileSearchTypeEnum;

const SettlementStateEnum = { 
	SETTLEDSUCCESSFULLY : 'settledSuccessfully',
	SETTLEMENTERROR : 'settlementError',
	PENDINGSETTLEMENT : 'pendingSettlement'
};
module.exports.SettlementStateEnum = SettlementStateEnum;
