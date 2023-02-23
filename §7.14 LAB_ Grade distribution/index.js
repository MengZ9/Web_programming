function parseScores(scoresString) {
   // TODO: Compete the function
   let result = scoresString.trim().split(" ");
   //console.log(result);
   return result;
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let empty = [0, 0, 0, 0, 0]
   if(scoresArray.length == 0){
      return empty;
   }
   let A = 0;
   let B = 0;
   let C = 0;
   let D = 0;
   let F = 0;
   for(let item of scoresArray){
      if(item >= 90){
         A++;
      }
      else if (item >= 80 && item < 90){
         B++;
      }
      else if (item >= 70 && item < 80){
         C++;
      }
      else if (item >= 60 && item < 70){
         D++;
      }
      else if (item < 60){
         F++;
      }
   }

   let result = [A, B, C, D, F];
   return result;

}

function setTableContent(userInput) {
   // TODO: Compete the function

   document.getElementById("firstRow").innerHTML = " ";
   document.getElementById("thirdRow").innerHTML = " ";

   let score = parseScores(userInput);
   let distribution = buildDistributionArray(score);

   let graph = document.getElementById("firstRow");

   // <td><div style="height:30px" class="bar0"></div></td>
   for(let j = 0; j < distribution.length; j++){
      let div = graph.insertCell(j);
      div.innerHTML = "<div class='bar" + j + "' style='height:" + (distribution[j] * 10) + "px;'></div>";
   }
   
   
   let grade = document.getElementById("thirdRow");
   for(let i = 0; i < distribution.length; i++){
      grade.insertCell(i).innerHTML = distribution[i];
   }

   
}



// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
setTableContent("88 64 73 77 81 79 14 92 71");