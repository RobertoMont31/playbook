const repo = {
    name: "LaunchX",
    author: "RobertoMont31",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
const issue = {
    title: "IssueTitle", 
    repoNameAsso: "Playbook", 
    status: "open", 
    numberOfComments: "15",
    labels: "3", 
    author: "Roberto", 
    dateCreated: "17.04.2022", 
    lastUpdated: "17.04.2022", 
    getTitleAndAuthor: function(){ 
      return `The author of the Issue "${this.title}" is: ${this.author}`
    }, 
    getGeneralInfo: function(){
      return `This Issues is ${this.status} \n was created on: ${this.dateCreated} \n and hasn't been updated since: ${this.lastUpdated}`
    }
}

const PullRequest = {
  title: "primer post",
  branchName: "master", 
  dateCreated: "17.04.2022",
  status: "open",
  repoNameAsso: "playbook", 
  getStatus: function(){
    return `The status of this pull request is: ${this.status}`
  },
  getTitleAndAuthor: function(){
    return `The author of the pull request ${this.title} is: ${this.author}` 
  }
}

//Twitter 
const  hashtag = {
  title: "SpiderVerse",
  NumOfMentions: "2345",
  isTrendingtopic: "true", 
  trendingTopicPosition: "6", 
  getTTInfo: function(){
    return `The #${this.title} has ${this.NumOfMentions} mentions`
  }
}

//Facebook
const post = {
  postedBy: "",
  sharedfrom: "", 
  likes: "", 
  shares: "",
  comments: "", 
  getpost: function(){
    return `Posted by: ${this.postedBy} \n Shared from: ${this.sharedfrom} \n Likes: ${this.likes} \n Shares: ${this.shares} \n Comments: ${this.comments}`
  }
}





   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log(issue.getGeneralInfo())
   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAuthor())