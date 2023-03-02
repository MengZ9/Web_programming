window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest();
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.addEventListener("load", responseReceivedHandler); 
   xhr.send();


         //default
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";
   document.querySelector("#quotes").innerHTML = html;
}

// TODO: Add responseReceivedHandler() here

function responseReceivedHandler(){
   const quote = this.response;
   document.querySelector("#quotes").innerHTML = "";
   if(this.status === 200){
      let html = "<ol>";
      for (let j = 0; j < quote.length; j++) {
         html += `<li>${quote[j].quote} - ${quote[j].source}</li>`;
      }
      html += "</ol>";
     document.querySelector("#quotes").innerHTML = html;
   }
   else{
      document.querySelector("#quotes").innerHTML = "";
      document.querySelector("#quotes").innerHTML = `Topic '${this.response.error}' not found`; 
   }
}