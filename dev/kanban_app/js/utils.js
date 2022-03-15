class Utils {
  constructor() {}

  static preventDefault(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  static disableScroll() {
    window.scrollTo(0, 0);
  }

  static removeInert(modal) {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach((child) => {
      if (child !== modal) child.inert = false;
    });
  }

  static addInert(modal) {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach((child) => {
      if (child !== modal) child.inert = true;
    });
  }

  static fectData(URL, option) {
    fetch(URL, option)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        const dataLoadedEvent = new Event("data_loaded");
        dataLoadedEvent.taskList = data;
        document.dispatchEvent(dataLoadedEvent);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static postData(URL, config) {
    console.log(URL);
    console.log(config);

    fetch(URL, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((responseAsJson) => {
        console.log(responseAsJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static validateOnEntry(e) {
    let target = e.target;
    let parent = target.parentElement;
    let characterLength = 5;

    if (target.name == "Description") {
      characterLength = 20;
    }

    const errorLabel = `<label class = "error" for = "${target.id}">${target.name} should be at least ${characterLength} characters long.</label>`;

    if (
      target.value.trim() == 0 ||
      target.value.trim().length < characterLength
    ) {
      if (!parent.querySelector(".error")) {
        parent.insertAdjacentHTML("beforeend", errorLabel);
        target.style.borderColor = "red";
      }
    } else {
      if (parent.querySelector(".error")) {
        parent.removeChild(parent.querySelector(".error"));
        target.style.borderColor = "green";
      }
    }
  }

  static validateOnSelect(e) {
    let target = e.target;

    if (target.id == "priority") {
      if (target.selectedIndex === 0) {
        target.style.borderColor = "red";
      } else {
        target.style.borderColor = "green";
      }
    } else {
      if (target.value.trim() === "") {
        target.style.borderColor = "red";
      } else {
        target.style.borderColor = "green";
      }
    }
  }

  static saveToLocalStorage(name, dataToSave) {
    localStorage.setItem(name, dataToSave);
  }

  static loadFromLocalStorage() {
    const body = document.querySelector("body");
    const userProfileImage = document.querySelector("#user-profile-img");

    const recentUserImage = localStorage.getItem("recent-avatar");
    const recentBackgroundColor = localStorage.getItem("background-color");

    if (recentUserImage) {
      userProfileImage.setAttribute("src", recentUserImage);
    }

    if (recentBackgroundColor) {
      body.style.backgroundColor = recentBackgroundColor;
    }
  }
}
