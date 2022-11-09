let jwtToken = JSON.parse(window.localStorage.getItem("userToken") as string);
let jwtName = JSON.parse(window.localStorage.getItem("userName") as string);
let jwtRepo = JSON.parse(
  window.localStorage.getItem("userChooseRepo") as string
);

const api = {
  hostname: `https://api.github.com/repos/${jwtName}/${jwtRepo}`,
  async getRepo(userName: string, userToken: string) {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${userToken}`,
          "if-none-match": "",
        }),
      }
    );
    return await response.json();
  },

  async getLabels() {
    const response = await fetch(`${this.hostname}/labels`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
    });
    return await response.json();
  },

  async setLabels(data: any) {
    const response = await fetch(`${this.hostname}/labels`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
      method: "POST",
    });
    return await response.json();
  },

  async deleteLabel(data: any) {
    const response = await fetch(`${this.hostname}/labels/${data.name}`, {
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
      method: "DELETE",
    });
    return await response;
  },
  async updataLabels(data: any) {
    const response = await fetch(`${this.hostname}/labels/${data.oldName}`, {
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
      method: "POST",
    });
    return await response.json();
  },

  async getListIssuesState(page: number) {
    const response = await fetch(`${this.hostname}/issues?page=${page}`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
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
        "if-none-match": "",
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
        "if-none-match": "",
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
        "if-none-match": "",
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
          "if-none-match": "",
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
        "if-none-match": "",
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
          "if-none-match": "",
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
        "if-none-match": "",
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
        "if-none-match": "",
      }),
    });
    return await response.json();
  },

  async SearchIssues(IssuesName: string) {
    const response = await fetch(
      `https://api.github.com/search/issues?q=repo:${jwtName}/${jwtRepo}%20${IssuesName}`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
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
        "if-none-match": "",
      }),
    });
    return await response.json();
  },

  async setIssue(data: any) {
    const response = await fetch(`${this.hostname}/issues`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
      method: "POST",
    });
    return await response.json();
  },

  async getIssueData(IssueNum: string | undefined) {
    const response = await fetch(`${this.hostname}/issues/${IssueNum}`, {
      headers: new Headers({
        "Content-type": "application/json",
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
    });
    return await response.json();
  },

  async getIssueTimeline(IssueNum: string | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/${IssueNum}/timeline`,
      {
        headers: new Headers({
          "Content-type": "application/json",
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
      }
    );
    return await response.json();
  },
  async CreateComment(data: any, IssueNum: string | number | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/${IssueNum}/comments`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
        method: "POST",
      }
    );
    return await response.json();
  },

  async UpdateComment(data: any, commentNum: string | number | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/comments/${commentNum}`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
        method: "PATCH",
      }
    );
    return await response.json();
  },

  async DeleteComment(data: any, commentNum: string | number | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/comments/${commentNum}`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
        method: "DELETE",
      }
    );
    return await response;
  },

  async UpdateIssue(data: any, IssueNum: string | number | undefined) {
    const response = await fetch(`${this.hostname}/issues/${IssueNum}`, {
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/vnd.github+json",
        Authorization: `token ${jwtToken}`,
        "if-none-match": "",
      }),
      method: "PATCH",
    });
    return await response.json();
  },

  async AddEmoji(data: any, IssueNum: string | number | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/${IssueNum}/reactions`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
        method: "POST",
      }
    );
    return await response.json();
  },

  async AddEmojiComment(data: any, commentNum: string | number | undefined) {
    const response = await fetch(
      `${this.hostname}/issues/comments/${commentNum}/reactions`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `token ${jwtToken}`,
          "if-none-match": "",
        }),
        method: "POST",
      }
    );
    return await response.json();
  },
};

export default api;
