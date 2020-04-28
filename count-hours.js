function createTextNode(text) {
  let result = document.createElement("span");
  result.appendChild(document.createTextNode(text));
  return result;
}

function createTimeNode(data) {
  let result = document.createElement("span");
  let text = createTextNode(` [${data.stimated}][${data.real}]`);
  result.appendChild(data.assigneeButton);
  result.appendChild(text);
  result.style.marginLeft = "10px";
  return result;
}

function addTimeTotals() {
  const columns = document.querySelectorAll(".project-column");
  const timesRegex = RegExp(/\[([\d.\d]*)\]/g);

  columns.forEach((column) => {
    const columnTitle = column.querySelector("h3"); // Title to append info later
    const articles = column.querySelectorAll("article"); // Cards
    const times = {}; // {userName: {stimated: n, real: m, assigneeButton: <a>}}

    for (article of articles) {
      const title = article.querySelector("a").innerText;
      let assigneeButton = article.querySelector("button.avatar");
      if (assigneeButton) {
        assigneeButton = assigneeButton.cloneNode(true);
        assignee = assigneeButton.dataset["cardFilter"].split(":")[1];
      } else {
        assignee = assigneeButton = createTextNode("?");
      }
      if (!times.hasOwnProperty(assignee)) {
        times[assignee] = {
          stimated: 0,
          real: 0,
          assigneeButton: assigneeButton,
        };
      }

      let taskTimes = Array.from(title.matchAll(timesRegex), (m) =>
        Number(m[1])
      );
      if (!taskTimes) continue;
      if (taskTimes.length == 1) {
        times[assignee].real += Number(taskTimes[0]);
      }
      if (taskTimes.length == 2) {
        times[assignee].real += Number(taskTimes[1]);
        times[assignee].stimated += Number(taskTimes[0]);
      }
    }
    // We have times for this column, let's add it next to the columnTitle
    for (data of Object.values(times)) {
      if (!data.stimated && !data.real) continue;
      const timeNode = createTimeNode(data);
      columnTitle.insertAdjacentElement("afterend", timeNode);
    }
  });
}

addTimeTotals();
