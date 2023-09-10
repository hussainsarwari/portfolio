export class myfunction {
  // XMLHTTPRequest
  request(method, url, a, data) {
    // debugger
    const request = new XMLHttpRequest();

    if (method == "get" || method == "GET") {
      // get request
      request.open(method, url, true);

      request.onload = () => {
        console.log(request.status);
        if (request.status == 200) {
          alert(9);
          if (a.tagName == "IMG") {
            alert("it is image");
          } else if (a.tagName == "A") {
            alert("it is a link");
          } else {
            alert(0);
          }
        } else {
          console.log("your request failed :(");
        }
      };

      request.send();
    } else if (method == "post" || method == "POST") {
      //post request
      request.open(method, url, true);
      request.setRequestHeader("accept", "application/json");
      request.setRequestHeader("content-type", "application/json");

      request.onload = function () {
        if (request.readyState == 4) {
          console.log("your request sent :)");
        } else {
          console.error("so sorry your request does not sent  ");
        }
      };
      request.send(JSON.stringify(data));
    } else if (method == "put" || method == "PUT") {
      //put request

      request.open(method, url, true);
      request.setRequestHeader("content-type", "application/json");
      request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
          console.log(request.responseText);
        } else {
          console.error("sorry your request is not recognized!!!");
        }
      };
      request.send(JSON.stringify(data));
    } else if (method == "delete" || method == "DELETE") {
      request.open(method, url, true);
      request.send(null);
      request.onload = function () {
        if (request.readyState == 4 && request.status == "204") {
          console.log("your request done ");
        } else {
          console.log("sorry your request is not recognized   ");
        }
      };
    } else if (method == "patch" || method == "PATCH") {
      request.open(method, url, true);
      request.send(null);
    } else {
      alert(
        "sorry but your request method is not recognized !!!  pleases try again"
      );
    }
  }

  // change class name function
  changeclassname(selectElement, chooseNewClassName) {
    if (typeof selectElement == "object") {
      selectElement.classList.add(chooseNewClassName);
    } else {
      document.querySelector(selectElement).classList.add(chooseNewClassName);
    }
  }
  // remove class name function

  removeClassName(element, classname) {
    if (typeof element == "object") {
      element.classList.remove(classname);
    } else {
      document.querySelector(element).classList.remove(classname);
    }
  }

  // select elemetn function

  select(element) {
    return document.querySelector(element);
  }
}
