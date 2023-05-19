// Include the html2canvas and FileSaver.js libraries by adding the respective script tags to your HTML file

// Function to take a screenshot of the webpage

function takeScreenshotAndSendToWhatsApp(message) {

  // Use html2canvas library to capture the screenshot

  html2canvas(document.body).then(function(canvas) {

    // Convert the screenshot to a data URL

    var screenshotDataUrl = canvas.toDataURL();

    // Create a new anchor element to download the screenshot

    var link = document.createElement('a');

    link.href = screenshotDataUrl;

    link.download = 'screenshot.png';

    // Simulate a click event on the anchor element to trigger the download

    link.click();

    // Use WhatsApp API to open the WhatsApp chat and send the message

    // Replace '1234567890' with the recipient's phone number

    // Replace 'Hello, check out this screenshot!' with your desired message

    window.open(

      'https://wa.me/919931449755?text=' + encodeURIComponent(message),

      '_blank'

    );

  });

}

// Call the function with your desired message

takeScreenshotAndSendToWhatsApp('Thankyou😊😊');

