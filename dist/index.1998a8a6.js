function payWithMonnify() {
    MonnifySDK?.initialize({
        amount: 100,
        currency: "NGN",
        reference: new String(new Date().getTime()),
        customerFullName: "Damilare Ogunnaike",
        customerEmail: "ogunnaike.damilare@gmail.com",
        apiKey: "MK_TEST_SAF7HR5F3F",
        contractCode: "4934121686",
        paymentDescription: "Lahray World",
        metadata: {
            "name": "Damilare",
            "age": 45
        },
        // incomeSplitConfig: [{
        //     "subAccountCode": "MFY_SUB_342113621921",
        //     "feePercentage": 50,
        //     "splitAmount": 1900,
        //     "feeBearer": true
        // }, {
        //     "subAccountCode": "MFY_SUB_342113621922",
        //     "feePercentage": 50,
        //     "splitAmount": 2100,
        //     "feeBearer": true
        // }],
        onLoadStart: ()=>{
            console.log("loading has started");
        },
        onLoadComplete: ()=>{
            console.log("SDK is UP and running");
        },
        onComplete: function(response) {
            //Implement what happens when the transaction is completed.
            console.log(response);
        },
        onClose: function(data) {
            //Implement what should happen when the modal is closed here
            console.log(data);
        }
    });
}

//# sourceMappingURL=index.1998a8a6.js.map
