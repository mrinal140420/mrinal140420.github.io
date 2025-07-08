function openRazorpay() {
    const options = {
        key: "rzp_test_gmAWg49cWZXEZQ",
        amount: 10000,
        currency: "INR",
        name: "Mrinal Sahoo",
        description: "Support my work",
        image: "assets/images/profile.jpg",
        handler: function (response) {
            alert("Payment successful! 🎉 Thank you for your support.");
            window.location.href = "thankyou.html";
        },
        prefill: {
            name: "Supporter",
            email: ""
        },
        notes: {
            purpose: "Buy Me a Coffee"
        },
        theme: {
            color: "#007bff"
        }
    };
    const paymentObject = new Razorpay(options);
    paymentObject.open();
}