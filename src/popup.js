 var request = require('request');
 var cheerio = require('cheerio');
 const accountSid = 'AC8081e11c434cf78d7337089f667b86d8';
const authToken = '526fe5700e5f123196b939cbbfe04332';
const client = require('twilio')(accountSid, authToken);


function click(e) {
 chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
     page = tabs[0].url;
     phone = document.getElementById('number').value;
     alert(typeof(phone));

    request(page, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('.story-body__inner p').each(function(i, element){
          var a = $(this).prev();
          var data = a.text();
          // console.log(data);
          client.messages.create(
            {
              body: data ,
              to: phone,
              from: '441692252053',
            })
            .then((message) => alert(message.sid));
        });
      }
    });
   });
}
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("mybutton");
  button.addEventListener('click', click);
});
