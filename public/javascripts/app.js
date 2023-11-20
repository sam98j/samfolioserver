// const form = document.getElementById('form');
const projectNameInput = document.getElementById('project-name');
const projectDiscInput = document.getElementById('project-disc');
const submitBtn = document.getElementById('submit_btn');

submitBtn.onclick = async (e) => {
  e.preventDefault();
  const projectNameInputValue = projectNameInput.value;
  const projectDiscInputValue = projectDiscInput.value;
  const projectData = {name: projectNameInputValue, disc: projectDiscInputValue};
  const req = await fetch('/projects/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(projectData)
  });
  console.log(req);
};
