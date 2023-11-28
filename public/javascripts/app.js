// const form = document.getElementById('form');
const projectNameInput = document.getElementById('project-name');
const projectDiscInput = document.getElementById('project-disc');
const porjectImgInput = document.getElementById('project-img');
const submitBtn = document.getElementById('submit_btn');

submitBtn.onclick = async (e) => {
  // create new form data object
  e.preventDefault();
  const projectNameInputValue = projectNameInput.value;
  const projectDiscInputValue = projectDiscInput.value;
  const formData = new FormData();
  formData.append('name', projectNameInputValue);
  formData.append('disc', projectDiscInputValue);
  formData.append('file', porjectImgInput.files[0]);
  const req = await fetch('/projects/add', {
    method: 'POST',
    body: formData,
  });
  console.log(req);
};
