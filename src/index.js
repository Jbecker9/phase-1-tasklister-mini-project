document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();
    submitList(e.target.maincontent.value)
  })
});

function submitList(maincontent){
  let li = document.body.div.createElement('li');
  p.textContent = maincontent;
  document.body.div.querySelector('#tasks').appendChild(li)
}
