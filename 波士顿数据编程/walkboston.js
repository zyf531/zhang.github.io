function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
 container.innerHTML = '<ul id= "data">' + html + '</ul>';
  // TdataODO: add code to display the html variable inside a ul element with id=""
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
}

function renderTopSalaries(boston, container) {
  // Step 1 solution
  let people = boston.data;
  let topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);//降序排序,从高到低
  const len = topSalaries.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' +
      '<h2>' +
      "name: " +
      topSalaries[i][8] +
      '</h2>' +
      '<h3>' +
      "Salaries: " +
      topSalaries[i][11] +
      '</h3>';
  }

  container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

function renderTopEmployees(boston, container) {
  // step 2 solution
  let people = boston.data;
  let topEmployees = people.filter((a) => (a)[11] >200000);
  const len = topEmployees.length;
  let html = ' ';
  for (let i = 0; i < len; i++){
    html +=
    '<li class="top">' +
    '<h2>' +
    "name: " +
    topEmployees[i][8] +
    '</h2>' +
    '<h3>' +
    "salaries: " +
    topEmployees[i][11] +
    '</h3>';
  }

  container.innerHTML = '<ul id = "topEmployyees">' + html + '</ul>';
}
// renderPosts(boston, document.getElementById('container'));
// renderTopSalaries(boston,document.getElementById('container')); //Step 1 solution
// renderTopEmployees(boston, document.getElementById('container'));//Step 2 soluttion
