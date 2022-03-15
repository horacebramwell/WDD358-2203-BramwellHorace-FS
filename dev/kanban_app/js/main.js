class App {
  constructor() {
    console.log("App started successfully");
    this.controller = new Controller();
  }

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
      return App.instance;
    } else {
      throw "App is already running";
    }
  }
}

class Controller {
  constructor() {
    this.loadData();
    this.model = new Model();
    this.view = new View();
    this.addEventListeners();
  }

  addEventListeners() {
    const main = document.querySelector("main");
    const imgModalBtn = document.querySelector("#avatar-btn");
    const bgColorModalBtn = document.querySelector("#background-color-btn");

    main.addEventListener("click", (e) => this.displayTaskModal(e));
    imgModalBtn.addEventListener("click", this.displayImageUploadModal);
    bgColorModalBtn.addEventListener("click", this.displayBackgroundColorModal);
  }

  loadData() {
    const loadingHTML = `<div id='loading'></div>`;
    const PROJECT_NAME = "sturdy-torpid-throat";
    const ACCESS_TOKEN = "5b1064585f4ab8706d275f90";
    const URL = `https://${PROJECT_NAME}.glitch.me/api/lists?accessToken=${ACCESS_TOKEN}`;
    const option = { method: "GET" };
    Utils.fectData(URL, option);
    Utils.loadFromLocalStorage();
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', loadingHTML);
    }

  displayTaskModal(e) {
    let target = e.target;
    let parent = target.parentElement;
    let previousActiveElement = document.activeElement;
  
    if (target.className === "add-task-btn") {
      let sectionID = parent.parentElement.dataset.id;
      sendListID(sectionID);
      const addTaskModal = new AddTaskModal();
      addTaskModal.displayModal(previousActiveElement);
    }

    function sendListID(listID) {
      const sendListIDEvent = new Event("id_captured");
      sendListIDEvent.listID = listID;
      document.dispatchEvent(sendListIDEvent);
    } 
  }

  displayBackgroundColorModal() {
    let previousActiveElement = document.activeElement;
    const backgroundColorModal = new BackgroundColorModal();
    backgroundColorModal.displayModal(previousActiveElement);
  }

  displayImageUploadModal() {
    let previousActiveElement = document.activeElement;
    const uploadAvatarModal = new UploadAvatarModal();
    uploadAvatarModal.displayModal(previousActiveElement);
  }
}

class Model {
  constructor() {
    document.addEventListener("task_created", (e) => this.postToAPI(e));
    document.addEventListener("id_captured", (e) => this.setListID(e));
    this.listID;
  }

  setListID(e) {
    this.listID = e.listID;
  }

  postToAPI(e) {
    const PROJECT_NAME = "sturdy-torpid-throat";
    const ACCESS_TOKEN = "5b1064585f4ab8706d275f90";
    const URL = `https://${PROJECT_NAME}.glitch.me/api/items?accessToken=${ACCESS_TOKEN}`;

    const taskToSend = {
      title: e.task.title,
      listId: this.listID,
      description: e.task.description,
      priority: e.task.priority,
      dueDate: e.task.dueDate,
    };

    const config = {
      method: "POST",
      body: JSON.stringify(taskToSend),
      headers: {
        "content-type": "application/json",
      },
    };

    Utils.postData(URL, config);
    this.sendTaskToView(e.task, this.listID);
  }

  sendTaskToView(task, listID) {
    const taskPostedEvent = new Event("task_sent");
    taskPostedEvent.task = task;
    taskPostedEvent.listID = listID;
    document.dispatchEvent(taskPostedEvent);
  }
}

class View {
  constructor() {
    document.addEventListener("data_loaded", (e) => this.displayTask(e));
    document.addEventListener("task_sent", (e) => this.addTaskToDOM(e));
  }

  addTaskToDOM(e) {
    const sections = document.querySelectorAll('section');
    const articleHTML = `
    <article class="task">
      <p class = "task__priority" data-priority="${e.task.priority.toLowerCase()}">${e.task.priority}</p>
      <h3>${e.task.title}</h3>
      <p>${e.task.description}</p>
      <p class="task__date"><time datetime="${e.task.dueDate}">${e.task.dueDate}</time></p>
    </article>
    `;
    sections[e.listID - 1].querySelector('header').insertAdjacentHTML('afterend', articleHTML);
  }

  displayTask(e) {
    document.querySelector('#loading').remove();
    e.taskList.forEach((list) => {
      const sectionHTML = `
      <section data-id = "${list.id}">
      <header>
      <h2>${list.title}</h2>
      <button class = 'add-task-btn' aria-label = 'Add Task'>Task</button>
      </header>
      </section>
      `;

      const main = document.querySelector("main");
      main.insertAdjacentHTML("beforeend", sectionHTML);
    }); // *** end of forEach

    const sections = document.querySelectorAll("section");

    for (let i = 0; i < e.taskList.length; i++) {
      e.taskList[i].items.sort(function (a, b) {
        return b.id - a.id;
      });

      e.taskList[i].items.forEach((item) => {
        const articleHTML = `
            <article class = "task">
                <p class = "task__priority" data-priority="${item.priority.toLowerCase()}">${
          item.priority
        }</p>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class ="task__date"><time datetime="${item.dueDate}">${
          item.dueDate
        }</time></p>
            </article>
            `;

        sections[i].insertAdjacentHTML("beforeend", articleHTML);
      });
    }
  }
}

(() => {
  const app = App.getInstance();
})();
