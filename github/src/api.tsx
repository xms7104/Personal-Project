//import username and token

import { LoggedOut } from "./stories/Page.stories";

const api = {
    hostname: `https://api.github.com/repos/Xie-Ms/Personal-Project`,
    async getLabels() {
      const response = await fetch(`${this.hostname}/labels`);
      return await response.json();
    },

    async setLabels(data:any) {
      console.log(data);
      const response = await fetch(`${this.hostname}/labels`, {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: 'token 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',
        }),
        method: 'POST',
      });
      return await response.json();
    },

    async deleteLabel(data:any) {
      console.log(data.name)
      const response = await fetch(`${this.hostname}/labels/${data.name}`, {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: 'token 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',
        }),
        method: 'DELETE',
      });
      console.log(response)
      return await response;    
      
    },
    async updataLabels(data:any) {

      const response = await fetch(`${this.hostname}/labels/${data.oldName}`, {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: 'token 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',
        }),
        method: 'POST',
      });
      console.log(response)
      return await response.json();
    },

    async getListIssuesState() {
      const response = await fetch(`${this.hostname}/issues`);
      return await response.json();
    },
    async Pagination(per_page:number|string, paging:number|string) {
      const response = await fetch(
        `${this.hostname}/issues?per_page=${per_page}&page=${paging}`
      );
      return await response.json();
    },
    async filiter(userName:string) {
      const response = await fetch(`${this.hostname}/issues?assignee=${userName}`);
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
  