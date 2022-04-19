const issue = {
  title: "function getName() is not working properly",
  repositoryNameAssociated: "playbook.git",
  status: "Open",
  numberOfComments: "2",
  labels: ["javascript", "bug"],
  author: "Hector Ramirez",
  dateCreated: "15/05/2022",
  lastUpdate: "16/05/2022",
  getTittleAndAuthor: function () {
    return `Title: ${this.title}\nAuthor: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `Status: ${this.status}\nRepository: ${this.repositoryNameAssociated}\nComments: ${this.numberOfComments}\nLabels: ${this.labels}\nDateUpdate: ${this.lastUpdate}`;
  },
};
console.log(issue.getTittleAndAuthor());
console.log(issue.getGeneralInfo());
