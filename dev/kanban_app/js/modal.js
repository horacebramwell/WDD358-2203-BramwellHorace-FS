class Modal {
    constructor() {
      this.modal;
      this.closeBtn;
      this.cancelBtn;
      this.submitBtn;
      this.form;
    }
  
    setVariables() {
      this.modal = document.querySelector("#modal");
      this.closeBtn = document.querySelector("#close-btn");
      this.cancelBtn = document.querySelector("#cancel-btn");
      this.submitBtn = document.querySelector("#submit-btn");
      this.form = document.querySelector("#modal_form");
    }
  
    setExitTriggers(previousActiveElement) {
      let KEYCODE = { ESC: 27 };
      let KEY = { ESCAPE: "Escape" };
      const escapeTriggers = [this.closeBtn, this.cancelBtn];
  
      escapeTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          this.closeModal(previousActiveElement);
        });
      });
  
      this.modal.addEventListener('click', e => {
          if(e.target === this.modal){
            this.closeModal(previousActiveElement);
          }
      });
  
      document.addEventListener("keydown", (e) => {
        if (e.key === KEY.ESCAPE || e.keyCode === KEYCODE.ESC) {
          this.closeModal(previousActiveElement);
        }
      });
    }
  
    closeModal(previousActiveElement) {
      Utils.removeInert(this.modal);
      window.removeEventListener("scroll", Utils.disableScroll);
      previousActiveElement.focus();
      this.modal.remove();
    }
  }
  
  class AddTaskModal extends Modal {
    constructor() {
      super();
    }
  
    displayModal(previousActiveElement) {
      let modalHTML = `
      <div id="modal" role="dialog" aria-labelledby="modal_title">
      <form action="/" id="modal_form">
        <h2 id="modal_title">Add Task</h2>
        <div>
          <label for="title">Title</label>
          <input type="text" name="Title" id="title" placeholder="Enter task title">
        </div>
        <div>
          <label for="description">Description</label>
          <textarea name="Description" id="description" cols="50" rows="5" placeholder="Enter task description"></textarea>
        </div>
        <div>
          <label for="priority">Priority</label>
          <select name="Priority" id="priority">
            <option value="Select">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label for="date">Due Date</label>
          <input type="date" id="date" name="Date">
        </div>
        <button id="submit-btn">Submit</button>
        <button id="cancel-btn">Cancel</button>
        <button id="close-btn" aria-label="Close add task form">X</button>
      </form>
      </div>
      `;
  
      document.querySelector("body").insertAdjacentHTML("beforeend", modalHTML);
      this.setVariables();
      window.addEventListener("scroll", Utils.disableScroll);
      Utils.preventDefault(this.form);
      document.querySelector("input").focus();
      Utils.addInert(this.modal);
      this.setExitTriggers(previousActiveElement);
      this.validateOnEntry();
      this.submitBtn.addEventListener("click", () => {
        this.validateOnSubmit(previousActiveElement);
      });
    }
  
    validateOnEntry() {
      const title = this.form.elements.namedItem("title");
      const description = this.form.elements.namedItem("description");
      const priority = this.form.elements.namedItem("priority");
      const dueDate = this.form.elements.namedItem("date");
  
      title.addEventListener("input", (e) => {
        Utils.validateOnEntry(e);
      });
  
      description.addEventListener("input", (e) => {
        Utils.validateOnEntry(e);
      });
  
      priority.addEventListener("change", (e) => {
        Utils.validateOnSelect(e);
      });
  
      dueDate.addEventListener("change", (e) => {
        Utils.validateOnSelect(e);
      });
    }
  
    validateOnSubmit(previousActiveElement) {
      const title = this.form.elements.namedItem("title");
      const description = this.form.elements.namedItem("description");
      const priority = this.form.elements.namedItem("priority");
      const dueDate = this.form.elements.namedItem("date");
  
      let titleIsValid = false;
      let descriptionIsValid = false;
      let priorityIsValid = false;
      let dueDateIsValid = false;
  
      if (title.value.trim() != "" || title.value.trim().length >= 5) {
        titleIsValid = true;
      } else {
        title.style.borderColor = "red";
      }
  
      if (
        description.value.trim() != "" ||
        description.value.trim().length >= 20
      ) {
        descriptionIsValid = true;
      } else {
        description.style.borderColor = "red";
      }
  
      if (priority.selectedIndex !== 0) {
        priorityIsValid = true;
      } else {
        priority.style.borderColor = "red";
      }
  
      if (dueDate.value.trim() != "") {
        dueDateIsValid = true;
      } else {
        dueDate.style.borderColor = "red";
      }
  
      if (
        titleIsValid &&
        descriptionIsValid &&
        priorityIsValid &&
        dueDateIsValid
      ) {
        const newTask = new Task();
        newTask.title = title.value.trim();
        newTask.description = description.value.trim();
        newTask.priority = priority.value;
        newTask.dueDate = dueDate.value;
  
        const taskCreatedEvent = new Event("task_created");
        taskCreatedEvent.task = newTask;
        document.dispatchEvent(taskCreatedEvent);
  
        this.closeModal(previousActiveElement);
      }
    }
  }
  
  class UploadAvatarModal extends Modal {
    constructor() {
      super();
    }
  
    displayModal(previousActiveElement) {
      const modalHTML = `
      <div id="modal" role="dialog" aria-labelledby="modal_title">
        <form action="/" id = "modal_form">
          <h2 id="modal_title">Change Profile Image</h2>
          <div>
            <label for="upload-image">Upload new avatar</label>
            <input type="file" id="upload-image" name="Upload Image"
              accept="image/png, image/jpeg">
          </div>
          <button id="submit-btn" type="submit">Upload</button>
          <button id="cancel-btn">Cancel</button>
          <button id="close-btn">X</button>
        </form>
      </div>
      `;
      document.querySelector("body").insertAdjacentHTML("beforeend", modalHTML);
      this.setVariables();
      window.addEventListener("scroll", Utils.disableScroll);
      Utils.preventDefault(this.form);
      document.querySelector("#upload-image").focus();
      Utils.addInert(this.modal);
      this.setExitTriggers(previousActiveElement);
      let imageUploaded = '';
      const fileInput = document.querySelector('#upload-image');
      fileInput.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          imageUploaded = reader.result;
        });
        reader.readAsDataURL(this.files[0]);
      });
  
      this.submitBtn.addEventListener('click', () => {
        this.onSubmit(imageUploaded, previousActiveElement);
      });
  
    }
  
    onSubmit(image, previousActiveElement){
      
      const userAvatar = document.querySelector('#user-profile-img');
      if(image != '') {
        userAvatar.setAttribute('src', image);
        Utils.saveToLocalStorage('recent-avatar', image);
      }
  
      this.closeModal(previousActiveElement)
    }
  }
  
  // ** CHANGE BACKGROUND COLOR MODAL
  
  class BackgroundColorModal extends Modal {
    constructor() {
      super();
    }
  
    displayModal(previousActiveElement) {
      const modalHTML = `
      <div id="modal" role="dialog" aria-labelledby="modal_title">
        <form action="/" id = "modal_form">
          <h2 id="modal_title">Change Background Color</h2>
          <div>
            <label for="color-picker">Pick a color</label>
            <input type="color" name="color-picker" id="color-picker">
          </div>
          <button id="submit-btn">Submit</button>
          <button id="cancel-btn">Cancel</button>
          <button id="close-btn">X</button>
        </form>
      </div>
      `;
  
      document.querySelector("body").insertAdjacentHTML("beforeend", modalHTML);
      window.addEventListener("scroll", Utils.disableScroll);
      this.setVariables();
      Utils.preventDefault(this.form);
      document.querySelector("input").focus();
      Utils.addInert(this.modal);
      this.setExitTriggers(previousActiveElement);
      const colorPicker = document.querySelector('#color-picker');
      let color = '';
  
      colorPicker.addEventListener('change', (e) => {
         color = e.target.value;  
      });
  
      this.submitBtn.addEventListener('click', () => {
          this.onSubmit(color, previousActiveElement);
      });
    
    }
  
    onSubmit(color, previousActiveElement) {
  
      if (color) {
        Utils.saveToLocalStorage("background-color", color);
        document.querySelector('body').style.backgroundColor = color;
      }
  
      this.closeModal(previousActiveElement);
    }
  }
  
  
  