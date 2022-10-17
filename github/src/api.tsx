//import username

let jwtToken: string;
function getProfile() {
  jwtToken = JSON.parse(window.localStorage.getItem("userToken") as string);
}
getProfile();

const api = {
  hostname: `https://api.github.com/repos/Xie-Ms/Personal-Project`,
  async getLabels() {
    const response = await fetch(`${this.hostname}/labels`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async setLabels(data: any) {
    console.log(`token ${jwtToken}`);
    const response = await fetch(`${this.hostname}/labels`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
      method: "POST",
    });
    return await response.json();
  },

  async deleteLabel(data: any) {
    console.log(data.name);
    const response = await fetch(`${this.hostname}/labels/${data.name}`, {
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
      method: "DELETE",
    });
    console.log(response);
    return await response;
  },
  async updataLabels(data: any) {
    const response = await fetch(`${this.hostname}/labels/${data.oldName}`, {
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
      method: "POST",
    });
    console.log(response);
    return await response.json();
  },

  async getListIssuesState(page: number) {
    const response = await fetch(`${this.hostname}/issues?page=${page}`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getYourIssues() {
    const response = await fetch(`${this.hostname}/issues?creator=Xie-MS`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getIssuesAuthorMe() {
    const response = await fetch(`${this.hostname}/issues?author=@me`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getIssuesAssignee() {
    const response = await fetch(`${this.hostname}/assignees`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getIssuesAssigneeMe(assigneeName: string) {
    const response = await fetch(
      `${this.hostname}/issues?assignee=${assigneeName}`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
        }),
      }
    );
    return await response.json();
  },

  async getIssuesMentionsMe() {
    const response = await fetch(`${this.hostname}/issues?mentioned=Xie-MS`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getIssuesSort(date: string, sort: string) {
    const response = await fetch(
      `${this.hostname}/issues?sort=${date}-${sort}`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
        }),
      }
    );
    return await response.json();
  },

  async getIssuesLabels(dataName: string) {
    const response = await fetch(`${this.hostname}/issues?labels=${dataName}`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async SearchAll(q: string) {
    const response = await fetch(`${this.hostname}/issues?${q}`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async SearchIssues(IssuesName: string) {
    const response = await fetch(
      `https://api.github.com/search/issues?q=repo:Xie-Ms/Personal-Project%20${IssuesName}`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
        }),
      }
    );
    return await response.json();
  },

  async ClosedIssues() {
    const response = await fetch(`${this.hostname}/issues?state=closed`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async Pagination(per_page: number | string, paging: number | string) {
    const response = await fetch(
      `${this.hostname}/issues?per_page=${per_page}&page=${paging}`
    );
    return await response.json();
  },
  async filiter(userName: string) {
    const response = await fetch(
      `${this.hostname}/issues?assignee=${userName}`
    );
    return await response.json();
  },
  async getIssues() {
    const response = await fetch(`${this.hostname}/issues/comments`);
    return await response.json();
  },
  async getTimeLine() {
    const response = await fetch(`${this.hostname}/issues/1/timeline`);
    return await response.json();
  },
  async getIssuesComments() {
    const response = await fetch(`${this.hostname}/issues/comments/1250060561`);
    return await response.json();
  },
  async getNewIssueState() {
    const response = await fetch(`${this.hostname}/issues/labels/enhancement`);
    return await response.json();
  },
};

export default api;
